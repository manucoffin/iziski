var menuActif = '',
    tableDesTitre = {
        site_dashboard : 'Dashboard',
        site_blog : 'Blog',
        site_blog_liste : 'Blog - Liste des posts',
        site_blog_ajouter : 'Blog - Ajouter un post',
        site_evenement : 'Événement',
        site_evenement_liste : 'Événement - liste',
        site_evenement_ajouter : 'Événement - ajouter',
        site_statistiques : 'Statistiques',
        site_utilisateurs : 'Utilisateurs',
        site_shop : 'Shop'
    };

window.onload = function(){
    ZoneBoite = new DomWork(byId('insertZone'));
    
    setTimeout(function(){
        
        //ouvre le dashBoard de site
        changeOnglet('site_dashboard');
        
        //initialise l'ouverture des menus
        $(document).ready(function(){ $('.collapsible').collapsible();});
        
    },1000);
    
    //charge les menus
    menuEntreprise = new DomWork(byId('menuEntreprise'));
    menuSite = new DomWork(byId('menuSite'));
    
    menuEntreprise.ajaxInsertHtml({path : 'section/menuEntreprise.html'});
    menuSite.ajaxInsertHtml({path : 'section/menuSite.html'});
    
}

function changeOnglet(cible){
    var titreZone = byId('titreZone'),
        loaderBoite = byId('loaderBoite'),
        insertZone = byId('insertZone'),
        classBoite = byQueryAll('.boite');
    
    if(menuActif != cible){
        
        menuActif = cible;
        
        //supprime les anciennes boites
        for(var i = 0 ; i < classBoite.length ; i++) classBoite[i].deleteNode();

        //affiche le titre
        titreZone.textContent = tableDesTitre[cible];

        insertZone.innerHTML = '';

        //SITE : DASHBOARD
        if(cible == 'site_dashboard'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s9'}, contents : structureBoite('equalizer', 'Vue de l\'activité', 'boiteAjax/site_statistiques_vente_visite.html', creatDashSiteData)},
                    {type : 'div', attributes : {class : 'col s3'}, contents : structureBoite('fast_forward', 'Actions rapides', 'boiteAjax/site_action_rapide.html')}
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s5'}, contents : structureBoite('mode_edit', 'Activitées éditorial', 'boiteAjax/site_activite_editorial.html')},
                    {type : 'div', attributes : {class : 'col s7'}, contents : structureBoite('star', 'Derniers avis sur les produits', 'boiteAjax/site_produits_dernier_avis.html')}
                ]}
            ]);
        }
        
        
        //SITE : BLOG
        if(cible == 'site_blog'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Liste des posts dans le blog', 'boiteAjax/site_blog_liste.html')},
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Ajouter un post', 'boiteAjax/site_blog_liste.html', function(){
                    $('.datepicker').pickadate({selectMonths: true, selectYears: 15});
                    $(document).ready(function() {$('select').material_select();});
                })}
            ]);
        }
        
        if(cible == 'site_blog_liste'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Liste des posts dans le blog', 'boiteAjax/site_blog_liste.html')}
            ]);
        }
        
        if(cible == 'site_blog_ajouter'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Ajouter un post', 'boiteAjax/site_blog_ajouter.html', function(){
                    $('.datepicker').pickadate({selectMonths: true, selectYears: 15});
                    $(document).ready(function() {$('select').material_select();});
                })}
            ]);
        }
        
        
        //SITE : EVENEMENT
        if(cible == 'site_evenement'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('today', 'Liste des événements', 'boiteAjax/site_evenement_liste.html')},
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('today', 'Ajouter un événement', 'boiteAjax/site_evenement_ajouter.html', function(){
                    $('.datepicker').pickadate({selectMonths: true, selectYears: 15});
                    $(document).ready(function() {$('select').material_select();});
                })}
            ]);
        }
        
        if(cible == 'site_evenement_liste'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('today', 'Liste des événements', 'boiteAjax/site_evenement_liste.html')},
            ]);
        }
        
        if(cible == 'site_evenement_ajouter'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('today', 'Ajouter un événement', 'boiteAjax/site_evenement_ajouter.html', function(){
                    $('.datepicker').pickadate({selectMonths: true, selectYears: 15});
                    $(document).ready(function() {$('select').material_select();});
                })}
            ]);
        }
    }
}

function structureBoite(icone, titre, path, onload = null){
    return [
        {type : 'div', attributes : {class : 'boiteAjax card'}, contents : [
            {type : 'div', attributes : {class : 'enteteBoite'}, contents : [
                {type : 'i', attributes : {class : 'small material-icons colorIcone'}, contents : icone},
                {type : 'span', attributes : {class : 'titreDeLaBoite'}, contents : titre}
            ]},
            {type : 'div', attributes : {class : 'divInnerBoite'}, contents : [{ajax : {path : path, onload : onload}}]}
        ]}
    ]
}

function selectedMenu(cible){
    var btMenu = byClass('collapsible-header selectedMenu'),
        selectedItem = byId(cible);
    
    btMenu[0].className = btMenu[0].className.replace('selectedMenu','');
    selectedItem.className += ' selectedMenu';    
}