// TODO
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');

const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");


const validLength = (input, min) => {
    if (input.value.trim().length >= min){
        input.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        return false;
    }
};

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/
    if (re.test(emailField.value.trim())){
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        emailField.parentElement.classList.add('invalid');
        return false;
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
    // Set a Flag to Determine if we want to actually Submit the Form. 
    let fName = false;
    let lName = false;
    let eBool = false;

    // Validate First and Last Name are Three Characters or More
    fname = validLength(firstName, 3);
    lname = validLength(lastName, 3);
    eBool = validateEmail(email);

    // If any item is not valid, preventDefault() on the Submit Listener and log 
    // 'Bad Input' to the Console.
    if (fname == false || lanem == false || eBool == false){
        e.preventDefault();
        console.log('Bad Input');
    }
});