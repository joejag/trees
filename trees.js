const NUMBER_OF_TREES = 20

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const hideTrees = () => {
    for (let i = 0; i < NUMBER_OF_TREES; i++) {
        document.getElementById(`tree-${i}`).classList.add('hidden')
    }
}

const randomTree = () => {
    const randomTreeNumber = Math.floor(Math.random() * NUMBER_OF_TREES)
    return document.getElementById(`tree-${randomTreeNumber}`)
}

let mode = 'ask'
let thisTreeIsA = ''

document.onkeydown = () => {
    if (mode === 'ask') {
        mode = 'told'
        document.getElementById('question').classList.add('answer')
        document.getElementById('question').textContent = thisTreeIsA
    } else {
        mode = 'ask'
        hideTrees()
        const tree = randomTree()
        tree.classList.remove('hidden')
        thisTreeIsA = tree.getAttribute('data-name')
        const answers = shuffleArray([thisTreeIsA, randomTree().getAttribute('data-name')])
        document.getElementById('question').classList.remove('answer')
        document.getElementById('question').textContent = answers.join(' or ') + '?'
    }
}

newTree()