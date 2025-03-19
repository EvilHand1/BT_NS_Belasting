function generateFieldsets(button) {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  
  let parent = button.closest("#BOB"); // Find the closest #BOB parent

  if (parent) {
    parent.style.display = "none"; // Hide only this instance of #BOB
  }

  // document.getElementById("BOB").style.display="none";

  document.body.appendChild(clon);
}

document.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("kip").style.display="none";
});

// function generateFieldsets() {
//   let count = document.getElementById("numSections").value;

//   for (let i = 1; i <= count; i++) {
//       let temp = document.getElementsByTagName("template")[0];
    
//     let clon = temp.content.cloneNode(true);
// document.body.appendChild(clon);
//   }
// }