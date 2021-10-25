let whatsapp = document.createElement('div');
whatsapp.className = 'whatsappIconFloat'
whatsapp.style.cssText = `
    position: fixed;
    background: #25d366;
    width: 40px;
    height: 40px;
    bottom: 60px;
    right: 010px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 999;`
whatsapp.innerHTML = `<a target="_blank" href="//api.whatsapp.com/send?phone=919108265297&text=Hi, I need a help on: " id="whatsappAnchor"><i class="fab fa-whatsapp"></i></a>`
document.body.appendChild(whatsapp);
document.getElementById('whatsappAnchor').style.cssText = `
    background-color: #25d366;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none !important;
    `

    var mq = window.matchMedia( "(min-width: 1024px)" );
    if (mq.matches) {
        // window width is at less than 570px
        whatsapp.style.cssText = `
        position: fixed;
        background: #25d366;
        width: 70px;
        height: 70px;
        bottom: 30px;
        right: 20px;
        font-size: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        z-index: 999;`
    }
