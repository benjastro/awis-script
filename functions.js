function toggleDiv(id, displayShow) {
    element = document.getElementById(id);
    if (element.style.display == displayShow) {
        element.style.display = "none";
        return;
    } 

    element.style.display = displayShow;
}

function createSearchEnginePanel() {
    let panel = document.createElement("div");
    panel.id = "search-engine-panel";

    let title = document.createElement("h2");
    title.innerText = "Search"
    panel.appendChild(title);

    let inputBox = document.createElement("input");
    inputBox.type = "text";

    panel.appendChild(inputBox);
    return panel;
}

function putSearchEngine(containerId) {
    document.getElementById(containerId).appendChild(createSearchEnginePanel());
}


function createHomeButton() {
    let homelink = `${window.location.origin}/awis-script/`;
    homelink = `${window.location.origin}`;
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
    annotation.innerText = "ANNOTATION!!!!";
    return annotation;
}

function bodyPutHomeButton() {
    document.body.appendChild(createHomeButton());
}

function putHomeButton(containerId) {
    document.getElementById(containerId).appendChild(createHomeButton());
}