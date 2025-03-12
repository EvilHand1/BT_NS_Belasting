function generateFieldsets() {
    let count = document.getElementById("numSections").value;

    for (let i = 1; i <= count; i++) {
        let temp = document.getElementsByTagName("template")[0];
      
      let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
    }
}