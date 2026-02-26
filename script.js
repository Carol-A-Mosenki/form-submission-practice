

function clickSubmit(){
     const email = document.getElementById("eMail").value;
    const password = document.getElementById("passWord").value;

    if(email === ""){
        alert("Please Enter Email!!! ⚽️");
        return false;
    } else if(password === ""){
        alert("Please Enter Password!!! 🐷");
        return false;
    } else {return true};
}
