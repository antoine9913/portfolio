const pageTurnBtn = document.querySelectorAll('.navbar_btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        
        pageTurn.addEventListener("click", () => {
            window.scrollTo({
              top,
              behavior: "smooth",
            });
          });

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})


const pages = document.querySelectorAll('.book_page.page_right');
const contactMeBtn = document.querySelector('.btn.contact_me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfilBtn = document.querySelector('.back_profil');

backProfilBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);

        }, (index + 1) * 200 + 100);
    })
}



const coverRight = document.querySelector('.cover.cover_right');
const pageLeft = document.querySelector('.book_page.page_left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);

    }, (index + 1) * 200 + 2100);
})


function sendMail() {

    if (document.getElementById("email").value.length==0) {
        alert("Saisir l'adresse du destinataire !!!");
        return;
    }
    if (document.getElementById("name").value.length==0) {
        alert("Saisir le titre !!!");
        return;
    }
    if (document.getElementById("message").value.length==0) {
        alert("Ecrire le message !!!");
        return;
    }

    var url="mailto:"+encodeURIComponent(document.getElementById("email").value)
    +"?subject="+encodeURIComponent(document.getElementById("name").value)
    +"&body="+encodeURIComponent(document.getElementById("message").value);


    document.location=url;
}