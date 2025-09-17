


const level1 = `
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

const level0 = `
    <h3>Level 0</h3>
    <p>do things to get to level 1</p>
    <button onclick="document.getElementById('app').innerHTML = level1">the right one</button>
    <button>the wrong one</button>
`

document.getElementById('app').innerHTML = level0