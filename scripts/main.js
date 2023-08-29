const peopleTemplate = document.querySelector("[data-template]");
const peopleContainer = document.querySelector("[data-content-container]");
let score = JSON.parse(localStorage.getItem('score')) || 0;

let content = []

const data = [
    {
        name: "Ludwig Aghren",
        height: 1.77,
        image: "images/ludwig.webp",
    },
    {
        name: "Dwayne Johnson",
        height: 1.96,
        image: "images/theRock.webp",
    },
    {
        name: "Johnny Depp",
        height: 1.75,
        image: "images/johnnyDepp.jpg",
    },
    {
        name: "Mario",
        height: 1.55,
        image: "images/mario.jpg",
    },
    {
        name: "Kratos",
        height: 1.94,
        image: "images/kratos.jpg",
    },
    {
        name: "Elon Musk",
        height: 1.86,
        image: "images/elonMusk.jpg",
    },
    {
        name: "Cristiano Ronaldo",
        height: 1.85,
        image: "images/cr7.jpg",
    },
    {
        name: "Lionel Messi",
        height: 1.7,
        image: "images/messi.jpg",
    },
    {
        name: "Mark Zuckerberg",
        height: 1.71,
        image: "images/markZuckerberg.jpg",
    },
    {
        name: "Bill Gates",
        height: 1.77,
        image: "images/billGates.jpg",
    },
    {
        name: "Jeff Bezos",
        height: 1.71,
        image: "images/jeffBezos.jpg",
    },
    {
        name: "Taylor Swift",
        height: 1.8,
        image: "images/taylorSwift.jpg",
    },
    {
        name: "Selena Gomez",
        height: 1.65,
        image: "images/selenaGomez.jpg",
    },
    {
        name: "Beyonce",
        height: 1.69,
        image: "images/beyonce.jpg",
    },
    {
        name: "Tom Cruise",
        height: 1.7,
        image: "images/tomCruise.jpg",
    },
    {
        name: "Barack Obama",
        height: 1.87,
        image: "images/barackObama.jpg",
    },
    {
        name: "Shakira",
        height: 1.57,
        image: "images/shakira.jpg",
    },
    {
        name: "Rihanna",
        height: 1.73,
        image: "images/rihanna.jpg",
    },
    {
        name: "Donald Trump",
        height: 1.9,
        image: "images/donaldTrump.jpg",
    },
    {
        name: "Justin Bieber",
        height: 1.75,
        image: "images/justinBieber.jpg",
    },
    {
        name: "Robert Downey",
        height: 1.74,
        image: "images/robertDowney.jpg",
    },
    {
        name: "Leonardo Dicaprio",
        height: 1.83,
        image: "images/leonardoDicaprio.jpg",
    },
    {
        name: "Lebron James",
        height: 2.06,
        image: "images/lebronJames.jpg"
    },
    {
        name: "Michael Jordan",
        height: 1.98,
        image: "images/michaelJordan.jpg",
    },
    {
        name: "Steph Curry",
        height: 1.88,
        image: "images/stephCurry.jpg",
    },
    {
        name: "Margot Robbie",
        height: 1.68,
        image: "images/margotRobbie.jpg",
    },
    {
        name: "Will Smith",
        height: 1.87,
        image: "images/willSmith.jpg",
    },
    {
        name: "Tyler, the Creator",
        height: 1.88,
        image: "images/tylerTheCreator.jpg",
    },
    {
        name: "Tyler1",
        height: 1.67,
        image: "images/tyler1.jpg",
    },
    {
        name: "A$AP Rocky",
        height: 1.79,
        image: "images/asapRocky.jpg",
    },
    {
        name: "Travis Scott",
        height: 1.78,
        image: "images/travisScott.jpg",
    },
    {
        name: "Rick Owens",
        height: 1.72,
        image: "images/rickOwens.jpg",
    },
    {
        name: "Mizkif",
        height: 1.79,
        image: "images/mizkif.avif",
    },
    {
        name: "Atreus",
        height: 1.71,
        image: "images/atreus.jpg",
    },
    {
        name: "John Cena",
        height: 1.85,
        image: "images/johnCena.jpg",
    },
    {
        name: "Zendaya",
        height: 1.78,
        image: "images/zendaya.jpg",
    },
    {
        name: "Tom Holland",
        height: 1.69,
        image: "images/tomHolland.jpg",
    },
    {
        name: "Bowser",
        height: 3.1,
        image: "images/bowser.jpg",
    },
    {
        name: "Donkey Kong",
        height: 2.38,
        image: "images/donkeyKong.jpg",
    },
    {
        name: "Mike Tyson",
        height: 1.78,
        image: "images/mikeTyson.jpg",
    },
    {
        name: "Jake Paul",
        height: 1.85,
        image: "images/jakePaul.jpg",
    },
    {
        name: "Logan Paul",
        height: 1.88,
        image: "images/loganPaul.jpg",
    },
    {
        name: "KSI",
        height: 1.78,
        image: "images/KSI.webp"
    },
    {
        name: "MrBeast",
        height: 1.91,
        image: "images/mrBeast.avif",
    },
    {
        name: "QTCinderella",
        height: 1.68,
        image: "images/QTCinderella.jpg",
    },
    {
        name: "CDawgVA",
        height: 1.75,
        image: "images/CDawgVA.avif",
    },
    {
        name: "IShowSpeed",
        height: 1.72,
        image: "images/IShowSpeed.jpg"
    },
    {
        name: "Kai Cenat",
        height: 1.68,
        image: "images/kaiCenat.jpg"
    },
    {
        name: "DougDoug",
        height: 1.92,
        image: "images/dougdoug.jpg"
    },
    {
        name: "Justin Timberlake",
        height: 1.8,
        image: "images/justinTimberlake.jpg"
    },
    {
        name: "Jennifer Lopez",
        height: 1.64,
        image: "images/jenniferLopez.jpg"
    },
    {
        name: "Kim Kardashian",
        height: 1.57,
        image: "images/kimKardashian.jpg",
    },
    {
        name: "Ben Affleck",
        height: 1.89,
        image: "images/benAffleck.jpg"
    },
    {
        name: "Brad Pitt",
        height: 1.8,
        image: "images/bradPitt.jpg"
    },
    {
        name: "Adolf Hitler",
        height: 1.75,
        image: "images/hitler.jpg"
    },
    {
        name: "Anne Frank",
        height: 1.63,
        image: "images/anneFrank.jpg"
    },
    {
        name: "Mao Zedong",
        height: 1.75,
        image: "images/maoZedong.jpg"
    },
    {
        name: "Michael Jackson",
        height: 1.75,
        image: "images/michaelJackson.jpg"
    },
    {
        name: "Charlie Chaplin",
        height: 1.65,
        image: "images/charlieChaplin.jpg"
    },
    {
        name: "John Lennon",
        height: 1.79,
        image: "images/johnLennon.jpg"
    },
    {
        name: "Paul McCartney",
        height: 1.8,
        image: "images/paulMcCartney.jpg"
    },
    {
        name: "Mahatama Gandhi",
        height: 1.65,
        image: "images/gandhi.jpg"
    },
    {
        name: "Martin Luther King",
        height: 1.69,
        image: "images/martinLutherKing.jpg"
    },
    {
        name: "J.K. Rowling",
        height: 1.65,
        image: "images/rowling.jpeg"
    },
    {
        name: "Pablo Picasso",
        height: 1.63,
        image: "images/pabloPicasso.jpg"
    },
    {
        name: "Salvador Dali",
        height: 1.72,
        image: "images/salvadorDali.jpg"
    },
    {
        name: "Leonardo Da Vinci",
        height: 1.75,
        image: "images/leonardoDaVinci.jpg"
    },
    {
        name: "Madonna",
        height: 1.61,
        image: "images/madonna.jpg"
    },
    {
        name: "Joseph Stalin",
        height: 1.68,
        image: "images/stalin.jpg"
    },
    {
        name: "Steve",
        height: 1.87,
        image: "images/steve.jpg"
    },
    {
        name: "Link",
        height: 1.7,
        image: "images/link.jpg"
    },
    {
        name: "Master Chief",
        height: 2.13,
        image: "images/chief.jpg"
    },
    {
        name: "average male height",
        height: 1.75,
        image: "images/world.jpg",
    },
    {
        name: "average female height",
        height: 1.62,
        image: "images/world.jpg"
    },
    {
        name: "Kanye West",
        height: 1.72,
        image: "images/kanye.jpg"
    },
    {
        name: "Pewdiepie",
        height: 1.75,
        image: "images/pewdiepie.jpg"
    },
    {
        name: "Markiplier",
        height: 1.78,
        image: "images/markiplier.webp"
    },
    {
        name: "Jacksepticeye",
        height: 1.73,
        image: "images/jacksepticeye.jpg"
    },
    {
        name: "Mark Rober",
        height: 1.83,
        image: "images/markRober.jpg"
    },
    {
        name: "Valkyrae",
        height: 1.61,
        image: "images/valkyrae.jpg"
    },
    {
        name: "Zach King",
        height: 1.85,
        image: "images/zachKing.jpg"
    },
    {
        name: "Lazar Beam",
        height: 1.72,
        image: "images/lazarBeam.avif"
    },
    {
        name: "Khaby Lame",
        height: 1.85,
        image: "images/khabyLame.jpg"
    },
    {
        name: "Charlie D'Amelio",
        height: 1.6,
        image: "images/charliD'amelio"
    },
    {
        name: "Dixie D'Amelio",
        height: 1.67,
        image: "images/dixieD'amelio"
    },
    {
        name: "Bella Poarch",
        height: 1.52,
        image: "images/bellaPoarch.jpg"
    },
    {
        name: "Marilyn Monroe",
        height: 1.68,
        image: "images/marilynMonroe.webp"
    },
    {

    }
];

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function appearNext(){
    document.getElementById("next-button").classList.remove("dissappear");    
    document.getElementById("next-button").style.zIndex = 10000000000000000000
}
function appearRestart(){
    document.getElementById("restart-button").classList.remove("dissappear");
    document.getElementById("restart-button").style.zIndex = 10000000000000000000;
}
function appear(){
    document.getElementById("leftHeight").classList.remove("dissappear");
    document.getElementById("rightHeight").classList.remove("dissappear");
}
function disappear(){
    document.getElementById("leftHeight").classList.add("dissappear");
    document.getElementById("rightHeight").classList.add("dissappear");
    document.getElementById("next-button").classList.add("dissappear");
    document.getElementById("again-button").classList.add("dissappear")
    document.getElementById("guess-button-left").style.display = "inline-block";
    document.getElementById("guess-button-right").style.display = "inline-block";
    document.getElementById("next-button").style.zIndex = -1000;
    document.getElementById("restart-button").style.zIndex = -1000;
}

