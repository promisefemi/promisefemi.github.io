import anime from 'animejs'
// import "./mo/mo"


export const animJs = (dom, options) => {
    dom = document.querySelectorAll(dom);
    anime({
        targets: dom,
        ...options,
        begin: function () {
            "Animation Began";
        }
    })
}


document.addEventListener('DOMContentLoaded', function () {
    // const redCirc = new mojs.Shape({
    //     isShowStart: true,
    // })
})