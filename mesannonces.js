


function pre_load_mesannones(){
    var A = localStorage.getItem('Current visit');
    var B = JSON.parse(A);
    var C = B.user_id;

    var D = localStorage.getItem('users_ads');
    var E = JSON.parse(D);

    var F = E.filter(function (element){
        return element.ads_user_id == C;
    });
    
    F.forEach(function(ads){
        var a = document.getElementById('rowads');
        var b = document.createElement('card-ads');
        b.className = 'col-lg-3 col-md-4 col-sm-6 mt-2';


        b.innerHTML=
        
        '<div class="card">'+
                    '<div class="card-body">'+
                        '<h4 class="card-title my-1 py-1">'+ads.ads_titre+'</h4>'+
                    '</div>'+
                    '<img src=" '+ads.ads_photo+ ' "class="card-img-top" alt="Accroche HTML"> '+
                '</div>'+
                '<div class="card">'+
                    '<div class="card-body">'+
                        '<h6 class="card-title">Description :</h6>'+
                        '<p class="card-text">'+ads.ads_description+'</p>'+
                        '<p class="card-text">'+ads.ads_prix+'</p>'+
                        '<p class="card-text">' +  'Contact : '  +ads.ads_phone+   '</p>'+
                    '</div>'+
                '</div>'

        ;






        a.appendChild(b);
    });

    

}

