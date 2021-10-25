// (async function() {
//     const gap = 12;
//     const carousel = document.getElementById("carousel"),
//         content = document.getElementById("content"),
//         next = document.getElementById("next"),
//         prev = document.getElementById("prev");
//     next.addEventListener("click", e => {
//         carousel.scrollBy(width + gap, 0);
//         if (carousel.scrollWidth !== 0) {
//             prev.style.display = "flex";
//         }
//         if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//             next.style.display = "none";
//         }
//     });
//     prev.addEventListener("click", e => {
//         carousel.scrollBy(-(width + gap), 0);
//         if (carousel.scrollLeft - width - gap <= 0) {
//             prev.style.display = "none";
//         }
//         if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//             next.style.display = "flex";
//         }
//     });
//     let width = carousel.offsetWidth;
//     window.addEventListener("resize", e => (width = carousel.offsetWidth));
// })();

function leftMenuShowHide(){
    let theLeftMenu = document.querySelector('.the-left-nav-man');
    console.log(theLeftMenu.style.display);
    if(theLeftMenu.style.display == "" || theLeftMenu.style.display == "none"){
        theLeftMenu.style.display = "flex"
    }else{
        theLeftMenu.style.display = "none"
    }
}
function rightMenuShowHide(){
    let theLeftMenu = document.querySelector('.thenav ');
    console.log(theLeftMenu.style.display);
    if(theLeftMenu.style.display == "" || theLeftMenu.style.display == "none"){
        theLeftMenu.style.display = "flex"
    }else{
        theLeftMenu.style.display = "none"
    }
};
(() =>{
    let theLi = document.querySelectorAll('.theadvertisement-ul')
    let theTotalHeight = 0;
    theLi.forEach( li => {
        console.log(li.clientHeight);
        theTotalHeight += li.clientHeight;
    })
    console.log(theTotalHeight);
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue('--animationHeight'))
    r.style.setProperty('--animationHeight', (-(theTotalHeight/2) + 100) + 'px');
})()