let sections = document.querySelectorAll('section');
//populate current section from section in html
function createMenu() {
    for (let sectionName of sections) {
        let menuItem = document.createElement("li");
        menuItem.innerHTML = `<a class="menu__link" href="#${sectionName.id}">${sectionName.dataset.nav}</a>`;
        // use innerhtml for anchor item
        document.querySelector('#navbar__list').appendChild(menuItem);
        // append child to the menu
    }
    
};
function viewPortBounding (element) {
    return (element.getBoundingClientRect().top);
};
function activeState() {
    /**loop to go through sections to check if client rectangle is in 330 viewport that I defined */
    for (let section of sections) {
        if (viewPortBounding(section) < 330 && viewPortBounding(section) >= -330) {
            section.classList.add(`active_section`);
            /**add active class to the menu anchor on section in viewport */
            let menuAnchors = document.getElementsByTagName('a');
            let listItem = section.dataset.nav;
            /**iterate over menu items comparing the current section's data.nav to the anchor's .innerText */
            for (let currentMenuAnchor of menuAnchors) {
                if (listItem == currentMenuAnchor.innerText) {
                    console.log(currentMenuAnchor.innerText);
                    currentMenuAnchor.classList.add(`menu_active_item`);
                } else {
                    currentMenuAnchor.classList.remove(`menu_active_item`);
                }
            }
        } else { //this else removes the class from non active sections
            section.classList.remove(`active_section`);
        }
    }
};

createMenu();
document.addEventListener('scroll', activeState, {passive: true, capture: true});
