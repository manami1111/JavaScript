const text = document.querySelector('#text')
const answer = document.querySelector('#answer')
console.log(answer)

// キー入力に反応させる
text.addEventListener('keyup', () => {
    console.log('テキスト入力')

    // 入力内容をJSで取得する
    console.log(text.value)

    // // 入力内容とお題が一致するか
    // if(text.value === 'namamugi'){
    //     answer.textContent = 'OK';
    // }else{
    //     answer.textContent = 'NG';
    // }

    // 入力内容がお題と一致するか
    // お題を取得する
    // console.log(document.querySelector('#question').textContent)

    // 一致するか
    // if(question === text.value){
    //     console.log('一致した！')
    //     // 一致したときの表現
    //     alert('一致しました！')
    // }
});