export async function loadMembers() {
    const response = await fetch('data/members.json');
    return await response.json();
}

export function fillMemberTemplate(member, template) {
    template.querySelector('.name').textContent = member.name;
    template.querySelector('.logo').src = member.logo;
    template.querySelector('.logo').alt = `${member.name} logo`;
    const address = template.querySelector('.address');
    if (address) {
        address.textContent = member.address;
    }
    const phone = template.querySelector('.phone');
    if (phone) {
        phone.textContent = member.phone;
    }
    template.querySelector('.site-link').href = member.website;
    template.querySelector('.site-link').textContent = "Visit ➡";
}
