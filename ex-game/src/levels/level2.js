export const level2 = {
  html: `
    <h3>Level 2</h3>
    <button>the far right one</button>
    <button>the left one</button>
    <button>the right one</button>
    <button>the far left one</button>
  `,
  script: (ctx) => {
    console.log('level 2 loaded')
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
