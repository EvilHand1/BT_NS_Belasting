function RequiredOnnOff(inputNames, shouldRequire = false){
inputNames.forEach(name => {
var inputElement = document.getElementsByName(name);
if (inputElement){
    if (shouldRequire){
        inputElement.forEach(input => input.setAttribute("required", "true"));    }
    else{
        inputElement.forEach(input => input.removeAttribute("required"));
    }
}
});
}




// function RequiredOnnOff(){
//     var chkYes = document.getElementById("Nee1b1");


// var test = document.getElementById("Ja1b2");
// var test2 = document.getElementById("kIP");

// if(chkYes.checked){
//     test.removeAttribute("required");
//     test2.removeAttribute("required");
// }
// else{
//     test.setAttribute("required", true);
//     test2.setAttribute("required", true);
//     console.log(test, test2);
// }
// }

// function RequiredOnnOff(){
//     var chkYes = document.getElementById("Nee1b1");


// var test = document.getElementsByName("1b3");


// if(chkYes.checked){
//     test.forEach(input => input.removeAttribute("required"));
// }
// else{
//     test.forEach(input => input.setAttribute("required", "true"));
//     console.log(test);
// }
// }
