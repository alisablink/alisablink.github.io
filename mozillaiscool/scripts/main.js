const myImage = document.querySelector('img');
const myText = document.querySelector('h1');
const myButton = document.querySelector('button');

myButton.onclick = () => {
    setUserName();
}

function setUserName(){
    const myName = prompt('Enter your name:');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myText.textContent = `Mozilla is cool, ${myName}`;
    }
}
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    const myName = localStorage.getItem('name')
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/godot.png')
        myText.textContent = `Godot is cool, ${myName}!`
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
        myText.textContent = `Mozilla is cool, ${myName}!`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
  