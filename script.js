document.getElementById('submit').addEventListener('click', checkPassword);
let message = document.getElementById('confirmation');

function checkPassword() {
	let password = document.getElementById('password').value;
	let passwordConfirmation = document.getElementById('confirm-password').value;
	let passwordLabel = document.getElementById('password-label');
	if(password === passwordConfirmation) {
		message.textContent = 'Account creation successful';
		message.style.color = 'green';
	} else {
		message.textContent = 'Passwords do not match';
		passwordLabel.style.color = 'red';
		message.style.color = 'red';
	}
}
