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
  document.getElementById("SpawnQuestions").appendChild(clon);
}

// geinspireerd bij Quy
document.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("JavascriptFailed").style.display="none";
  TurnOffButton()
});

function TurnOffButton(){
  document.getElementById("GenerateButton").style.display= "none";
}
function TurnOnButton(){
  document.getElementById("GenerateButton").style.display= "block";
}