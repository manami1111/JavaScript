// チェックボックスをクリックしたら、送信ボタンを利用可能にする(disavledを外す)

// 使うタグを取得する
const isAgreed = document.querySelector('#check');

const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
    console.log(isAgreed.checked)

//     // もしチェックボックスにチェックが入っているなら、
//     if (isAgreed.checked){
//     // 送信するボタンの無効化を解除する
//     btn.disabled = false;
// } else {
//     btn.disabled = true;
// }

// ! 否定を表す
btn.disabled = !isAgreed.checked
})