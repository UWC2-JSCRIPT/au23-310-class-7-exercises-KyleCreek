// Define Constants
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("contact-kind");

// Need to Make the Following Hidden Fields
// const job = document.getElementById("job-opprotunity");
// const talk = document.getElementById("talk-code");


// Confirm the Name Input is 3 Or More characterSet
const nameLength = (nameInput) => {
	if (input.value.trim().length >= 3) {
		input.parentElement.classList.remove("invalid");
	} else{
		nameInput.parentElement.classList.add("invalid");
	}		
};
