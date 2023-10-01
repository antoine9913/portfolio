const pageTurnBtn = document.querySelectorAll('.navbar_btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})