document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  const allDateInputs = document.querySelectorAll('input[type="date"]');

  allDateInputs.forEach((input) => {
    input.max = today;
  });
});

document.getElementById("Ja1b1").addEventListener("change", function () {
  RequiredOnnOff(["1b2", "1b3", "1b4"], true);

  if (document.getElementById("Ja1b2").checked) {
    RequiredOnnOff(["1b2.1"], true);
  }
});

document.getElementById("Nee1b1").addEventListener("change", function () {
  RequiredOnnOff(["1b2", "1b3", "1b4", "1b2.1"], false);
});

document.getElementById("Ja1b2").addEventListener("change", () => {
  RequiredOnnOff(["1b2.1"], true);
});

document.getElementById("Nee1b2").addEventListener("change", () => {
  RequiredOnnOff(["1b2.1"], false);
});
