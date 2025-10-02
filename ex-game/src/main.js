import { level0 } from "./levels/level0.js"
import { level1 } from "./levels/level1.js"
import { level2 } from "./levels/level2.js"

const levels = {
  level0: level0,
  level1: level1,
  level2: level2,
  level3: level3
};


export function setupGame(element) {

  let currentLevel = 0
  const setLevel = (level) => {
    currentLevel = level
    element.innerHTML = `level is ${level}` + `${levels['level' + level].html}`
    const script = levels['level' + level].script
    if (typeof script === 'function') {
    // pass a small context so levels can call back into this module
      script({ setLevel, currentLevel, element })
    }
  }
  
  setLevel(0)
}

setupGame(document.getElementById('app'))