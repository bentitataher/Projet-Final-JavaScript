/* <===================================> Début - Fonction Inscription <======================================> */

function inscription(){

var pren = document.getElementById('prenom');
var nom = document.getElementById('nom');
var mail = document.getElementById('mail');
var pass = document.getElementById('password');
var confirm_pass = document.getElementById('confirmation_password');
var tel = document.getElementById('telephone');
var adr = document.getElementById('adresse');
var ville = document.getElementById('ville');
var code_postal = document.getElementById('code_postal');

var user = {
    user_prenom: pren.value,
    user_nom: nom.value,
    user_mail: mail.value,
    user_pass: pass.value,
    user_confirm_pass: confirm_pass.value,
    user_tel: tel.value,
    user_adr: adr.value,
    user_ville: ville.value,
    user_code_postal: code_postal.value
}

if(localStorage.getItem('users','[]')== null){
    localStorage.setItem('users','[]');
    var a = localStorage.getItem('users');
    var b = JSON.parse(a);
    user.user_id = 1;
    b.push(user);
    var c = JSON.stringify(b);
    localStorage.setItem('users',c);
}

else{
    var a = localStorage.getItem('users');
    var b = JSON.parse(a);
    user.user_id = b.length + 1;
    b.push(user);
    var c = JSON.stringify(b);
    localStorage.setItem('users',c);
}

document.getElementById('prenom').value="";
document.getElementById('nom').value="";
document.getElementById('mail').value="";
document.getElementById('password').value="";
document.getElementById('confirmation_password').value="";
document.getElementById('telephone').value="";
document.getElementById('adresse').value="";
document.getElementById('ville').value="";
document.getElementById('code_postal').value="";


}

/* <====================================> Fin - Fonction Inscription <=======================================> */

function connexion(){
    
    var a = localStorage.getItem('users');
    var b = JSON.parse(a);
    var c = document.getElementById('con_password');
    var d = c.value;
    var e = document.getElementById('con_login');

    function chercher (element){
        return element.user_mail === e.value;
    }

    var x = (b.find(chercher).user_pass);

        if((x == d ) && (e !== '') && (d !== '')){
            window.location.href = 'compte_annonce.html';
        }
        
        else if((e == '') || (d == '')){
            alert('Entrez votre login & mot de passe ou bien inscrivez-vous !');
        }

        else{
            alert('Login et/ou mot de passe incorrects');
        }

    localStorage.setItem('Current visit', JSON.stringify(b.find(chercher)) );


    /*

    var A = localStorage.getItem('Current visit');
    var B = JSON.parse(A);
    var C = B.user_id;

    var D = localStorage.getItem('users_ads');
    var E = JSON.parse(D);

    var F = E.filter(function (element){
        return element.ads_user_id == C;
    });

    localStorage.setItem('mes annonces', JSON.stringify(F));
    
    */


}


