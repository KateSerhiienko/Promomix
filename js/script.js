// nav menu & application top

const nav_hamburger = document.querySelector(".nav-hamburger");
const nav_esc = document.querySelector(".nav-item>.esc");
const menu = document.querySelector(".menu");
const application_top = document.querySelector(".application-top");
const application_request = document.querySelector(".header-nav-request");
const application_top_esc = document.querySelector(".application-top .esc");

function openNavMenu() {
    menu.classList.remove("no-display");
    nav_hamburger.classList.add("no-display");
    nav_esc.classList.remove("no-display");
}

function closeNavMenu() {
    menu.classList.add("no-display");
    nav_hamburger.classList.remove("no-display");
    nav_esc.classList.add("no-display");
}

function openApplicationTop() {
    application_top.classList.remove("no-display");
}

function closeApplicationTop() {
    application_top.classList.add("no-display");
}

nav_hamburger.addEventListener("click", () => {
    closeApplicationTop();
    openNavMenu();
})

nav_esc.addEventListener("click", () => closeNavMenu());

application_request.addEventListener("click", () => {
    closeNavMenu();
    openApplicationTop();
})

application_top_esc.addEventListener("click", () => closeApplicationTop());


// application footer

const application_btn = document.querySelector(".footer-top a");
const application_footer = document.querySelector(".application-footer");
const application_footer_esc = document.querySelector(".application-footer .esc");

application_btn.addEventListener("click", () => application_footer.classList.remove("no-display"));
application_footer_esc.addEventListener("click", () => application_footer.classList.add("no-display"));


// Add .darker to our work, news

const our_work_items = document.querySelectorAll(".our-work-item");
const our_work_items_img = document.querySelectorAll(".our-work-item-img");

const news = document.querySelectorAll(".news-item");
const news_img = document.querySelectorAll(".news-img>img")

function addDarker(item) {
    item.classList.add("darker");
}
function removeDarker(item) {
    item.classList.remove("darker");
}

for (let i = 0; i < our_work_items.length; i++) {
    our_work_items[i].addEventListener("mouseover", () => addDarker(our_work_items_img[i]));
    our_work_items[i].addEventListener("mouseout", () => removeDarker(our_work_items_img[i]));
}
for (let i = 0; i < news.length; i++) {
    news[i].addEventListener("mouseover", () => addDarker(news_img[i]));
    news[i].addEventListener("mouseout", () => removeDarker(news_img[i]));
}


// equipment

const equipment_items_header = document.querySelectorAll(".equipment-item-header");
const equipment_items_header_plus = document.querySelectorAll(".equipment-item-header-plus")
const equipment_items_header_minus = document.querySelectorAll(".equipment-item-header-minus")
const equipment_items_bottom = document.querySelectorAll(".equipment-item-bottom");
const equipment_items_firm = document.querySelectorAll(".equipment-item-firm");
const equipment_items_substrate = document.querySelectorAll(".equipment-item-substrate");

function closeEquipmentItems() {
    Array.from(equipment_items_bottom).forEach(item => item.classList.add("no-display"));
    Array.from(equipment_items_header_plus).forEach(item => item.classList.remove("no-display"));
    Array.from(equipment_items_header_minus).forEach(item => item.classList.add("no-display"));
    Array.from(equipment_items_firm).forEach(item => item.classList.remove("no-display"));
    Array.from(equipment_items_substrate).forEach(item => item.classList.add("no-display"));
}

for (let i = 0; i < equipment_items_header.length; i++) {
    equipment_items_header[i].addEventListener("click", () => { 
        if (equipment_items_bottom[i].classList.contains("no-display")) {
            closeEquipmentItems();
            equipment_items_bottom[i].classList.remove("no-display");
            equipment_items_header_plus[i].classList.add("no-display");
            equipment_items_header_minus[i].classList.remove("no-display");
            equipment_items_firm[i].classList.add("no-display");
            equipment_items_substrate[i].classList.remove("no-display");
        }
        else closeEquipmentItems();
    })   
}


// work 

const works_select = document.querySelector("#work_select");
const arr_our_work_items = Array.from(our_work_items);

works_select.addEventListener('change', (event) => {
    arr_our_work_items.forEach(item => item.classList.add("no-display"));

    const filteredItems = arr_our_work_items.filter(item => item.getAttribute("name") == event.path[0].value);
    filteredItems.forEach(item => item.classList.remove("no-display"));
});