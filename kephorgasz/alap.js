var kepszam;
var vankep = false;
var fkgen = false;
var kerkepek = false;
var db;
var keresettKepUrl; 
var talaltKepekSzama = 0;
var jok;
var start = false;
function veletlenszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}



function Generalas() {
    if(fkgen == false)
    {
        var helykep = document.getElementById("keresettkep");
        var kep = document.createElement("img");
        kepszam = veletlenszam(1,30);
        kep.src = "./kepek/" + kepszam + ".jpg";
        kep.style.height = "275px";
        kep.style.width = "475px";
        kep.id = "kep";
        helykep.appendChild(kep);
        fkgen= true;
        db=document.getElementById("db").value;
        keresettKepUrl = kep.src;
        console.log(db);
    }
    if(kerkepek == false)
    {
        kerkepek = true;
        var veli = veletlenszam(1,5);
        jok = veli;
        var lehet = db - veli;
        var hely = document.getElementById("csoda");
        for(let i = 0; i< lehet; i++)
        {
            var ehhezszam = veletlenszam(1,30);
            while(ehhezszam == veli)
            {
                ehhezszam = veletlenszam(1,30);
            }
            let kep = document.createElement("img");
            kep.src = "./kepek/" + ehhezszam + ".jpg";
            hely.appendChild(kep);
            kep.style.height = "75px";
            kep.style.width = "100px";
            kep.addEventListener("click", Megvizsgal);
            kep.id= "kepecske";
        }
        for(let i = 0; i< veli; i++)
        {
            let kep = document.createElement("img");
            kep.src = "./kepek/" + kepszam + ".jpg";
            hely.appendChild(kep);
            kep.style.height = "75px";
            kep.style.width = "100px";
            kep.addEventListener("click", Megvizsgal);
            kep.id= "kepecske";
        }
    }
    start = true;
    kep.addEventListener("click", Nagyitas);
}

function Nagyitas() {
    if(!generalt)
    {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
        if(!vankep)
        {
            var nagy = document.getElementById("nagy");
            var kep = document.createElement("img");
            kep.src = "./kepek/" + kepszam + ".jpg";
            kep.style.height = "780px";
            kep.style.width = "1108px";
            kep.id = "kep";
            nagy.appendChild(kep);
            vankep = true;
        } 
    }
}
function Megvizsgal(event) {
    var kattintottKepUrl = event.target.src;
    if (keresettKepUrl === kattintottKepUrl) {
        var hely = document.getElementById("jatekter");
        hely.style.boxShadow = "0px 15px 15px 15px green";
        setTimeout(function() {
            hely.style.boxShadow = "0px 0px 0px 0px red";
        }, 1000);
        event.target.style.display = "none";
        talaltKepekSzama++;
        
    } else {
        var hely = document.getElementById("jatekter");
        hely.style.boxShadow = "0px 15px 15px 15px red";
        setTimeout(function() {
            hely.style.boxShadow = "0px 0px 0px 0px red";
        }, 1000);
    }
    if (talaltKepekSzama == jok) {
        var tkep = document.getElementById("kep");
        tkep.style.display="none";
        Vege();
    }
    console.log(jok);
    console.log(talaltKepekSzama);
}
function Vege()
{
   var torolhely = document.getElementById("csoda");
   torolhely.innerHTML="";
   
}
function Reset() {
    if (start == true) {
        fkgen = false;
        var tkep = document.getElementById("kep");
        tkep.style.display = "none";
        kerkepek = false;
        var torolhely = document.getElementById("csoda");
        torolhely.innerHTML = "";
        talaltKepekSzama = 0;
        start = false;
        Generalas();
    }
}