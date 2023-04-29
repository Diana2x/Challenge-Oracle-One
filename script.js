const encryptBtn = document.querySelector(".decrypt");
const decriptBtn = document.querySelector(".encrypt");
const text = document.querySelector("#text");
const textArea = document.querySelector(".message-area");
const dollImage = document.querySelector(".doll");
const resultDiv = document.createElement("div");
resultDiv.classList.add("result");
const copyBtn = document.createElement("button");
copyBtn.textContent = "Copiar";
copyBtn.classList.add("copy-text");
let textToDisplay = "";
copyBtn.addEventListener("click", () => {
  const textToCopy = textToDisplay;
  navigator.clipboard.writeText(textToCopy);
});

/*DOM content*/

decriptBtn.addEventListener("click", () => {
  encryptWord(text.value);
  if (text.value !== "") {
    dollImage.style.display = "none";
    textArea.innerHTML = "";
    textArea.appendChild(resultDiv);
    resultDiv.innerHTML = `
    <p class="result-text">${textToDisplay}</p>
    `;
    resultDiv.appendChild(copyBtn);
  } else {
    dollImage.style.display = "block";
    textArea.innerHTML = `
      <p class="focus-text">Ningún Mensaje fue encontrado</p>
      <p class="normal-text">
        Ingresa el texto que desees encriptar o desencriptar.
      </p>

    `;
  }
});

encryptBtn.addEventListener("click", () => {
  decryptWord(text.value);
  if (text.value !== "") {
    dollImage.style.display = "none";
    textArea.innerHTML = "";
    textArea.appendChild(resultDiv);
    resultDiv.innerHTML = `
    <p class="result-text">${textToDisplay}</p>
    `;
    resultDiv.appendChild(copyBtn);
  } else {
    dollImage.style.display = "block";
    textArea.innerHTML = `
      <p class="focus-text">Ningún Mensaje fue encontrado</p>
      <p class="normal-text">
        Ingresa el texto que desees encriptar o desencriptar.
      </p>
    `;
  }
});

/* Functions*/

function encryptWord(word) {
  let encryptedWord = "";
  const vowelMap = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const encryptedLetter = vowelMap[letter.toLowerCase()] || letter; // Will return either the encrypted letter or left unchanged if its not found in the vowelmap.
    encryptedWord += encryptedLetter;
  }

  return (textToDisplay = encryptedWord);
}

function decryptWord(word) {
  const decryptMap = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let decryptedString = word;
  for (let key in decryptMap) {
    // Replace all occurrences of the key with its corresponding value in the decryptMap
    decryptedString = decryptedString.replace(
      new RegExp(key, "g"),
      decryptMap[key]
    );
  }
  return (textToDisplay = decryptedString);
}
