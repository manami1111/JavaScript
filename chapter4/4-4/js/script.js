const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    console.log('ボタンが押されました')
    document.body.classList.toggle('dark-theme')

    // もし（ボタンのテキストが「ダークモードにする」になっているなら
    if(btn.textContent === 'ダークモードにする'){
        // ボタンのテキストを「ライトモードにする」に変更
        btn.textContent = 'ライトモードにする'
    

    // そうでなければ(ボタンのテキストが「ライトモードにする」になっているなら
    } else {
        // ボタンのテキストがを「ダークモードにする」に変更
        btn.textContent = 'ダークモードにする'
    }

})