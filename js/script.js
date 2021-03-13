// nav menu

const nav_item = document.querySelector(".nav-item");
const nav_hamburger = document.querySelector(".nav-hamburger");
const nav_esc = document.querySelector(".nav-item>.esc");
const nav_arrow = document.querySelector(".nav-arrow");
const menu = document.querySelector(".menu");
const application_top = document.querySelector(".application-top");


nav_item.onclick = function () {
    if (application_top.classList.contains("no-display")) {
        nav_hamburger.classList.toggle("no-display");
        nav_esc.classList.toggle("no-display");
        nav_arrow.classList.toggle("no-display");
        menu.classList.toggle("no-display");
    }
    else {
        application_top.classList.add("no-display");
        nav_hamburger.classList.add("no-display");
        nav_esc.classList.remove("no-display");
        nav_arrow.classList.add("no-display");
        menu.classList.remove("no-display");
    }
}


// application
const application_request = document.querySelector(".header-nav-request");
const application_top_esc = document.querySelector(".application-top .esc");

application_request.onclick = function () {
    if (menu.classList.contains("no-display")) {
       application_top.classList.toggle("no-display");
    }
    else {
        menu.classList.add("no-display");
        nav_hamburger.classList.remove("no-display");
        nav_esc.classList.add("no-display");
        application_top.classList.toggle("no-display");
    }
}
application_top_esc.onclick = function () {
    application_top.classList.add("no-display");
}

const application_btn = document.querySelector(".footer-top a");
const application_footer = document.querySelector(".application-footer");
const application_footer_esc = document.querySelector(".application-footer .esc");

if (application_footer) {
    application_btn.onclick = function () {
        application_footer.classList.remove("no-display");
    }
    application_footer_esc.onclick = function () {
        application_footer.classList.add("no-display");
    }
}

//our work

const our_work_items = document.querySelectorAll(".our-work-item");
const our_work_items_img = document.querySelectorAll(".our-work-item-img");

for (let i = 0; i < our_work_items.length; i++) {
    our_work_items[i].onmouseover = function () {
        our_work_items_img[i].classList.add("darker");
    };
    our_work_items[i].onmouseout = function () {
        our_work_items_img[i].classList.remove("darker");
    };
}

// news

const news = document.querySelectorAll(".news-item");
const news_img = document.querySelectorAll(".news-img>img")

for (let i = 0; i < news.length; i++) {
    news[i].onmouseover = function () {
        news_img[i].classList.add("darker");
    };
    news[i].onmouseout = function () {
        news_img[i].classList.remove("darker");
    };
}

// equipment

const equipment_items = document.querySelectorAll(".equipment-item");
const equipment_items_header = document.querySelectorAll(".equipment-item-header");
const equipment_items_header_plus = document.querySelectorAll(".equipment-item-header-plus")
const equipment_items_header_minus = document.querySelectorAll(".equipment-item-header-minus")
const equipment_items_bottom = document.querySelectorAll(".equipment-item-bottom");
const equipment_items_firm = document.querySelectorAll(".equipment-item-firm");
const equipment_items_substrate = document.querySelectorAll(".equipment-item-substrate");




for (let i = 0; i < equipment_items_header.length; i++) {
    equipment_items[i].onclick = function () { 
        if (equipment_items_bottom[i].classList.contains("no-display")) {
            Array.from(equipment_items_bottom).map(item => item.classList.add("no-display"));
            Array.from(equipment_items_header_minus).map(item => item.classList.add("no-display"));
            Array.from(equipment_items_header_plus).map(item => item.classList.remove("no-display"));
            Array.from(equipment_items_firm).map(item => item.classList.remove("no-display"));
            Array.from(equipment_items_substrate).map(item => item.classList.add("no-display"));
            equipment_items_bottom[i].classList.remove("no-display");
            equipment_items_header_plus[i].classList.add("no-display");
            equipment_items_header_minus[i].classList.remove("no-display");
            equipment_items_firm[i].classList.add("no-display");
            equipment_items_substrate[i].classList.remove("no-display");
        }
        else {
            equipment_items_bottom[i].classList.add("no-display");
            equipment_items_header_plus[i].classList.remove("no-display");
            equipment_items_header_minus[i].classList.add("no-display");
            equipment_items_firm[i].classList.remove("no-display");
            equipment_items_substrate[i].classList.add("no-display");
        }
    }    
}

// work 

const works_select = document.querySelector("#work_select");
const arr_our_work_items = Array.from(our_work_items);

works_select.addEventListener('change', (event) => {
    arr_our_work_items.map(item => item.classList.add("no-display"));

    let someItems = arr_our_work_items.filter(item => item.classList.contains(event.path[0].value));
    Array.from(someItems.map(item => item.classList.remove("no-display")));
});