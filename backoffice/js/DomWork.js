(function(){

    //REG EXP
    Reg = {
        required : /[^.*]/,
        alpha : /^[a-z ._-]+$/i,
        alphanum : /^[a-z0-9 ._-]+$/i,
        digitSign : /^[-+]?[0-9]+$/,
        digit: /^[0-9]+$/,
        nodigit : /^[^0-9]+$/,
        number : /^[-+]?\d*\.?\d+$/,
        email : /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
        phone : /^[\d\s().-]+$/,
        url : /^(http|https):\/\/[a-z0-9\-\.\/_]+\.[a-z]{2,3}$/i,
        tag : /<[^<>]+>/g , // pour rechercher toutes les occurences d'une balise HTML ou XML
        script : /(<script).+(<\/script>)/gi // pour rechercher toutes les occurences de script
    };

    
    // SELECTEUR DE NOEUD
    byId = function(id) {return document.getElementById(id);};
    byTag = function(tn) {return document.getElementsByTagName(tn);};
    byClass = function(cl) {return document.getElementsByClassName(cl);};
    byName  = function(n) {return document.getElementsByName(n);};
    byQueryAll = function(css) {return document.querySelectorAll(css);};
    byQuery = function(css) {return document.querySelector(css);};
    nodeFragment = function() {return document.createDocumentFragment();};
    

    // HAUTEUR ET LARGEUR D'ÉCRAN SUR TOUT LES NAVIGATEURS

    // Retourne la largeur de l'écran
    windowWidth = function (){
        if(window.innerWidth)
            return window.innerWidth;
        else if (document.documentElement.clientWidth)
            return document.documentElement.clientWidth;
        else if(document.body.clientWidth)
            return document.body.clientWidth;
        else 
            return -1;
    }
    
    // Retourne la hauteur de l'écran
    windowHeight = function (){
        if(window.innerHeight)
            return window.innerHeight;
        else if (document.documentElement.clientHeight)
            return document.documentElement.clientHeight;
        else if(document.body.clientHeight)
            return document.body.clientHeight;
        else 
            return -1;
    }
    
    //CLASS DomWork
    DomWork = function(noeud){this.noeud = noeud;}
    
    // EXTENSION DE TOUTES LES CALSSES AVEC LA MÉTHODE EXTEND
    String.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    Array.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    Number.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    DomWork.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};

    
    // EXTENSION DE LA CLASS STRING
    String.prototype.extend({
        left : function(n){return this.substring(0,n)},
        right : function(n){return this.substring(this.length-n)},
        css : function(){
            var table = this.split('-');
            for(var i = 1 ; i < table.length ; i++) table[i] = table[i].capitalize();
            return table.join('');
        },
        capitalize: function(){return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();},
        trim: function(){return this.replace(/(^\s*|\s*$)/g,"");}
    });
    
    
    // EXTENSION DE LA CLASS ARRAY		
    Array.prototype.extend({
        merge : function(t){
            for (var i =0; i< t.length;i++) this.push(t[i]);
            return this
        }
    });
    
    
    // EXTENSION DE LA CLASS NUMBER
    Number.prototype.extend({
        p : function(n){ return Math.pow(this,n)}
    });		
    
    
    // EXTENSTION DE LA CLASS NODE
    DomWork.prototype.extend({
        changeId : function(val){
            this.noeud.id=val;
            return this.noeud;
        },
        css : function(arrayCss){for(var i in arrayCss) this.noeud.style[i.css()] = arrayCss[i];},
        addAttributes : function(arrayAttributes){for(var i in arrayAttributes) this.noeud.setAttribute(i,arrayAttributes[i]);},
        addFunctions : function(arrayFuntions){
            for(var i in arrayFuntions){
                var desc = !(arrayFuntions[0]['desc'])? false : arrayFuntions[0]['desc'],
                    event = !(arrayFuntions[0]['event'])? 'click' : arrayFuntions[0]['event'];
                this.noeud.addEventListener(event, arrayFuntions[0]['function'], desc);
            }
        },
        insertDomNode : function(NodeJson){
            nodeFragment();
            this.jsonLoopNode(NodeJson);
        },
        jsonLoopNode : function(NodeJson){
            for(var i = 0; i < NodeJson.length ; i++){
                if(NodeJson[i]['texte']){
                    this.creatTextElement(NodeJson[i]['texte']);
                }else if (NodeJson[i]['ajax']){
                    this.ajaxInsertHtml({
                        path : NodeJson[i]['ajax']['path'],
                        data : NodeJson[i]['ajax']['data'],
                        methode : NodeJson[i]['ajax']['methode'],
                        insertMode : NodeJson[i]['ajax']['insertMode'],
                        async : NodeJson[i]['ajax']['async'],
                        loader : NodeJson[i]['ajax']['loader'],
                        onprogress : NodeJson[i]['ajax']['onprogress'],
                        onerror : NodeJson[i]['ajax']['onerror'],
                        onload : NodeJson[i]['ajax']['onload']
                    });
                }else{
                    this.creatNode(
                        NodeJson[i]['type'],
                        NodeJson[i]['attributes'],
                        NodeJson[i]['functions'],
                        NodeJson[i]['styles'],
                        NodeJson[i]['contents']
                    );
                }
            }
        },
        creatNode : function(type, attributs, functions, styles, contents = ''){
            var element = new DomWork(this.createNodeElement(type));

            element.css(styles);
            element.addAttributes(attributs);
            element.addFunctions(functions);

            if(typeof(contents) == 'object') element.jsonLoopNode(contents);
            else element.creatTextElement(contents);
            
            return element;
        },
        createNodeElement : function(type){
            var element = document.createElement(type);
            if(this.noeud != 'undefined') this.noeud.appendChild(element);
            return element;
        },
        creatTextElement : function(text){
            var element = document.createTextNode(text);
            if(this != 'undefined') this.noeud.appendChild(element);
            return element;
        },
        deleteNode : function(){
            var parent = this.noeud.parentNode;
            parent.removeChild(this.noeud);
        },
        ajaxInsertHtml : function(tbJson){
            var xhr = new XMLHttpRequest(),
                pointInsertion = this.noeud,
                methode = (tbJson['methode'])? tbJson['methode'] : 'get',
                data = (tbJson['data'])? tbJson['data'] : null,
                asynchrone = !(tbJson['async'])? true : tbJson['async'],
                insertMode = (tbJson['insertMode'])? tbJson['insertMode'] : 'innerHTML';
            
            //insertion d'un loader pour faire patienter
            if(tbJson['loader']){
                if(typeof(tbJson['loader']) == 'object') this.jsonLoopNode(tbJson['loader']);
                else this.innerHTML = tbJson['loader'];
            }
            
            //onload, onprogress et onerror
            if(tbJson['onload']) xhr.onload = tbJson['onload'];
            if(tbJson['onprogress']) xhr.onprogress = tbJson['onprogress'];
            if(tbJson['onerror']) xhr.onerror = tbJson['onerror'];
            
            //ouverture du l'XMLHttpRequest
            if(methode = 'get'){
                var pathData = (data == null)? tbJson['path'] : tbJson['data'] + '?' + data;
                xhr.open(methode, pathData, asynchrone);
                xhr.send(null);
            }else{
                xhr.open(methode, tbJson['path'], asynchrone);
                xhr.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
                xhr.send(data);
            }

            //Execution à la fin du chargement
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4 && xhr.status == 200){
                    pointInsertion.innerHTML = '';
                    if(insertMode == 'innerHTML') pointInsertion.innerHTML += xhr.responseText;
                    if(insertMode == 'insertDomNode') pointInsertion.insertDomNode(xhr.responseText);
                }
            }
            
        }
    });
})();