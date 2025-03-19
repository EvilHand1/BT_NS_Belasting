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