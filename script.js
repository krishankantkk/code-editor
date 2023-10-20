const htmlcopybutton=document.getElementById("copy-button-HTML");
const csscopybutton=document.getElementById("copy-button-CSS");
const jscopybutton=document.getElementById("jscopy-button-HTML");
const savebutton=document.getElementById("save-button");
const output=document.getElementById("output");
const lockButton=document.getElementById("lock-unlock");
const textareaHTML = document.getElementById("html-code");
const textareaCSS = document.getElementById("css-code");
const textareaJS = document.getElementById("javascript-code");

// make this to execute the HTML, CSS and JS Code

function run(){
    const htmlcode=textareaHTML.value;
    const csscode=textareaCSS.value;
    const javascriptcode=textareaJS.value;
    const output=document.getElementById("output");
    output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
    output.contentWindow.eval(javascriptcode);
}

// add copy button fuctionality to copy the perticular content

htmlcopybutton.addEventListener("click", function() {

    textareaHTML.select();
    textareaHTML.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
});

csscopybutton.addEventListener("click", function() {
    textareaCSS.select();
    textareaCSS.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
});

jscopybutton.addEventListener("click", function() {
    textareaJS.select();
    textareaJS.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
});

// adding the lock/unlock button fuctionality 

lockButton.addEventListener("click", function() {
    
    textareaHTML.disabled = !textareaHTML.disabled;
    textareaCSS.disabled = !textareaCSS.disabled;
    textareaJS.disabled=!textareaJS.disabled;
    lockButton.textContent = textareaHTML.disabled ? "Unlock" : "Lock";
});

//  add indentation functionality

textareaHTML.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = textareaHTML.selectionStart;
        const end = textareaHTML.selectionEnd;
        textareaHTML.value = textareaHTML.value.substring(0, start) + "    " + textareaHTML.value.substring(end);
        textareaHTML.setSelectionRange(start + 4, start + 4);
    }
});
textareaCSS.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = textareaCSS.selectionStart;
        const end = textareaCSS.selectionEnd;
        textareaCSS.value = textareaCSS.value.substring(0, start) + "    " + textareaCSS.value.substring(end);
        textareaCSS.setSelectionRange(start + 4, start + 4);
    }
});
textareaJS.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = textareaJS.selectionStart;
        const end = textareaJS.selectionEnd;
        textareaJS.value = textareaJS.value.substring(0, start) + "    " + textareaJS.value.substring(end);
        textareaJS.setSelectionRange(start + 4, start + 4);
    }
});

