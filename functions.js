async function fetchData(jsonUrl, finally_callback) {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    // returns json object
    const dataInJson = JSON.parse(JSON.stringify(data));
    

    return dataInJson;
}

function toggleDiv(id, displayShow) {
    element = document.getElementById(id);
    if (element.style.display == displayShow) {
        element.style.display = "none";
        return;
    } 

    element.style.display = displayShow;
}

function createResultPanel(object) {
    resultPanel = document.createElement("div");
    resultPanel.style.width = "98%";
    resultPanel.style.height = "auto";
    resultPanel.style.border = "1px solid black";
    resultPanel.style.textOverflow = "ellipsis";
    resultPanel.style.boxSizing = "borderBox";
    resultPanel.style.padding = "2px";
    resultPanel.style.overflowX = "clip";

    titleText = document.createElement("a");
    titleText.innerText = object.title;
    titleText.href = object.url;
    titleText.style.fontSize = "18px";
    titleText.style.whiteSpace = "nowrap";
    titleText.style.overflow = "hidden";
    titleText.style.textOverflow = "ellipsis";

    resultPanel.appendChild(titleText);

    descriptionText = document.createElement("p");
    descriptionText.innerText = object.description

    resultPanel.appendChild(descriptionText);

    return resultPanel;
}

function createResultsContainer(json) {
    resultsContainer = document.createElement("div");
    resultsContainer.style.display = "flex";
    resultsContainer.style.flexDirection = "column";
    resultsContainer.style.gap = "1px";
    resultsContainer.style.overflowX = "clip";
    resultsContainer.style.overflowY = "scroll";
    resultsContainer.style.width = "100%";
    resultsContainer.style.boxSizing = "borderBox";
    resultsContainer.style.paddingRight = "2px";
    resultsContainer.style.paddingBottom = "6px";
    resultsContainer.style.textOverflow = "ellipsis";
    

    for (const key in json) {
        resultPanel = createResultPanel(json[key]);
        resultsContainer.appendChild(resultPanel);
    }

    return resultsContainer;
}

async function createSearchEnginePanel() {
    let JSON_URL = "https://benjastro.github.io/awis-script/data/searchable.json";

    let panel = document.createElement("div");
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.height = "100%";
    panel.style.textOverflow = "ellipsis";
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
    panel.appendChild(document.createElement("br"))

    jsonData = await fetchData(JSON_URL);
    if (jsonData) {
        resultsContainer = createResultsContainer(jsonData);
        panel.appendChild(resultsContainer);
    }

    
    return panel;
}

async function putSearchEngine(containerId) {
    searchEnginePanel = await createSearchEnginePanel();
    document.getElementById(containerId).appendChild(searchEnginePanel);
}


function createHomeButton() {
    let homelink = `${window.location.origin}/awis-script/`;
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