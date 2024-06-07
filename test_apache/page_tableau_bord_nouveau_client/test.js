document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Fermer le menu si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
