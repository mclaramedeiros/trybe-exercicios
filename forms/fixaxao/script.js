const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcontece(event){
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', nadaAcontece);

HREF_LINK.addEventListener('click', event => {
    event.preventDefault();
})

INPUT_TEXT.addEventListener('keypress', event => {
    const character = event.key;
    if(character !== 'a'){
        event.preventDefault();
    }
});