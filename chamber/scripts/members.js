const toggleMemberView = document.getElementById('toggle-member-view');
const memberList = document.querySelector('#member-list');
const memberGrid = document.querySelector('#member-grid');

// List view if true, grid view if false
let listView = true;
refreshMemberView();

toggleMemberView.addEventListener('click', () => {
    listView = !listView;
    refreshMemberView();
});

function refreshMemberView() {
    toggleMemberView.textContent = listView ? 'Grid View' : 'List View';
    if (listView) {
        memberList.style.display = 'block';
        memberGrid.style.display = 'none';
    } else {
        memberList.style.display = 'none';
        memberGrid.style.display = 'grid';
    }
}

async function loadMembers() {
    const response = await fetch('data/members.json');
    return await response.json();
}

loadMembers().then(members => {
    console.log('Members loaded:', members);
    members.forEach(member => {
        const memberListItem = document.getElementById('member-list-item').content.cloneNode(true);
        const memberCard = document.getElementById('member-card').content.cloneNode(true);
        fillMemberTemplate(member, memberListItem);
        fillMemberTemplate(member, memberCard);
        memberList.appendChild(memberListItem);
        memberGrid.appendChild(memberCard);
    });
});

function fillMemberTemplate(member, template) {
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
