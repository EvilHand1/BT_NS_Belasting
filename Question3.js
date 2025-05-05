/*
Dit is gedaan met de hulp van chatGPT en Quy
*/
let verkrijgerCount = 1;
function generateFieldsets() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);

  // geïnspireerd door Quy
  let legend = clon.querySelector("legend");
  if (legend) {
    verkrijgerCount++;
    legend.textContent = `verkrijger ${verkrijgerCount}`;
  }
  //met chatGPT
  document.getElementById("spawn-questions").appendChild(clon);
}

// geinspireerd bij Quy
document.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("javascript-failed").style.display="none";
  TurnOffButton()
});

function TurnOffButton(){
  document.getElementById("generate-button").style.display= "none";
}
function TurnOnButton(){
  document.getElementById("generate-button").style.display= "block";
}

document.getElementById("Nee3b1").addEventListener("change", function () {
  const inputNames = ["3b2", "3b3", "3b4", "3b5", "3b6"];
  RequiredOnnOff(inputNames, false);
  
  TurnOffButton();
});

document.getElementById("Ja3b1").addEventListener("change", function () {
  const inputNames = ["3b2", "3b3", "3b4", "3b5", "3b6"];
  RequiredOnnOff(inputNames, true);
  
  TurnOnButton();
});

document.getElementById("generate-button").addEventListener("click", function () {
    generateFieldsets();
    RequiredOnnOff(["3b2", "3b3", "3b4", "3b5", "3b6"], true);
  });

