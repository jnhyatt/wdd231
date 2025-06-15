import { launchSites } from "./launch-library-api.js";

const email = document.querySelector(".email");
const location = document.querySelector(".location");

const params = new URLSearchParams(window.location.search);
const emailParam = params.get("email");
const locationParam = params.get("location");

email.textContent = emailParam;
location.textContent = launchSites[locationParam];
