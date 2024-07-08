const button = document.querySelector('#button')

console.log(button)

const colorBg = () => {
    // document.querySelector('#button').style.backgroundColor = 'red'

    button.style.backgroundColor = 'red'
    button.style.height = '100px'
    button.style.fontSize = '50px'
}

button.addEventListener('click',colorBg)

const main = document.querySelector('#main')

console.log(main)

const colorchange = () => {
    main.style.borderRadius = '45px 45px 45px 45px'
    main.style.backgroundColor = 'red'
}

main.addEventListener('click',colorchange)

