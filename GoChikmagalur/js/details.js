function getModalCarousel(images){
    console.log(images)
    let src = images.src
    console.log(src)
    $('.bottom-carousel .active img').attr('src',src)
}
function getModalCarouselTop(images){
    console.log(images)
    let src = images.src
    console.log(src)
    $('.top-carousel .active img').attr('src',src)
}