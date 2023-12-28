const drum = document.querySelector("body");

const keys = document.querySelectorAll(".key")
const keyA = document.querySelector("#keyA");
const keyS = document.querySelector("#keyS");
const keyD = document.querySelector("#keyD");
const keyF = document.querySelector("#keyF");
const keyG = document.querySelector("#keyG");
const keyH = document.querySelector("#keyH");
const keyJ = document.querySelector("#keyJ");
const keyK = document.querySelector("#keyK");
const keyL = document.querySelector("#keyL");


const audioA = document.querySelector("#audioA");
const audioS = document.querySelector("#audioS");
const audioD = document.querySelector("#audioD");
const audioF = document.querySelector("#audioF");
const audioG = document.querySelector("#audioG");
const audioH = document.querySelector("#audioH");
const audioJ = document.querySelector("#audioJ");
const audioK = document.querySelector("#audioK");
const audioL = document.querySelector("#audioL");



audioA.preload = "auto";



drum.addEventListener("keypress", (e) => {
  let code = e.key ;
  playSound(code)
  return code;
})

function playSound(code) {
  if (code == "a" || code == "A") {
    audioA.currentTime = 0;
    keyA.classList.add("playing");
    audioA.play()
    console.log("clap");
    console.log(code);
    document.body.appendChild(audioA);
  } else if (code == "s" || code == "S") {
    keyS.classList.add("playing");
    console.log ("hihat") 
    console.log(code);
    audioS.currentTime = 0;
    audioS.play()
    document.body.appendChild(audioS);
  } else if (code == "d" || code == "D") {
    keyD.classList.add("playing");
    audioD.currentTime = 0;
    audioD.play();
    console.log ("kick") 
    console.log(code);
  } else if (code == "f" || code == "F") {
    keyF.classList.add("playing")
    audioF.currentTime = 0;
    audioF.play();
    console.log ("openhat") 
    console.log(code);
  } else if (code == "g" || code == "G") {
    keyG.classList.add("playing");
    audioG.currentTime = 0;
    audioG.play();
    console.log ("boom") 
    console.log(code);
  } else if (code == "h" || code == "H") {
    keyH.classList.add("playing")
    audioH.currentTime = 0;
    audioH.play();
    console.log ("ride") 
    console.log(code);
  } else if (code == "j" || code == "J") {
    keyJ.classList.add("playing")
    audioJ.currentTime = 0;
    audioJ.play();
    console.log ("snare") 
    console.log(code);
  } else if (code == "k" || code == "K") {
    keyK.classList.add("playing")
    audioK.currentTime = 0;
    audioK.play();
    console.log ("tom") 
    console.log(code);
  } else if (code == "l" || code == "L") {
    keyL.classList.add("playing")
    audioL.currentTime = 0;
    audioL.play();
    console.log ("tink") 
    console.log(code);
  } 
  else {
    console.log("not a sound " + code );
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skit it if it's not a transform
  this.classList.remove('playing');
}

// const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));