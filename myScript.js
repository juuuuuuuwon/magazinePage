let windowHeight = 0;
let scrollY = 0;
let currentPage = 0;
let pageHeight = 0;
let totalScrollHeight = 0;

const pages = document.querySelectorAll('.section0,.section1,.section2,.section3');

function init(){
    windowHeight = window.innerHeight;
    pageHeight = windowHeight;
    totalScrollHeight = pageHeight * pages.length ;
    document.body.style.height = totalScrollHeight + 'px';

    pages.forEach((page, i) => {
        page.style.zIndex = pages.length + i;
    });

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', init);
}

function onScroll(){
    scrollY = window.pageYOffset;
    currentPage = Math.floor(scrollY / pageHeight);

    pages.forEach((page, i) => {
        if(i === currentPage){
            page.style.opacity = 1;
            page.style.transform = 'translateY(0)';
            page.style.transition = 'all 1s ease';
        }else{
            page.style.opacity = 0;
            page.style.transform = 'translateY(80px)';
        }
    });
}

init();





