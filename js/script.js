const red = "#f2353f";
const white = "#ffffff";
const black = "#1f2c37";

// header

const logo = document.querySelector(".header-logo-img");

logo.onmouseover = function () {
    logo.style.background = "url(../img/logo_hover.svg) no-repeat center";
}
logo.onmouseout = function () {
    logo.style.background = "url(../img/logo.svg) no-repeat center";
}

const header_nav_search = document.querySelector(".header-nav-search");

header_nav_search.onmouseover = function () {
    header_nav_search.childNodes[1].style.backgroundColor = red;
    header_nav_search.childNodes[3].style.color= red;
}
header_nav_search.onmouseout = function () {
    header_nav_search.childNodes[1].style.backgroundColor = black;
    header_nav_search.childNodes[3].style.color= black;
    
}

// nav menu

const nav_item = document.querySelector(".nav-item");
const nav_arrow = document.querySelector(".nav-arrow")
const menu = document.querySelector(".menu");

nav_item.onclick = function () {
    if (application_top.classList.contains("no-display")) {
        nav_item.classList.toggle("nav-hamburger");
        nav_item.classList.toggle("esc");
        nav_arrow.classList.toggle("no-display");
        menu.classList.toggle("no-display");
    }
    else {
        application_top.classList.add("no-display");
        nav_item.classList.toggle("nav-hamburger");
        nav_item.classList.toggle("esc");
        nav_arrow.classList.toggle("no-display");
        menu.classList.toggle("no-display");
    }
}


// application
const application_request = document.querySelector(".header-nav-request");
const application_top = document.querySelector(".application-top");
const application_top_esc = document.querySelector(".application-top .esc");

application_request.onclick = function () {
    menu.classList.add("no-display");
    nav_item.classList.add("nav-hamburger");
    nav_item.classList.remove("esc");
    application_top.classList.toggle("no-display");
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

// services

const services = document.querySelectorAll(".key-areas-item");

function services_over(i) {
    return function () {
        services[i].classList.add("bg-red");
        services[i].childNodes[1].style.backgroundColor = white;
        services[i].childNodes[3].style.color = white;
    }   
}

function services_out(i) {
    return function () {
        services[i].classList.remove("bg-red");
        services[i].childNodes[1].style.backgroundColor = red;
        services[i].childNodes[3].style.color = black;
    }
}

for (let i = 0; i < services.length; i++) {
    services[i].onmouseover = services_over(i);
    services[i].onmouseout = services_out(i);
}

//our work

const our_work = document.querySelectorAll(".our-work-item");

for (let i = 0; i < our_work.length; i++) {
    our_work[i].onmouseover = function () {
        our_work[i].childNodes[1].classList.add("darker");
        our_work[i].childNodes[3].style.color = red;
    };
    our_work[i].onmouseout = function () {
        our_work[i].childNodes[1].classList.remove("darker");
        our_work[i].childNodes[3].style.color = black;
    };
}

const plus_hr_link = document.querySelectorAll(".plus-hr-link");


for (let i = 0; i < plus_hr_link.length; i++) {
    plus_hr_link[i].onmouseover = function () {
        plus_hr_link[i].childNodes[1].style.backgroundColor = red;
        plus_hr_link[i].childNodes[3].style.backgroundColor = red;
        plus_hr_link[i].childNodes[5].style.color = red;
    }

    plus_hr_link[i].onmouseout = function () {
        plus_hr_link[i].childNodes[1].style.backgroundColor = black;
        plus_hr_link[i].childNodes[3].style.backgroundColor = black;
        plus_hr_link[i].childNodes[5].style.color = black;
    }
}

// news

const news = document.querySelectorAll(".news-item");

for (let i = 0; i < news.length; i++) {
    news[i].onmouseover = function () {
        news[i].childNodes[1].childNodes[3].classList.add("darker");
        news[i].childNodes[3].childNodes[1].childNodes[3].classList.add("color-red");
        news[i].childNodes[3].childNodes[3].childNodes[1].style.backgroundColor = red;
        news[i].childNodes[3].childNodes[3].childNodes[3].classList.add("color-red");
    };
    news[i].onmouseout = function () {
        news[i].childNodes[1].childNodes[3].classList.remove("darker");
        news[i].childNodes[3].childNodes[1].childNodes[3].classList.remove("color-red");
        news[i].childNodes[3].childNodes[3].childNodes[1].style.backgroundColor = black;
        news[i].childNodes[3].childNodes[3].childNodes[3].classList.remove("color-red");
    };
}

// equipment

const equipment_item = document.querySelectorAll(".equipment-item");
const equipment_item_header = document.querySelectorAll(".equipment-item-header");
const equipment_item_bottom = document.querySelectorAll(".equipment-item-bottom");

console.log(Array.from(equipment_item_bottom));

for (let i = 0; i < equipment_item_header.length; i++) {
    equipment_item_header[i].onmouseover = function () {
        equipment_item_header[i].childNodes[3].classList.add("color-red");
        equipment_item_header[i].childNodes[5].classList.add("color-red");
        equipment_item_header[i].childNodes[9].style.background = red;
    };
    equipment_item_header[i].onmouseout = function () {
        equipment_item_header[i].childNodes[3].classList.remove("color-red");
        equipment_item_header[i].childNodes[5].classList.remove("color-red");
        equipment_item_header[i].childNodes[9].style.background = black;
    };
    equipment_item[i].onclick = function () {
        Array.from(equipment_item_bottom).map(item => item.classList.add("no-display"));
        equipment_item_bottom[i].classList.toggle("no-display");
        debugger;
        equipment_item_header[i].childNodes[5].classList.toggle("no-display");
        equipment_item_header[i].childNodes[7].classList.toggle("no-display");
        equipment_item_header[i].childNodes[9].classList.toggle("equipment-item-header-plus");
        equipment_item_header[i].childNodes[9].classList.toggle("equipment-item-header-minus");
    }; 
}

// work 

let work_select = document.querySelector("#work_select");

// for (let i = 0; i < 5; i++){
//    if (work_select[i].selected) {
//     console.log(i);
// } 
// }
