//generate the menu for each challenge.

function getmenu(pageid) {

    let templateURL = '/template/menu.html';
    if (pageid == 0) {
        templateURL = `template/menu.html`;
    };

    fetch(templateURL)
        .then(res => res.text())
        .then(text => {
            //let oldelem = document.querySelector("script#replace_with_navbar");
            let parser = new DOMParser();
            let shadowdoc = parser.parseFromString(text, 'text/html');
            let menuTemplate = shadowdoc.getElementById("menu-template");
            let menuHTML = shadowdoc.importNode(menuTemplate.content, true);
            let navMenu = document.getElementById("navmenu");
            let menuItems = menuHTML.querySelectorAll("li");
            let activeMenu = menuItems[pageid]
            let menuLink = activeMenu.querySelector("a");

            menuLink.classList.add("active");
            menuLink.setAttribute("aria-current", "page");
            navMenu.innerHTML = "";
            navMenu.appendChild(menuHTML);
        });

}