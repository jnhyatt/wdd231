import { fillMemberTemplate, loadMembers } from './members.mjs';

const memberGrid = document.querySelector('#member-grid');

loadMembers().then(members => {
    console.log('Members loaded:', members);
    // sort members by membershipLevel in descending order and grab the top 3
    members.sort((a, b) => b.membershipLevel - a.membershipLevel);
    members = members.slice(0, 3);
    members.forEach(member => {
        const memberCard = document.getElementById('member-card').content.cloneNode(true);
        fillMemberTemplate(member, memberCard);
        memberGrid.appendChild(memberCard);
    });
});
