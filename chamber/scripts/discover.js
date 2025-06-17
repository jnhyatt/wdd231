const poiList = document.querySelector(".poi-list");
const poiTemplate = document.querySelector("#poi-card-template");

async function fetchPOIs() {
    const response = await fetch("data/discover-pois.json");
    return await response.json();
}

function createPOICard(poi) {
    const poiCard = poiTemplate.content.cloneNode(true);
    poiCard.querySelector("h2").textContent = poi.title;
    poiCard.querySelector("img").src = poi.filename;
    poiCard.querySelector("address").textContent = poi.address;
    poiCard.querySelector("p").textContent = poi.description;
    poiCard.querySelector("button").addEventListener("click", () => {
        console.log(`Clicked on POI: ${poi.title}`);
    });
    return poiCard;
}

fetchPOIs().then(pois => {
    pois.forEach(poi => {
        poiList.appendChild(createPOICard(poi));
    });
});
