/*
Dit is gedaan met de hulp van chatGPT en Quy
Update: nog steeds gedaan met hulp van chatGPT
*/
let verkrijgerCount = 1;
function generateFieldsets() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  let inputs = clon.querySelectorAll("input");
  let legend = clon.querySelector("legend");

  // geïnspireerd door Quy
  verkrijgerCount++;
  legend.textContent = `verkrijger ${verkrijgerCount}`;

  inputs.forEach((input) => {
    let originalName = input.getAttribute("name");
    input.setAttribute("name", `${originalName}_${verkrijgerCount}`);
  });

  //met chatGPT
  document.getElementById("spawn-questions").appendChild(clon);
}

function deleteLatestVerkrijger() {
  const verkrijgers = document.querySelectorAll(".verkrijgers");
  if (verkrijgers.length > 0) {
    const last = verkrijgers[verkrijgers.length - 1];
    last.remove();
    verkrijgerCount--;
  }
}

let question3Names = ["3b2", "3b3", "3b5", "3b6", "3b7"];
function UpdateList() {
  question3Names = ["3b2", "3b3", "3b5", "3b6", "3b7"];

  document.querySelectorAll(".verkrijgers input").forEach((input) => {
    if (!input.name.includes("3b4")) {
      question3Names.push(input.name);
    }
  });

  console.log(question3Names);
}

function TurnOffButton() {
  document.getElementById("generate-button").style.display = "none";
  document.getElementById("verwijder-button").style.display = "none";
}
function TurnOnButton() {
  document.getElementById("generate-button").style.display = "block";
  document.getElementById("verwijder-button").style.display = "block";
}

// geinspireerd bij Quy
window.addEventListener("pageshow", () => {
  if (document.getElementById("Ja3b1").checked) {
    TurnOnButton();
  } else {
    TurnOffButton();
  }
});

document.getElementById("Nee3b1").addEventListener("change", function () {
  RequiredOnnOff(question3Names, false);
  TurnOffButton();
});

document.getElementById("Ja3b1").addEventListener("change", function () {
  RequiredOnnOff(question3Names, true);
  TurnOnButton();
});

document
  .getElementById("generate-button").addEventListener("click", function () {
    generateFieldsets();
    UpdateList();
    RequiredOnnOff(question3Names, true);
  });

document
  .getElementById("verwijder-button").addEventListener("click", function () {
    deleteLatestVerkrijger();
    UpdateList();
  });
