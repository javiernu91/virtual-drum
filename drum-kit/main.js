const drum = document.querySelector("body")
const keyA = document.querySelector("#keyA");
const audioA = document.querySelector("#audioA");



audioA.preload = "auto";



drum.addEventListener("keypress", (e) => {
  let code = e.key ;
  playSound(code)
  return code;
})

function playSound(code) {
  if (code == "a") {
    keyA.classList.toggle("playing");
    audioA.play()
    console.log("clap");
    console.log(code);
    document.body.appendChild(audioA);
  } else if (code == "s") {
    console.log ("hihat") 
    console.log(code);
  } else if (code == "d") {
    console.log ("kick") 
    console.log(code);
  } else if (code == "f") {
    console.log ("openhat") 
    console.log(code);
  } else if (code == "g") {
    console.log ("boom") 
    console.log(code);
  } else if (code == "h") {
    console.log ("ride") 
    console.log(code);
  } else if (code == "j") {
    console.log ("snare") 
    console.log(code);
  } else if (code == "k") {
    console.log ("tom") 
    console.log(code);
  } else if (code == "l") {
    console.log ("tink") 
    console.log(code);
  } 
  else {
    console.log("not a sound " + code );
  }
}

// function addClass (e) {
//    =  
// }