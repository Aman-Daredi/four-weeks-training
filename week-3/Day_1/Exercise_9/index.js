function addText() {
    let textValue = document.querySelector("#text").value;
    let textParagraphs = document.querySelector(".text-paragraphs");
    let textColor = document.querySelector("#color").value;
    let p = document.createElement("p");
    p.textContent = textValue;
    p.style.color = textColor;
    textParagraphs.appendChild(p);
}