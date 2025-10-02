export const level2 = {

    html:`
    <h3>Level 3</h3>
    <p>do things to get to level 3</p>
    <button>the left one</button>
    <button>the right one</button>
    <button>the middle one</button>
    <button id="winner">the right one</button>
    <button>the wrong one</button>
   `,
   script: (ctx) => {
        console.log('level 3 loaded')
        document.getElementById('winner').addEventListener('click', () => {
            alert('winner!')
            if (ctx && typeof ctx.setLevel === 'function' && typeof ctx.currentLevel === 'number') {
                ctx.setLevel(ctx.currentLevel + 1)
            }
        })
    }   

} 