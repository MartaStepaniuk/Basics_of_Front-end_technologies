function createTable() {
  const body = document.querySelector('body');
  const table = document.createElement('table');
  for (let i = 0; i < 6; i++) {
    const rowElement = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
      const cellElement = document.createElement('td');
      const cellValue = j + 1 + i * 6;
      cellElement.innerHTML = cellValue;
      cellElement.id = cellValue;
      rowElement.appendChild(cellElement);
    }
    table.appendChild(rowElement);
  }
  body.appendChild(table);
}
createTable();
const myvariant = 6;
const myelement = document.getElementById(myvariant);
function changeColorRandom(myelement) {
  myelement.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}
function click(myelement) {
  const color = document.getElementById('colors');
  myelement.style.backgroundColor = color.value;
}
function ondblclick() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const currentElement = document.getElementById(j + 1 + i * 6);
      currentElement.style.background = document.getElementById('colors').value;
    }
  }
}
myelement.onmouseover = () => {
  changeColorRandom(myelement);
}
myelement.onmouseup = () => {
  click(myelement);
}
myelement.ondblclick = () => {
  ondblclick();
}