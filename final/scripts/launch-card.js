const cardTemplate = document.getElementById("launch-card");

export function launchCard(launch) {
    const card = cardTemplate.content.cloneNode(true);
    const missionName = card.querySelector("h3");
    const vehicle = card.querySelector("h4");
    const image = card.querySelector("img");
    const provider = card.querySelector(".provider");
    const countdown = card.querySelector(".countdown");
    const location = card.querySelector(".location");

    const liftoff = new Date(launch.net);
    const timer = setInterval(() => {
        updateCountdown(liftoff, countdown);
    }, 1000);
    updateCountdown(liftoff, countdown);

    missionName.textContent = launch.mission.name;
    vehicle.textContent = launch.rocket.configuration.full_name;
    image.src = launch.image?.thumbnail_url;
    image.alt = launch.mission.name;
    provider.textContent = launch.launch_service_provider.name;
    location.textContent = launch.pad.location.name;

    return card;
}

function updateCountdown(liftoff, countdownText) {
    const timeToLiftoff = Math.max(0, liftoff - new Date());
    countdownText.textContent = `T-${formatDuration(timeToLiftoff)}`;
}

function formatDuration(duration) {
    const days = Math.floor(duration / 86400000);
    const hours = Math.floor((duration % 86400000) / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${days} Days, ${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
