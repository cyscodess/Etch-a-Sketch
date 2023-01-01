// Create 16x16 grid as default on page load
const gridBoard = document.getElementById("grid-board")

function drawBoard(size) {
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridBoard.style.gridAutoRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size ** 2; i++) {
        let cell = document.createElement("div")
        gridBoard.appendChild(cell)
    }
}

window.onload(drawBoard(16))

// Set default color of background

document.getElementById("background-color-picker").value = "#ffffff"

// Set default color of ink

document.getElementById("pen-color-picker").value = "#000000"

// Change color of div on mouse click/hold



// Add button to select custom color

