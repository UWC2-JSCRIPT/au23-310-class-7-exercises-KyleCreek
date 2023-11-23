// Define Constants
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("text-area");

// Selector Box Choices
const select = document.getElementById("contact-kind");
// Hidden / Visible Elements 
const job = document.getElementById("job-title");
const code = document.getElementById('coding-language');



// Confirm the Name Input is 3 Or More characterSet
const nameLength = (nameInput) => {
	if (nameInput.value.trim().length >= 3) {
		nameInput.parentElement.classList.remove("invalid");
		return true;
	} else{
		nameInput.parentElement.classList.add("invalid");
		console.log("Invalid Name");
		return false;
	}		
};

// Confirm the Email follows RegEx
const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/
    if (re.test(emailField.value.trim())){
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        emailField.parentElement.classList.add('invalid');
		console.log("Invalid Email");
        return false;
    }
};

// Confirm the Message Length
const validateMessage = (messageInput) =>{
	if (messageInput.value.trim().length >= 10){
		messageInput.parentElement.classList.remove('invalid');
		return true;
	} else {
		messageInput.parentElement.classList.add('invalid');
		console.log("Invalid Message Length");
		return false;
	}
}

const handleSelect = (selectElement) => {
	const selectedValue = selectElement.value;
	// Job Opportunity Case Statement
	if (selectedValue === "job-opportunity"){
		job.parentElement.classList.remove('hidden');
		code.parentElement.classList.add('hidden');
	}
	// Talk Code Case Statement
	else if (selectedValue == "talk-code"){
		job.parentElement.classList.add('hidden');
		code.parentElement.classList.remove('hidden');
	}
}

form.addEventListener('submit', (e) =>{
	// Booleans for Verification
	let nameBool = false;
	let emailBool = false;
	let messageBool = false;

	// Validate Input
	nameBool = nameLength(name);
	emailBool = validateEmail(email);
	messageBool = validateMessage(message);

	if (nameBool == false || emailBool == false || messageBool || false){
		e.preventDefault();
	}
});

select.addEventListener('change', (e) =>{
	handleSelect(select);
});