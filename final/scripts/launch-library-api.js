export async function upcomingLaunches() {
    const goForLaunch = await (await fetch("https://lldev.thespacedevs.com/2.3.0/launches?limit=20&ordering=net&status=1")).json();
    const launchTbd = await (await fetch("https://lldev.thespacedevs.com/2.3.0/launches?limit=20&ordering=net&status=2")).json();
    const launches = goForLaunch.results.concat(launchTbd.results);
    launches.sort((a, b) => new Date(a.net) - new Date(b.net));
    return launches;
}

export const launchSites = {
    11: "Vandenberg SFB, CA, USA",
    12: "Cape Canaveral SFS, FL, USA",
    21: "Wallops Flight Facility, VA, USA",
    25: "Pacific Spaceport Complex, AK, USA",
    27: "Kennedy Space Center, FL, USA",
};
