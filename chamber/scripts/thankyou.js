const firstName = document.querySelector('.responses .first-name');
const lastName = document.querySelector('.responses .last-name');
const title = document.querySelector('.responses .title');
const email = document.querySelector('.responses .email');
const phone = document.querySelector('.responses .phone');
const organization = document.querySelector('.responses .organization');
const membershipLevel = document.querySelector('.responses .membership-level');
const description = document.querySelector('.responses .description');
const timestamp = document.querySelector('.responses .timestamp');

const formData = new URLSearchParams(window.location.search);
firstName.textContent = formData.get('first-name');
lastName.textContent = formData.get('last-name');
title.textContent = formData.get('title');
email.textContent = formData.get('email');
phone.textContent = formData.get('phone');
organization.textContent = formData.get('organization');
const membershipLevelValue = formData.get('membership-level');
const capitalizedMembershipLevel = membershipLevelValue.charAt(0).toUpperCase() + membershipLevelValue.slice(1);
membershipLevel.textContent = capitalizedMembershipLevel;
description.textContent = formData.get('description');
timestamp.textContent = new Date(formData.get('timestamp')).toLocaleString();
