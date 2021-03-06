var menuActif = '',
    tableDesTitre = {
        site_dashboard : 'Dashboard',
        site_blog : 'Blog',
        site_blog_liste : 'Blog : Liste des posts',
        site_blog_ajouter : 'Blog : Ajouter un post',
        site_evenement : 'Événement',
        site_evenement_liste : 'Événement : Liste',
        site_evenement_ajouter : 'Événement : Ajouter',
        site_statistiques : 'Statistiques',
        site_statistiques_vente_visite : 'Statistiques : Vente / Visite',
        site_statistiques_vente_30j : 'Statistiques : Vente sur la période',
        site_statistiques_visite_30j : 'Statistiques : Visite sur la période',
        site_statistiques_navigateur : 'Statistiques : Navigateur',
        site_statistiques_pages : 'Statistiques : Pages',
        site_statistiques_carte : 'Statistiques : Carte',
        site_statistiques_seo : 'Statistiques : Seo',
        site_statistiques_support : 'Statistiques : Matériels utilisés',
        site_utilisateurs : 'Utilisateurs',
        site_produit : 'Produits',
        site_produit_liste : 'Produits : liste',
        site_produit_ajouter : 'Produits : Ajouter',
        site_produit_avis : 'Produits : Avis',
        entreprise_dashboard : 'Entreprise : Dashboard',
        entreprise_flux : 'Flux d\'entreprise',
        entreprise_flux_poster : 'Poster dans le flux',
        entreprise_commande : 'Commande',
        entreprise_commande_client : 'Commande : Client',
        entreprise_commande_liste : 'Commande : Liste',
        entreprise_commande_ajouter : 'Commande : liste',
        entreprise_sav_reclamation : 'SAV : Réclamation',
        entreprise_sav_historique : 'SAV : Historique',
        entreprise_sav_repondre : 'SAV : Répondre',
        entreprise_stock : 'Stock',
        entreprise_stock_liste : 'Stock : Liste',
        entreprise_stock_analyse : 'Stock : Analyse',
        entreprise_artisant : 'Artisant',
        entreprise_artisant_liste : 'Artisant : Liste',
        entreprise_artisant_ajouter : 'Artisant : Ajouter'
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
                ]},
                {type : 'div', attributes : {class : 'row'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : [
                        {type : 'p', styles : {textAlign : 'right'}, contents : [
                            {type : 'a', attributes : {class : 'btn-floating btn-large waves-effect waves-light', id: 'ajouterBoite'}, styles : {backgroundColor : 'rgb(254, 126, 41)'}, contents : [
                                {type : 'i', attributes : {class : 'material-icons'}, contents : 'add'}
                            ]}
                        ]}
                    ]}
                ]}
            ]);
        }
        
        
        //SITE : BLOG
        if(cible == 'site_blog'){
             ZoneBoite.insertDomNode([
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Liste des posts dans le blog', 'boiteAjax/site_blog_liste.html')},
                {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('message', 'Ajouter un post', 'boiteAjax/site_blog_ajouter.html', function(){
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
        
        //SITE : STATISTIQUES
        if(cible == 'site_statistiques'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Localisation', 'boiteAjax/site_statistiques_map.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Pages visitées', 'boiteAjax/site_statistiques_pages.html', creatChartPage)},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Navigateur (en %)', 'boiteAjax/site_statistiques_navigateur.html', creatChartNavigateur)}
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s6'}, contents : structureBoite('equalizer', 'Ventes', 'boiteAjax/site_statistiques_vente_30j.html', creatChartVente)},
                    {type : 'div', attributes : {class : 'col s6'}, contents : structureBoite('equalizer', 'Visites', 'boiteAjax/site_statistiques_visite_30j.html', creatChartVisite)},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s8'}, contents : structureBoite('equalizer', 'Moteur de recherche', 'boiteAjax/site_statistiques_seo.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Matériels utilisés (en %)', 'boiteAjax/site_statistiques_support.html', creatChartSupport)},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_vente_30j'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Ventes sur la période', 'boiteAjax/site_statistiques_vente_30j.html', creatChartVente)},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_visite_30j'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Visites sur la période', 'boiteAjax/site_statistiques_visite_30j.html', creatChartVisite)},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_navigateur'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Navigateur', 'boiteAjax/site_statistiques_navigateur.html', creatChartNavigateur)},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_seo'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Moteur de recherche', 'boiteAjax/site_statistiques_seo.html')},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_pages'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Page visitées', 'boiteAjax/site_statistiques_pages.html', creatChartPage)},
                    {type : 'div', attributes : {class : 'col s4'}},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_support'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('equalizer', 'Matériels utilisés', 'boiteAjax/site_statistiques_support.html', creatChartSupport)},
                    {type : 'div', attributes : {class : 'col s4'}},
                ]}
            ]);
        }
        
        if(cible == 'site_statistiques_carte'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('equalizer', 'Réglage de la période', 'boiteAjax/site_statistiques_reglages.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s2'}},
                    {type : 'div', attributes : {class : 'col s6'}, contents : structureBoite('equalizer', 'Localisation', 'boiteAjax/site_statistiques_map.html')},
                    {type : 'div', attributes : {class : 'col s2'}},
                ]}
            ]);
        }
        
        
        //SITE : PRODUITS
        if(cible == 'site_produit'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Grand Ski', 'boiteAjax/site_produits_ski_grand.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Petit Ski', 'boiteAjax/site_produits_ski_petit.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Chaussure', 'boiteAjax/site_produits_chaussure.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Hoodie', 'boiteAjax/site_produits_vetement.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : ''},
                    {type : 'div', attributes : {class : 'col s4'}, contents : ''},
                ]}
            ]);
        }
        
        if(cible == 'site_produit_liste'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Grand Ski', 'boiteAjax/site_produits_ski_grand.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Petit Ski', 'boiteAjax/site_produits_ski_petit.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Chaussure', 'boiteAjax/site_produits_chaussure.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('shopping_cart', 'Hoodie', 'boiteAjax/site_produits_vetement.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : ''},
                    {type : 'div', attributes : {class : 'col s4'}, contents : ''},
                ]}
            ]);
        }
        
        if(cible == 'site_produit_ajouter'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Ajouter un produits', 'boiteAjax/site_produits_ajouter.html')},
                ]}
            ]);
        }
        
        if(cible == 'site_produit_avis'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Filtre', 'boiteAjax/site_produits_filtre.html', function(){$(document).ready(function() {$('select').material_select();});})},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('star', 'Derniers avis sur les produits', 'boiteAjax/site_produits_dernier_avis.html')},
                ]}
            ]);
        }
        
        //ENTREPRISE : SAV
        if(cible == 'entreprise_sav_reclamation'){
            ZoneBoite.insertDomNode([
                {type : 'div', contents : [
                    {ajax : {path : 'boiteAjax/entreprise_sav.html'}}
                ]}
            ]);
        }
        
        if(cible == 'entreprise_sav_historique'){
            ZoneBoite.insertDomNode([
                {type : 'div', contents : [
                    {ajax : {path : 'boiteAjax/entreprise_sav_historique.html'}}
                ]}
            ]);
        }
        
        if(cible == 'entreprise_sav_repondre'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('question_answer', 'Répondre', 'boiteAjax/entreprise_sav_repondre.html')},
                ]}
            ]);
        }
        
        //ENTREPRISE : DASHBOARD
        if(cible == 'entreprise_dashboard'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s8'}, contents : structureBoite('shopping_cart', 'Commandes clients', 'boiteAjax/entreprise_commande_client.html')},
                    {type : 'div', attributes : {class : 'col s4'}, contents : structureBoite('fast_forward', 'Action rapides', 'boiteAjax/entreprise_action_rapide.html')},
                ]},
                {type : 'div', contents : [
                    {ajax : {path : 'boiteAjax/entreprise_flux.html'}}
                ]},
                {type : 'div', attributes : {class : 'row'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : [
                        {type : 'p', styles : {textAlign : 'right'}, contents : [
                            {type : 'a', attributes : {class : 'btn-floating btn-large waves-effect waves-light', id: 'ajouterBoite'}, styles : {backgroundColor : 'rgb(254, 126, 41)'}, contents : [
                                {type : 'i', attributes : {class : 'material-icons'}, contents : 'add'}
                            ]}
                        ]}
                    ]}
                ]}
            ]);
        }
        
        
        //ENTREPRISE : FLUX
        if(cible == 'entreprise_flux'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Filtre', 'boiteAjax/entreprise_flux_filtre.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Poster', 'boiteAjax/entreprise_flux_poster.html')},
                ]},
                {type : 'div', contents : [
                    {ajax : {path : 'boiteAjax/entreprise_flux.html'}}
                ]}
            ]);
        }
        
        if(cible == 'entreprise_flux_poster'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Poster', 'boiteAjax/entreprise_flux_poster.html')},
                ]}
            ]);
        }
        
        //ENTREPRISE : STOCK : ANALYSE
        if(cible == 'entreprise_stock'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('storage', 'Stock', 'boiteAjax/entreprise_stock_liste.html')},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_stock_analyse'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('storage', 'Filtre', 'boiteAjax/entreprise_stock_filtre.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('storage', 'Stock Hoodie', 'boiteAjax/entreprise_stock_analyse.html', creatChartHoodie)},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_stock_liste'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('storage', 'Stock', 'boiteAjax/entreprise_stock_liste.html')},
                ]}
            ]);
        }
        
        //ENTREPRISE COMMANDER
        if(cible == 'entreprise_commande_ajouter'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Commander', 'boiteAjax/entreprise_commande_ajouter.html', function(){$(document).ready(function() {$('select').material_select();});})},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_commande_liste'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Liste des commandes', 'boiteAjax/entreprise_commande_liste.html')},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_commande_client'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Liste des commandes clients', 'boiteAjax/entreprise_commande_client.html')},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_commande'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Liste des commandes externe', 'boiteAjax/entreprise_commande_client.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Liste des commandes internes', 'boiteAjax/entreprise_commande_liste.html')},
                ]},
                 {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('list', 'Commander', 'boiteAjax/entreprise_commande_ajouter.html', function(){$(document).ready(function() {$('select').material_select();});})},
                ]}
            ]);
        }
        
        //ENTREPRISE : ARTISANT : LISTE
        if(cible == 'entreprise_artisant'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('accessibility', 'Liste des artisants', 'boiteAjax/entreprise_artisant_liste.html')},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('accessibility', 'Ajouter un artisant', 'boiteAjax/entreprise_artisant_ajouter.html')},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_artisant_liste'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('filter_list', 'Filtre', 'boiteAjax/site_produits_filtre.html', function(){$(document).ready(function() {$('select').material_select();});})},
                ]},
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('accessibility', 'Liste des artisants', 'boiteAjax/entreprise_artisant_liste.html')},
                ]}
            ]);
        }
        
        if(cible == 'entreprise_artisant_ajouter'){
            ZoneBoite.insertDomNode([
                {type : 'div' , attributes : {class : 'row stretchCol'}, contents : [
                    {type : 'div', attributes : {class : 'col s12'}, contents : structureBoite('accessibility', 'Ajouter un artisant', 'boiteAjax/entreprise_artisant_ajouter.html')},
                ]}
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