function append(){

    const box = peopleTemplate.content.cloneNode(true).children[0];
    
    const leftPerson = data[Math.floor(Math.random() * data.length)];

    const leftImage = box.querySelector("[data-left-image]");
    const leftName = box.querySelector("[data-left-name]");
    const leftHeight = box.querySelector("[data-left-height]");
    const leftId = box.querySelector("[data-left-id]");

    leftImage.src = leftPerson.image;
    leftName.textContent = leftPerson.name;
    leftHeight.textContent = leftPerson.height;

    const rightPerson = data[Math.floor(Math.random() * data.length)];

    const rightImage = box.querySelector("[data-right-image]");
    const rightName = box.querySelector("[data-right-name]");
    const rightHeight = box.querySelector("[data-right-height]");
    const rightId = box.querySelector("[data-right-id]")

    rightImage.src = rightPerson.image;
    rightName.textContent = rightPerson.name;
    rightHeight.textContent = rightPerson.height;


    console.log(leftPerson);
    console.log(rightPerson);

    peopleContainer.append(box);
    updateScoreElement();
    return{leftName: leftPerson[name], leftHeight: leftPerson[height], rightName: rightPerson[name], rightHeight: rightPerson[height], element: box}, leftPerson, rightPerson;

}

function guess(side){
    const leftHeight = document.querySelector("[data-left-height]").innerHTML;
    const rightHeight = document.querySelector("[data-right-height]").innerHTML;
    if(side === "left"){
        if(leftHeight>=rightHeight){
            //true
            score +=1;
            appearNext();
        } else if(rightHeight>leftHeight){
            //false
            score = 0;
            appearRestart();
        }
    } else if(side === "right"){
        if(rightHeight>=leftHeight){
            //true
            score+=1;
            appearNext();
        } else if(leftHeight>rightHeight){
            //false
            document.querySelector(".fail").style.opacity = 0.1;
            document.querySelector(".fail").style.zIndex = 10000;
            document.querySelector(".action-button").style.zIndex = 1000000;
            score = 0
            appearRestart();
        }
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Score: ${score}`;
}

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {
        let currentOrientation = window.orientation;
        location.reload();
        if( currentOrientation === 90 || currentOrientation === 180){
            document.querySelector(".score").style.opacity = 1;
            document.querySelector(".content-container").style.opacity = 1;
            document.querySelector(".turn-phone-container").style.opacity = 0;
        } else if(currentOrientation = 0){
            document.querySelector(".score").style.opacity = 0;
            document.querySelector(".content-container").style.opacity = 0;
            document.querySelector(".turn-phone-container").style.opacity = 1;
        } 
    }, false);
let currentOrientation = window.orientation;
if( currentOrientation === 90 || currentOrientation === 180){
    document.querySelector(".score").style.opacity = 1;
    document.querySelector(".content-container").style.opacity = 1;
    document.querySelector(".turn-phone-container").style.opacity = 0;
} else if(currentOrientation = 0){
    document.querySelector(".score").style.opacity = 0;
    document.querySelector(".content-container").style.opacity = 0;
    document.querySelector(".turn-phone-container").style.opacity = 1;
}
updateScoreElement();
append();