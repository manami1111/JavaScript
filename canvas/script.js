// function draw() {
//     // キャンバス要素を取得
//     const canvas = document.querySelector("#tutorial");

//     // キャンバスに対応するか確認
//     if (canvas.getContext) {
//         // コンテキスト(データの種類:2dか3dなど)を指定
//         const ctx = canvas.getContext("2d");

//         // ctx.fillStyle = "rgb(200 0 0)";
//         // ctx.fillRect(10, 10, 50, 50);

//         // ctx.fillStyle = "rgp(0 0 200 / 50%)";
//         // ctx.fillRect(30, 30, 50, 50);

//         // ctx.fillRect(25, 25, 100, 100);
//         // ctx.clearRect(45, 45, 60, 60);
//         // ctx.strokeRect(50, 50, 50, 50);

//         // ctx.beginPath();
//         // ctx.moveTo(75, 50);
//         // ctx.lineTo(100, 75);
//         // ctx.lineTo(100, 25);
//         // ctx.fill();

//         // ctx.beginPath();
//         // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
//         // ctx.moveTo(110, 75);
//         // ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (時計回り)
//         // ctx.moveTo(65, 65);
//         // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左目
//         // ctx.moveTo(95, 65);
//         // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右目
//         // ctx.stroke();

//     //     // 塗りつぶした三角形
//     // ctx.beginPath();
//     // ctx.moveTo(25, 25);
//     // ctx.lineTo(105, 25);
//     // ctx.lineTo(25, 105);
//     // ctx.fill();

//     // // 輪郭の三角形
//     // ctx.beginPath();
//     // ctx.moveTo(125, 125);
//     // ctx.lineTo(125, 45);
//     // ctx.lineTo(45, 125);
//     // ctx.closePath();
//     // ctx.stroke();

// //     for (let i = 0; i < 6; i++) {
// //         for (let j = 0; j < 6; j++) {
// //           ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
// //             255 - 42.5 * j,
// //           )} 0)`;
// //           ctx.fillRect(j * 25, i * 25, 25, 25);
// //         }
// //       }
//     }
// }


// // 定義した関数を実行する
// draw()

const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

let raf;

const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: "blue",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    // ボールの加速
    ball.vy *= 0.99;
    ball.vy += 0.55;

    if (
        ball.y + ball.vy > canvas.height - ball.radius ||
        ball.y + ball.vy < ball.radius
    ) {
        ball.vy = -ball.vy;
    }
    if (
        ball.x + ball.vx > canvas.width - ball.radius ||
        ball.x + ball.vx < ball.radius
    ) {
        ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
    window.cancelAnimationFrame(raf);
});

ball.draw();