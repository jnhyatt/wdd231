import { fillMemberTemplate, loadMembers } from './members.mjs';

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
