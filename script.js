// Create 16x16 grid as default on page load
const gridBoard = document.getElementById("grid-board")

let paintToggle = false

function drawBoard(size) {
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridBoard.style.gridAutoRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size ** 2; i++) {
        let cell = document.createElement("div")
        gridBoard.appendChild(cell)
        cell.classList.add("cell")
    }
}

window.onload = drawBoard(16)

// Set default color of background

document.getElementById("background-color-picker").value = "#ffffff"

// Set default color of ink

document.getElementById("pen-color-picker").value = "#000000"

// Change color of div on mouse click/hold

gridBoard.addEventListener("mouseover", paint)

function paint(e) {
    const target = e.target
    if (!paintToggle) {
        if (target.classList.contains("cell")) {
            e.target.style.backgroundColor = "#000000"
        }
    }
}

gridBoard.addEventListener("contextmenu", rightClick)

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

// Add button to select custom color
