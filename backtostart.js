
function createHomeButton() {
    const homelink = window.location.origin;
    let homeButton = document.createElement('button');
    homeButton.innerText = "Back to Home";
    homeButton.onclick = () => {
        location.href = homelink;
    };
    return homeButton;
}

function annotation() {
    let annotation = document.createElement('h1');
    annotation.style.color = red;
    annotation.innerText = "ANNOTATION!!!";
    return annotation;
}

function bodyPutHomeButton() {
    document.body.appendChild(createHomeButton());
}