// declaring variables to be used
let fName = 'Willem';
let lName = 'Wantenaar';
let sID = 991512290;
let username = 'WANTENAW';


// creating function to be called for header information
let headerText = headFunction();
function headFunction() {
    return `<h2> Assignment #2 </h2> <h3>${fName} ${lName} / ${sID} / ${username} </h3><hr>`;
}