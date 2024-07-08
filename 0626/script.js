const answer = document.querySelector('#answer')

console.log(answer)

const change = () =>{
    answer.style.backgroundColor = 'blue'
    answer.textContent = '正解'
    answer.style.color = 'white'
}

answer.addEventListener('click',change)