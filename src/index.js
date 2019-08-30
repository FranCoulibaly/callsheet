import style from "./_scss/main.scss";
import 'bootstrap';
import * as jsPDF from 'jspdf';
import axios from 'axios';

var formData = new FormData();
var doc = new jsPDF()
function pdfPrint(){
window.print()
}

let submit = document.getElementById('submit-btn');
let allNames = document.getElementsByName('crewName');
let allTitles = document.getElementsByName('crewTitle');
let allNumbers = document.getElementsByName('crewNumber');
let serialNumber = document.getElementsByName('serialNumber').value;
const g_crewList = [];
let g_crewNum = 1;
// console.log(allNames);
// axios.post('/callsheet', {
//   serialNumber: serialNumber,
//   crewTitles: allTitles,
//   crewNames: allNames,
//   crewNumbers: allNumbers
// })
// .then(response => {
// 	console.log(response)
// })
// .catch(error => {
//     console.log(error.response)
// });

function CrewItem(text){
  this.text = text;
  this.element = null;
  this.div = null;
}

CrewItem.prototype.display = function(){
  let container = document.getElementById('crew-container');
  let div =  document.createElement('div');
  div.setAttribute('class', 'col-12');
  container.appendChild(div);

  let crewName = document.createElement('input');
  crewName.setAttribute('type', 'text');
  crewName.setAttribute('name', 'crewName' + g_crewNum);
  crewName.setAttribute('placeholder', 'Crew/Talent Name');
  div.appendChild(crewName);

  let crewTitle = document.createElement('input');
  crewTitle.setAttribute('type', 'text');
  crewTitle.setAttribute('name', 'crewTitle' + g_crewNum);
  crewTitle.setAttribute('placeholder', 'Crew/Talent Title');
  div.appendChild(crewTitle);

  let crewNumber = document.createElement('input');
  crewNumber.setAttribute('type', 'text');
  crewNumber.setAttribute('name', 'crewNumber' + g_crewNum);
  crewNumber.setAttribute('placeholder', 'email/phone');
  div.appendChild(crewNumber);

  // let buttonRemove = document.createElement('input');
  // buttonRemove.setAttribute('class', 'removeCrew');
  // buttonRemove.setAttribute('value', '-');
  // buttonRemove.setAttribute('type', 'button');
  // div.appendChild(buttonRemove);

  // buttonRemove.addEventListener("click", this.remove.bind(this));
  // this.element = container;
  // this.div = div;

}

// CrewItem.prototype.remove = function(event){
// this.element.parentNode.removeChild(this.div);
//   g_crewNum--;
// }

function addNewItem(text){
  g_crewNum++;

  if (g_crewNum < 11){
    let	newCrew = new CrewItem(text);
  	newCrew.display();
    // console.log(allNames);
  }

}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("addCrew").addEventListener("click", addNewItem);
  document.getElementById('printbtn').addEventListener("click", pdfPrint);

});
