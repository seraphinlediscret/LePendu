//////////////////variables//////////////////
let play = document.getElementById("btn");
let button = document.getElementsByClassName("lettre");
let affichage = document.getElementById("text");
let canvas = document.getElementById("cnv");
let ctx = canvas.getContext('2d');
let fin = true;
let tab_mots;
let nb_erreurs = 0;
let nb_mots = 0;
let score = 10;
//let lettres_ok = "AaBbCcDdEeFfGgHhIiJjKkLlMmOoNpPqQrRsStTuUvVwWxXyYzZ";
let start = document.getElementById("btn");
let underscore = [];
let table = ["orchidoclaste","bacchanales","hemistiche","incrementation","acropole"];
let reponse;
let box = document.querySelector("text");
let count = 0;


//////////////////démarrer partie/////////////////////////
function leCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}

///////////////affichage et remplacement des lettres////////////////////////////////

function LesMots() {
    reponse = table[Math.floor(Math.random() * table.length)];
    box = reponse.split('');//lettres des mots
    leCanvas();
    affichage.textContent = "";
    console.log(box);
    
    for (let i = 0; i < box.length; i++) {
         affichage.textContent += "_";  
    }
    underscore = affichage.textContent.split("");
    console.log(underscore);
}

start.addEventListener("click", LesMots);

////////////// reception des touches///////////////
function buttonColor(lettre) {
            lettre.style.width = "50px";
       }

function letter(){
       console.log(this.value)
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", letter);
}

////////////////lettres trouvées dans le mot////////////////////
function verify(){
    let lettreTrouvee = false ;

    for (let i = 0; i < box.length; i++) {
        console.log(this.value+"button")
         
        if (this.value == box[i]) {
           console.log(box[i]+"box")
           underscore[i] = this.value;
           console.log(underscore[i] +" underscore");
           affichage.textContent = underscore.join(""); 
           lettreTrouvee = true;
           this.style.backgroundColor = "green";
        }    
        }
        if(affichage.textContent == reponse){
           affichage.textContent = "Gagné!"
            
    }
    if(!lettreTrouvee)
        {
           count++;
           console.log(count);
           this.style.backgroundColor = "red";
        } 
        ////////////////////////////////////dessin////////////////////////
//pied
if(count == 1){
    ctx.beginPath();
    ctx.moveTo(10,600); 
    ctx.lineTo(100,500);
    ctx.lineTo(200,600);
    //poteau
    }else if(count == 2){
    ctx.moveTo(100,500); 
    ctx.lineTo(100,100);
    //haut
    }else if(count == 3){
    ctx.moveTo(100,100); 
    ctx.lineTo(500,100);
    //corde
    } else if(count == 4){
    ctx.moveTo(500,100); 
    ctx.lineTo(500,200);
    //tête
    } else if(count == 5){
    ctx.moveTo(500,200); 
    ctx.arc(500,300, 40,0, 2*Math.PI, true);
    //cou et corps
    } else if(count == 6){
    ctx.moveTo(530,300); 
    ctx.lineTo(540,330);
    ctx.lineTo(540,400);
    //bras et jambes
    } else if(count == 7){
    ctx.moveTo(510,360); 
    ctx.lineTo(540,330);
    ctx.lineTo(530,365);
    ctx.moveTo(510,450); 
    ctx.lineTo(540,400);
    ctx.lineTo(520,460);
    }
    ctx.stroke();

    if(count > 6){
        alert("T'es mort booouuuh !")
    }
        
}
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", verify);
}



////////////////// dessin progressif/////////////////


