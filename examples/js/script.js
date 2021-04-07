const addButton = document.querySelector("#submit");
const nameInput = document.querySelector("#name") ;
const emailInput = document.querySelector("#email");
const mobileInput = document.querySelector("#mobile");
const error=document.querySelector("#error");
const summary=document.querySelector("#summaryTable");

var addressBook= [];
addButton.addEventListener('click', addToPhone);

function jsonStructure(nameInput,emailInput,mobileInput){
    this.nameInput=nameInput;
    this.emailInput=emailInput;
    this.mobileInput=mobileInput;
}

function addToPhone(){
    var isNull= nameInput.value!='' && emailInput.value!='' && mobileInput.value!='';
    var mobilelength= validatemobile(mobileInput.value);


    if(isNull && mobilelength){
        var obj= new jsonStructure(nameInput.value,emailInput.value,mobileInput.value);
        addressBook.push(obj);
        localStorage['addbook']=JSON.stringify(addressBook);
        alert("Successful");
        showAddressBook();
        nameInput.value='';
        emailInput.value='';
        mobileInput.value='';
    }
    else {
        error.style.display = "block";
    }
}

function validatemobile(mobileInput){
    if(isNaN(mobileInput)||mobileInput.length!=10)
    return false;
    else
    return true;

}
function showAddressBook(){
    if(localStorage['addbook'] === undefined){
        localStorage['addbook'] = '';
    } else {
        addressBook = JSON.parse(localStorage['addbook']);
       // summary.innerHTML = '';
        for(var n in addressBook){
            var str = '<tr>';
                str += '<td>' + addressBook[n].nameInput + '</td>';
                str += '<td>' + addressBook[n].mobileInput + '</td>';
                str += '<td>' + addressBook[n].emailInput + '</td>';
                str += '</tr>';
                summary.innerHTML += str;
        }
    }
}