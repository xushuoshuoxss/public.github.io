function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

function showSublist(listId) {
    // Toggle visibility of the sublist
    const sublist = document.getElementById(listId);
    if (sublist) {
        sublist.classList.toggle('hidden');
    }
}
