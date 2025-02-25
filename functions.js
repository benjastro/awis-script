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
    panel.id = "search-panel";

    let title = document.createElement("h2");
    title.innerText = "Search"
    panel.appendChild(title);

    let inputPanel = document.createElement("div");
    inputPanel.style.display = "flex";
    inputPanel.style.gap = "8px";

    let inputBox = document.createElement("input");
    inputBox.type = "text";

    let searchButton = document.createElement("button");
    searchButton.id = "search-panel-button";
    searchButton.innerText = "Submit";

    inputPanel.appendChild(inputBox);
    inputPanel.appendChild(searchButton);

    panel.appendChild(inputPanel);
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