
const definitionSatellite = document.querySelector("#definition-satellite");
const definitionGraveyardOrbit = document.querySelector("#definition-graveyard-orbit");
const definitionStage = document.querySelector("#definition-stage");

definitionSatellite.querySelector(".close").addEventListener("click", () => {
    definitionSatellite.close();
});
definitionGraveyardOrbit.querySelector(".close").addEventListener("click", () => {
    definitionGraveyardOrbit.close();
});
definitionStage.querySelector(".close").addEventListener("click", () => {
    definitionStage.close();
});

document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches("[data-modal]")) {
        e.preventDefault();
        const dialog = document.getElementById(target.dataset.modal);
        if (dialog.showModal) dialog.showModal();
    }
});
