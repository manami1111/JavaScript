const heading = document.querySelector('#heading');

// アニメーションの内容はオブジェクトで書く
const keyframes = {
    opacity: [0, 1],
    // translate: ['0 50px', 0],
    // rotate: ['x 360deg', 0]
    color: ['#f66','#fc2','#0c6','#0bd'],
    fontSize: ['10px','40px']
};

const option = {
    duration: 2000,
    // easing: 'ease',
    direction: 'alternate',
    iterations: Infinity
};

heading.animate(keyframes,option);

// const h2anime = document.querySelector('#h2anime')

// const h2keyframes = {
//     opacitiy: [0, 1]
// }