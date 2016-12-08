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
    
    // EXTENSION DE TOUTES LES CALSSES AVEC LA MÉTHODE EXTEND
    String.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    Array.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    Number.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};
    Node.prototype.extend=function(obj){for( var i in obj){this[i] =obj[i]};};

    
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
    Node.prototype.extend({
        changeId : function(val){
            this.id=val;
            return this;
        },
        css : function(arrayCss){for(var i in arrayCss) this.style[i.css()] = arrayCss[i];},
        addAttributes : function(arrayAttributes){for(var i in arrayAttributes) this.setAttribute(i,arrayAttributes[i]);},
        addFunctions : function(arrayFuntions){
            for(var i in arrayFuntions){
                var desc = !(arrayFuntions[0]['desc'])? false : arrayFuntions[0]['desc'],
                    event = !(arrayFuntions[0]['event'])? 'click' : arrayFuntions[0]['event'];
                this.addEventListener(event, arrayFuntions[0]['function'], desc);
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
        creatNode : function(type, attributs, functions, styles, contents){
            var element = this.createNodeElement(type);

            element.css(styles);
            element.addAttributes(attributs);
            element.addFunctions(functions);

            if(typeof(contents) == 'object') element.jsonLoopNode(contents);
            else element.creatTextElement(contents);
            
            return element;
        },
        createNodeElement : function(type){
            var element = document.createElement(type);
            if(this != 'undefined') this.appendChild(element);
            return element;
        },
        creatTextElement : function(text){
            var element = document.createTextNode(text);
            if(this != 'undefined') this.appendChild(element);
            return element;
        },
        deleteNode : function(){
            var parent = this.parentNode;
            parent.removeChild(this);
        }
    });
})();