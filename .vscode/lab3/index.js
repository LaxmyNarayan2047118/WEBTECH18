
let ba = document.getElementById("adk");
let va = document.getElementById("vbk");
let la = document.getElementById("ln");
let lg = document.querySelector(".login");
let ad = document.querySelector(".addbooks");
let vb = document.querySelector(".view-books");

function a() {

    if(ad.style.display === 'none'){
        lg.style.display ='none';
        ad.style.display ='block';
        vb.style.display ='none';
    }
    else{
        ad.style.display ='block';
    }
}

function v() {
    if(vb.style.display === 'none'){
        lg.style.display ='none';
        ad.style.display ='none';
        vb.style.display ='grid';
    } else{
        vb.style.display ='grid';
    }
}

function l(){
    
    if(lg.style.display === 'none'){
        lg.style.display ='block';
        ad.style.display ='none';
        vb.style.display ='none';
    } else{
        lg.style.display ='block';
    }
}