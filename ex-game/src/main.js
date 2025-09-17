import { level0 } from "./levels/level0.js"
import { level1 } from "./levels/level1.js"

const levels = {
  level1: 'Beginner',
  level2: `
    <h3>Level 0</h3> 
    <p>do things to get to level 1</p>
    <p id='level'>the right one</p>
    <button>the wrong one</button>
`,
  level3: `
    <h3>Level 1</h3>
    <p>do things to get to level 2</p>
    <button>the wrong one</button>
    <button>the wrong one</button>
    <button>the wrong one</button>
    <button>the wrong one</button>
    <button>the wrong one</button>
    <button>the right one</button>
    <button>the wrong one</button>
    <button>the wrong one</button>
`
};



//document.getElementById('app').innerHTML = level0

export function setupGame(element) {
  let currentLevel = 0
  const setLevel = (level) => {
    currentLevel = level
    element.innerHTML = `level is ${level}` + level0 + `${levels['level' + level]}`
  }
  element.addEventListener('click', () => setLevel(currentLevel + 1))
  setLevel(0)
}


setupGame(document.getElementById('app'))