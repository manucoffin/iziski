var menuActif = '',
    tableDesTitre = {
        dashBoardSite : 'Dashboard',
        blog : 'Blog',
        evenement : 'Événement',
        statistiques : 'Statistiques',
        utilisateurs : 'Utilisateurs',
        shop : 'Shop'
    };

window.onload = function(){
    ZoneBoite = new DomWork(byId('insertZone'));
    
    setTimeout(function(){
        
        //ouvre le dashBoard de site
        changeOnglet('dashBoardSite');
        
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

        //selectionne les vus à montrer
        if(cible == 'dashBoardSite'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s9'}, contents : structureBoite('equalizer', 'Vue de l\'activité', 'boiteAjax/vuActiviteSite.html', creatDashSiteData)},
                    {type : 'div', attributes : {class : 'col s3'}, contents : structureBoite('fast_forward', 'Actions rapides', 'boiteAjax/ActionRapideSite.html')}
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s5'}, contents : structureBoite('mode_edit', 'Activitées éditorial', 'boiteAjax/ActiviteEditorial.html')},
                    {type : 'div', attributes : {class : 'col s7'}, contents : structureBoite('star', 'Derniers avis sur les produits', 'boiteAjax/DernierAvisProduits.html')}
                ]}
            ]);
        }
        if(cible == 'blog'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Les blogs', 'boiteAjax/lesBlogs.html')}
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