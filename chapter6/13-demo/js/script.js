// ①監視ロボットに、してほしい内容
// 監視対象が範囲内に現れたら実行する内容
const showKirin = (entries) => {
  // 設定データの配列
  console.log(entries)
  // 配列の０番に入っているオブジェクト
  console.log(entries[0])
  // オブジェクトが持つtarget要素
  console.log(entries[0].target)

const keyframes = {
  opacity: [0, 1],
  translate: ['200px 0', 0],
  rotate: ['10deg', 0]
};

entries[0].target.animate(keyframes,600)
}

// ②新しい名前を付けて監視ロボットを導入する
// 監視ロボットを設定

// ③監視ロボットに①で決めた動作内容を指示する
// 空の監視ロボットに実行内容showKirinを与えた
const kirinObserver = new IntersectionObserver(showKirin);

// ④監視ロボットに監視対象を教えて実行する
kirinObserver.observe(document.querySelector('#kirin'))