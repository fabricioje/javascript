/*var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputfile");
var admin = document.querySelector("#exampleInputAdmin");*/




var fields = document.querySelectorAll("#form-user-create [name]");
var user ={};

fields.forEach(function(field, index){

    if (field.name == "gender") {

        if (field.checked) {
            user[field.name] = field.value;
        }
        
    }else{
        user[field.name] = field.value;
    }
});

console.log(user);

document.getElementById("form-user-create").addEventListener("submit", function (event) {
    
    event.preventDefault();

    console.log("OK");
})