// Create TEAM members dynamically with accessibility attributes
const teamMembers = [
    {
        name: 'VISHWA GANDHI',
        role: 'CONTENT AND DOCUMENTATION HEAD',
        imageSrc: 'img/vishwa_gandhi.jpg'
    },
    {
        name: 'YASH PAREKH',
        role: 'CONTENT AND DOCUMENTATION HEAD',
        imageSrc: 'img/yash_parekh.jpg'
    },
    {
        name: 'UMANG SUKHADIA',
        role: 'VICE-PRESIDENT',
        imageSrc: 'img/Umang_sukhadia.jpg'
    }
];

function team(id){

teamMembers.forEach(member => {
    const memberLink = document.createElement('a');
    memberLink.href = '';

    const memberImage = document.createElement('img');
    memberImage.src = member.imageSrc;
    memberImage.alt = member.name; // Add alt text with member's name for image accessibility

    const memberInfo = document.createElement('div');
    memberInfo.className = 'bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4';

    const memberName = document.createElement('h4');
    memberName.className = 'text-primary';
    memberName.textContent = member.name;

    const memberRole = document.createElement('span');
    memberRole.className = 'text-body';
    memberRole.textContent = member.role;

    // Add ARIA labels for better accessibility
    memberLink.setAttribute('aria-label', `${member.name}, ${member.role}`);

    memberInfo.appendChild(memberName);
    memberInfo.appendChild(memberRole);

    memberLink.appendChild(memberImage);
    memberLink.appendChild(memberInfo);

    // Set ARIA roles for the member links
    memberLink.setAttribute('role', 'link');
    memberLink.setAttribute('tabindex', '0'); // Make the link focusable

    teamCarousel.appendChild(memberLink);
});
}
