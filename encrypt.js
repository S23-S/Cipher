

function encrypt(event) {
  event.preventDefault();
  let resultText = '';
  const Text = document.getElementById("Text").value; 
  const shift = parseInt(document.getElementById("shift").value); 

  for (let i = 0; i < Text.length; i++) {
      let charCode = Text.charCodeAt(i) + shift;
      resultText += String.fromCharCode(charCode);
  }

  document.getElementById("resultText").textContent = resultText;
}

function decrypt(event) {
  event.preventDefault();
  let resultText = '';
  const Textencrypt = document.getElementById("Textencrypt").value; 
  const shiften = parseInt(document.getElementById("shiften").value); 

  for (let i = 0; i < Textencrypt.length; i++) {
      let charCode = Textencrypt.charCodeAt(i) - shiften;
      resultText += String.fromCharCode(charCode);
  }

  document.getElementById("resultText2").textContent = resultText;
}
