export const level3 = {
  html: `
    <h3>Level 3</h3>
    <p>do things to get to level 2</p>
    <button>the left one</button>
    <button>the right one</button>
    <button>the middle one</button>
    <button>the far right one</button>
    <button>the far left one</button>
  `,
  script: (ctx) => {
    console.log('level 3 loaded')
    const buttons = document.querySelectorAll('button')
    const randomIndex = Math.floor(Math.random() * buttons.length)
    const btnWinner = buttons[randomIndex]
    let loserClicks = 0

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn === btnWinner) {
          alert('winner!')
          if (ctx && typeof ctx.setLevel === 'function' && typeof ctx.currentLevel === 'number') {
            ctx.setLevel(ctx.currentLevel + 1)
          }
        } else {
          loserClicks++
          alert('wrong!')
          if (loserClicks >= 2) {
            alert('too many wrong guesses — restart!')
            if (ctx && typeof ctx.setLevel === 'function') {
              ctx.setLevel(0)
            }
          }
        }
      })
    })
  }
}
