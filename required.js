// met behulp van vele bronnen en chatGPT
function RequiredOnnOff(inputNames, shouldRequire){
inputNames.forEach(name => {
var inputElement = document.getElementsByName(name);
    if (shouldRequire){
        inputElement.forEach(input => input.setAttribute("required", "true"));
    }else{
        inputElement.forEach(input => input.removeAttribute("required"));
    }
});
}

document.getElementById("Ja1b2").addEventListener("change", () => {
    RequiredOnnOff(["1b2.1"], true);
  });
  
  document.getElementById("Nee1b2").addEventListener("change", () => {
    RequiredOnnOff(["1b2.1"], false);
  });

  document.getElementById("Ja1b1").addEventListener("change", function () {
    RequiredOnnOff(["1b2", "1b3", "1b4"], true);
  });
  
  document.getElementById("Nee1b1").addEventListener("change", function () {
    RequiredOnnOff(["1b2", "1b3", "1b4"], false);
  });