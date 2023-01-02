// Create 16x16 grid as default on page load
const gridBoard = document.getElementById("grid-board")
const bgDefault = "#FFFFFF"
const penDefault = "#000000"
let colorPicker = document.getElementById("pen-color-picker")
let selectedColor = colorPicker.value
let paintToggle = false

colorPicker.addEventListener("input", function() {
    selectedColor = this.value
})

window.onload = drawBoard(16)

document.getElementById("background-color-picker").value = bgDefault

document.getElementById("pen-color-picker").value = penDefault

document.getElementById("clear-btn").addEventListener("click", resetBoard)

gridBoard.addEventListener("mouseover", paint)

gridBoard.addEventListener("contextmenu", rightClick)

function drawBoard(size) {
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridBoard.style.gridAutoRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size ** 2; i++) {
        let cell = document.createElement("div")
        gridBoard.appendChild(cell)
        cell.classList.add("cell")
    }
}

function paint(e) {
    const target = e.target
    if (!paintToggle) {
        if (target.classList.contains("cell")) {
            e.target.style.backgroundColor = selectedColor
        }
    }
}

function rightClick(e) {
    e.preventDefault()
    paintToggle = !paintToggle
    if (paintToggle) {
        document.getElementById("toggle-off").style.color = "#FFFD82"
        document.getElementById("toggle-on").style.color = "#FFFFFF"
    } else {
        document.getElementById("toggle-off").style.color = "#FFFFFF"
        document.getElementById("toggle-on").style.color = "#FFFD82"
    }
    
}

function resetBoard() {
    document.querySelectorAll(".cell").forEach(cell => cell.style.backgroundColor = bgDefault)
    document.getElementById("pen-color-picker").value = penDefault
}