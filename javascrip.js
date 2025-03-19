/*
Dit is gedaan met de hulp van chatGPT en Quy
*/
let verkrijgerCount = 1;
function generateFieldsets(button) {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  let parent = button.closest("#ButtonGroup");

  // dit was nodig om de knoppen te verplaatsen, maar dat gebeurd niet meer.
  // if (parent) {
  //   parent.style.display = "none";
  // }

  // geïnspireerd door Quy
  let legend = clon.querySelector("legend");
  if (legend) {
    verkrijgerCount++;
    legend.textContent = `verkrijger ${verkrijgerCount}`;
  }

  //met chatGPT
  document.getElementById("SpawnQuestions").appendChild(clon); // Change this to your target ID
  // document.body.appendChild(clon);
  
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
// function generateFieldsets() {
//   let count = document.getElementById("numSections").value;

//   for (let i = 1; i <= count; i++) {
//       let temp = document.getElementsByTagName("template")[0];
    
//     let clon = temp.content.cloneNode(true);
// document.body.appendChild(clon);
//   }
// }