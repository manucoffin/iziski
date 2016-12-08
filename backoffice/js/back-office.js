var tableDesTitre = {
    dashBoardSite : 'Dashboard',
    blog : 'Blog'
}

window.onload = function(){
    changeOnglet
}

function changeOnglet(cible){
    var titreZone = byId('titreZone'),
        loaderBoite = byId('loaderBoite'),
        classBoite = byQueryAll('.boite');
    
    //supprime les anciennes boites
    for(var i = 0 ; i < classBoite.length ; i++) classBoite[i].deleteNode();
    
    //montre le loader
    loaderBoite.style.display = 'block';
    
    //affiche le titre
    titreZone.textContent = tableDesTitre[cible];
    
    //selectionne les vus à montrer
    if(cible == 'dashBoardSite') afficheBoites(['vuActiviteSite']);
    if(cible == 'blog') afficheBoites(['lesBlogs']);
    
}

function afficheBoites(tableBoite){
    
    for(var i = 0 ; i < tableBoite.length ; i++){
        ajaxBoite(tableBoite[i]);
    }
}

function ajaxBoite(boiteCible){
    var xhr = new XMLHttpRequest(),
        insertZone = byId('insertZone'),
        loaderBoite = byId('loaderBoite');
    
    xhr.open('GET', 'boiteAjax/' + boiteCible + '.html');
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            loaderBoite.style.display = 'none';
            insertZone.innerHTML += xhr.responseText
        }
    }
}