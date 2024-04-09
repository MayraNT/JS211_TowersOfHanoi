let stone = null

const selectRow = (row) => {
  // const currentRow = row.getAttribute("data-row")

  // console.log("Yay, we clicked an item", row)
  // console.log("Here is the stone's id: ", row.id)
  // console.log("Here is the stone's data-size: ", currentRow)


  if (!stone) {
    pickUpStone(row.id)
  } else {
    dropStone(row.id)
  }
  // console.log("select: ", stone)
} 

const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  // console.log(selectedRow.lastChild)

  stone = selectedRow.lastElementChild
  selectedRow.removeChild(selectedRow.lastElementChild);
}

const dropStone = (rowID) => {
  const lastElement = document.getElementById(rowID).lastElementChild 

  if (!lastElement) {
    document.getElementById(rowID).appendChild(stone)
    stone = null
  } else if (lastElement.getAttribute("data-size") > stone.getAttribute("data-size")) {
    document.getElementById(rowID).appendChild(stone)
    stone = null
  } else {
    window.alert("pick a new row")
  }

}



