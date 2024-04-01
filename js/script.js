let cities =['Faisalabad','Lahore','Karachi','Islamabad','Burewala', 'Sheikpura','Kashmir'];

for(let i = 0; i < cities.length; i++){
    let num = i + 1;
    document.getElementById("OrignalString").innerHTML += num + ') ' + cities[i] + '&emsp;';
}


// Simpler Alert

function simplealert(){
    alert("I am an Alert")
}

function printMyName(){
    let myName = document.getElementById("InputText").value

    if(myName===""){
        alert("Please Type Your Name In Input")
        return;
    }

    document.getElementById("Output").innerHTML=myName
}


// Print All Cities

function printAllCities(){

    document.getElementById("Output").innerHTML=""

    for(let i = 0; i < cities.length; i++){
        let num = i + 1;
        document.getElementById("Output").innerHTML += num + ') ' + cities[i] + '<br>';
    }
    
}

// Add your city name

function addCity(){
    let city= document.getElementById("InputText").value;

    if(!city){
        alert("Please enter your city name");
        return;
    }

    cities.push(city);
    document.getElementById("Output").innerHTML = '<span style="color: red;">" ' + city + ' " </span> has been successfully added in the list.';
}

// Generate Table
function generateTable(){
    let tableNumber = prompt('Enter the table number:')

    let lengthOfTable = prompt('Enter the length of table:')

    document.getElementById("Output").innerHTML = ""

    for(let i = 1; i <= lengthOfTable; i++){
        document.getElementById("Output").innerHTML += tableNumber + "*" + i + "=" + tableNumber*i + "<br />"
    }
}


// Clear Input
function clearInput(){
    document.getElementById("InputText").value=""
}

// Clear Output
function clearOutput(){
    document.getElementById("Output").innerHTML=""
}