const mobileNav = () => {

    const headerNav = document.querySelector('.header_bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let isMobileNavOpen = false;
   
    headerNav.addEventListener('click' , () => {

        isMobileNavOpen = !isMobileNavOpen;
        
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';  
        }   
});
     mobileLinks.forEach( Link => {
        Link.addEventListener( 'click' , () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
     });

};

export default mobileNav;
