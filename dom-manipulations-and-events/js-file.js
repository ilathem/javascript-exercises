const container = document.getElementById('container');
// a <p> with red text that says “Hey I’m red!”
const redPTag = document.createElement('p');
redPTag.style.color = 'red';
redPTag.textContent = "Hey I'm red!"
container.appendChild(redPTag);
// an <h3> with blue text that says “I’m a blue h3!”
const blueH3Tag = document.createElement('h3');
blueH3Tag.style.color = 'blue';
blueH3Tag.textContent = 'I\'m a blue h3!';
container.appendChild(blueH3Tag);
// a <div> with a black border and pink background color with the following elements inside of it:
//      another <h1> that says “I’m in a div”
//      a <p> that says “ME TOO!”
//      Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const pinkDiv = document.createElement('div');
pinkDiv.style.border = '2px solid black';
pinkDiv.style.backgroundColor = 'pink';
const h1Tag = document.createElement('h1');
h1Tag.textContent = "I'm in a div";
const pTag = document.createElement('p');
pTag.textContent = "ME TOO!";
pinkDiv.appendChild(h1Tag);
pinkDiv.appendChild(pTag);
container.appendChild(pinkDiv);
