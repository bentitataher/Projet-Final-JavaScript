function pre_load(){
    if(localStorage.getItem('Current visit') == null){
        window.location.href = 'projet-js.html'
    } 
    var bonjour = document.getElementById('bonjour');
    bonjour.textContent += (JSON.parse(localStorage.getItem('Current visit'))).user_prenom;
 
    document.getElementById('prenom').value=JSON.parse(localStorage.getItem('Current visit')).user_prenom;
    document.getElementById('nom').value=JSON.parse(localStorage.getItem('Current visit')).user_nom;
    document.getElementById('mail').value=JSON.parse(localStorage.getItem('Current visit')).user_mail;
    document.getElementById('password').value=JSON.parse(localStorage.getItem('Current visit')).user_pass;
    document.getElementById('telephone').value=JSON.parse(localStorage.getItem('Current visit')).user_tel;
    document.getElementById('adresse').value=JSON.parse(localStorage.getItem('Current visit')).user_adr;
    document.getElementById('ville').value=JSON.parse(localStorage.getItem('Current visit')).user_ville;
    document.getElementById('code_postal').value=JSON.parse(localStorage.getItem('Current visit')).user_code_postal;


}

/* Déconnexion // */ /* -------------------------------------------------------------------------------- */

function deconnexion(){
    window.location.href = 'projet-js.html';
    localStorage.removeItem('Current visit');
 /* localStorage.removeItem('mes annonces') */

}

/* Déconnexion */ /* -------------------------------------------------------------------------------- */


/* Confirmation modifications */ /* ------------------------------------------------------------------ */

function confirm_modif(){

 var a = localStorage.getItem('Current visit');
 var b = JSON.parse(a);
 var c = b.user_id;


 var d = localStorage.getItem('users');
 var e = JSON.parse(d);
 e[c-1] = {
    user_id: c,
    user_prenom: document.getElementById('prenom').value,
    user_nom: document.getElementById('nom').value,
    user_mail: document.getElementById('mail').value,
    user_pass: document.getElementById('password').value,
    user_confirm_pass: document.getElementById('password').value,
    user_tel: document.getElementById('telephone').value,
    user_adr: document.getElementById('adresse').value,
    user_ville: document.getElementById('ville').value,
    user_code_postal: document.getElementById('code_postal').value
 }

 var f = JSON.stringify(e);
 localStorage.setItem('users',f);
 localStorage.setItem('Current visit',JSON.stringify(e[c-1]));


}


/* Début code Image preview */
document.getElementById('choose-file').addEventListener('change',function(){
    document.getElementById('Preview-image').setAttribute('src',this.files[0].name);
});
/* Fin code Image preview */


function f_ajouter(){

        var a = document.getElementById('titre');
        var b = document.getElementById('choose-file');
        var c = document.getElementById('prix');
        var d = document.getElementById('decription');
        var m = document.getElementById('phone');
    
        var ads = {
            ads_titre: a.value,
            ads_photo: b.files[0].name,
            ads_prix: c.value,
            ads_phone: m.value,
            ads_description: d.value,
            ads_date: new Date,
            ads_user_prenom: JSON.parse(localStorage.getItem('Current visit')).user_prenom,
            ads_user_nom: JSON.parse(localStorage.getItem('Current visit')).user_nom,
            ads_user_id: JSON.parse(localStorage.getItem('Current visit')).user_id,
        };

        if (localStorage.getItem('users_ads') == null){
            localStorage.setItem('users_ads','[]');
        }

        var e = localStorage.getItem('users_ads');
        var f = JSON.parse(e);
        f.push(ads);
        var g = JSON.stringify(f);
        localStorage.setItem('users_ads',g);

}


function mesAnnonces(){
    window.location.href = 'mesannonces.html'
};
