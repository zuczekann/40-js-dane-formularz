

// let nazwa = document.getElementById("nazwa-id");
// console.log(nazwa.value);

let button = document.querySelector("button");

button.onclick = function() {
    let pNameVal = document.getElementById("frmname");
    let pNameSet = document.getElementById("name");
        pNameSet.textContent = pNameVal.value;


    document.getElementById("surname").textContent = document.getElementById("frmsurname").value;

    document.getElementById("phone").textContent = document.getElementById("frmphone").value;
        
}      



