// TODO
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');

const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");


const validLength = (input, min) => {
    if (input.value.trim().length > min){
        input.parentElement.classList.remove("invalid");
    } else {
        input.parentElement.classList.add("invalid");
    }
};

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/
    if (re.test(emailField.value.time())){
        emailField.parentElement.classList.remove("invalid");
    } else {
        emailField.parentElement.classList.add('invalid');
    }
};

const handleSelect = (selectElement) =>{
    const selectedValue = selectElement.value;

    if (selectedValue === "business"){
        employees.parentElement.classList.remove('hidden');
        os.parentElement.classList.add("hidden");
    } else if (selectedValue == 'technical'){
        os.parentElement.classList.remove('hidden');
        employees.parentElement.classList.add("hidden");
    } else{

    }
}

select.addEventListener("change", handleSelect(select));


form.addEventListener("submit", (e) => {


    // Only Prevent DEfault if all are valid or invalid. 
    // VAlid case Statement
    // Invalid Case Statement
    //e.preventDefault()
    
    
    validLength(firstName, 3);
    validLength(lastName, 3);
    //validateEmail(email);
});