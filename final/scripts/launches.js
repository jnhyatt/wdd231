import { upcomingLaunches } from "./launch-library-api.js";
import { launchCard } from "./launch-card.js";

const launchList = document.querySelector("#launch-list");

upcomingLaunches().then((launches) => {
    launches.forEach((launch) => {
        const card = launchCard(launch);
        launchList.appendChild(card);
    });
});
