// Note: After installing this extension please go to https://example.com/ to view it in action.

console.log("Page loaded!");

document.body.style.background = "red";



const note = document.createElement('div');
note.textContent = 'Note to Sahil Rajput: This text was added by your custom chrome extension.';
note.style.color = 'white';
note.style.border = '2px solid white';
note.style.padding = '10px';

document.body.append(note);