const el = document.getElementById('btn1')

el.addEventListener('mouseover', () => {
    el.innerText += '!'
})

el.addEventListener('click', () => {
    alert('hi')
})