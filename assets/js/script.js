/////////////////////////////////////
// Navbar scroll behavior
/////////////////////////////////////
let lastScrollTop = 0;
let hideTimeout = null;
const nav = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Top of page
    if (scrollTop === 0) {
        nav.classList.remove("shrink", "hide");
        clearTimeout(hideTimeout);
        hideTimeout = null;
        lastScrollTop = scrollTop;
        return;
    }

    // Scroll Down
    if (scrollTop > lastScrollTop) {
        nav.classList.add("shrink");
        if (!hideTimeout) {
            hideTimeout = setTimeout(() => {
                nav.classList.add("hide");
            }, 350);
        }
    }
    // Scroll Up
    else {
        nav.classList.remove("hide");
        nav.classList.add("shrink");
        clearTimeout(hideTimeout);
        hideTimeout = null;
    }

    lastScrollTop = scrollTop;
});


/////////////////////////////////////
// Copy Email Button
/////////////////////////////////////
const email = "ayaashraff160@gmail.com";

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".copyEmailBtn");
    if (!btn) return;

    const text = btn.querySelector(".copyText");
    const icon = btn.querySelector(".copyIcon");

    navigator.clipboard.writeText(email).then(() => {
        text.textContent = "Email Copied!";
        icon.className = "bi bi-check-circle-fill text-success";

        setTimeout(() => {
            text.textContent = "Copy Email";
            icon.className = "bi bi-files copyIcon";
        }, 2000);
    });
});


/////////////////////////////////////
// Contact Overlay
/////////////////////////////////////
const contactOverlay = document.getElementById("contactOverlay");
const contactPanel = document.getElementById("contactPanel");

document.addEventListener("click", (e) => {
    if (e.target.closest(".Cbtn")) {
        contactOverlay.classList.add("active");
    }
});

contactOverlay.addEventListener("click", () => {
    contactOverlay.classList.remove("active");
});

contactPanel.addEventListener("click", (e) => {
    e.stopPropagation();
});


/////////////////////////////////////
// Mobile Menu Overlay
/////////////////////////////////////
const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-listttt");
const navBtn = document.querySelector(".nav-btn");

menuBtn.addEventListener("click", () => {

    // Create mobile overlay
    const mobileOverlay = document.createElement("div");
    mobileOverlay.className = "mobile-overlay";

    // Menu box
    const menuBox = document.createElement("div");
    menuBox.className = "mobile-menu-box";

    // Clone nav content
    const listClone = navList.cloneNode(true);
    const btnClone = navBtn.cloneNode(true);

    menuBox.appendChild(listClone);
    menuBox.appendChild(btnClone);
    mobileOverlay.appendChild(menuBox);
    document.body.appendChild(mobileOverlay);

    // Close when clicking outside
    mobileOverlay.addEventListener("click", () => {
        mobileOverlay.remove();
    });

    // Prevent close when clicking inside
    menuBox.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking any link or button
    mobileOverlay.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("click", (e) => {

            // لو زرار Contact Me
            if (el.closest(".Cbtn")) {
                document.getElementById("contactOverlay").classList.add("active");
            }

            mobileOverlay.remove();
        });
    });
});




const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});