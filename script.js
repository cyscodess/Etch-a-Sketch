// Create 16x16 grid as default on page load
const gridBoard = document.getElementById("grid-board")
const bgDefault = "#FFFFFF"
const penDefault = "#000000"
let colorPicker = document.getElementById("pen-color-picker")
let bgPicker = document.getElementById("background-color-picker")
let selectedColor = colorPicker.value
let selectedBg = bgPicker.value
let paintToggle = false
let gridSize = document.getElementById("grid-size")

window.onload = drawBoard(gridSize.value)

displaySize(gridSize.value)

document.getElementById("clear-btn").addEventListener("click", resetBoard)

bgPicker.value = bgDefault
colorPicker.value = penDefault

gridBoard.addEventListener("mouseover", paint)

document.addEventListener("contextmenu", rightClick)

colorPicker.addEventListener("input", function() {
    selectedColor = this.value
})

bgPicker.addEventListener("input", function() {
    selectedBg = this.value
    document.querySelectorAll(".cell").forEach(cell => cell.style.backgroundColor = selectedBg)
})

gridSize.addEventListener("input", function() {
    let size = this.value
    drawBoard(size)
    resetBoard()
})

function displaySize(value) {
    document.getElementById("display-size").innerText = value
}

function drawBoard(size) {
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`

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
    drawBoard(gridSize)
    document.getElementById("pen-color-picker").value = penDefault
    document.getElementById("background-color-picker").value = bgDefault
}