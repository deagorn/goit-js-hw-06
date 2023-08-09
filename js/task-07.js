const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", onFontSizeControl);

function onFontSizeControl(event) {
    const value = Number(event.currentTarget.value);
    text.style.fontSize = `${value}px`; 
}
