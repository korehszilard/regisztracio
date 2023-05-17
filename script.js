document.getElementById("regisztracio").addEventListener("click", function(){
    var eredmenyEmail = document.getElementById("eredmenyEmail");
    var eredmenyJelszo = document.getElementById("eredmenyJelszo");

    var email = document.getElementById("email").value;
    var jelszo = document.getElementById("jelszo").value;

    if(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm.test(email)){
        eredmenyEmail.setAttribute("style", "color: green");
        eredmenyEmail.innerHTML = "Az e-mail cim megfelelo!";
    }
    else{
        eredmenyEmail.setAttribute("style", "color: red");
        eredmenyEmail.innerHTML = "Az e-mail cim NEM megfelelo!";
    }

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(jelszo)){
        eredmenyJelszo.setAttribute("style", "color: green");
        eredmenyJelszo.innerHTML = "A jelszo megfelelo!";
    }
    else{
        eredmenyJelszo.setAttribute("style", "color: red");
        eredmenyJelszo.innerHTML = "A jelszo NEM megfelelo!";
    }

}, false);