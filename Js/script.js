const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgers = document.querySelectorAll('.hamburger');
const menuList = document.querySelector('.menu-list-items');

// hamburger menu start
hamburgerMenu.addEventListener("click",()=>{
    menuList.classList.toggle("active-menu");
    hamburgers.forEach(hamburger=>{
        hamburger.classList.toggle("move")
    })
});
// hamburger menu end


// carousel  start

// carousel  end

