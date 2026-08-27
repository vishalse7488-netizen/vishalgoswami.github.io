// =====================================================
// NOTESWALLAH JAVASCRIPT
// =====================================================


// ================= YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

        if (navbar.classList.contains("show")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });

}



// ================= CLOSE MOBILE MENU =================

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbar) {

            navbar.classList.remove("show");

        }

        if (menuBtn) {

            menuBtn.textContent = "☰";

        }

    });

});



// ================= SMOOTH SCROLL =================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });



// ================= ACTIVE NAVIGATION =================

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection =
        "home";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();