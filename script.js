
document.getElementById('btn').addEventListener('click', displayDate);
document.getElementById('education').alert('click', showEducation);

function displayDate() {
	let email = document.getElementById('email').value;
	let pwd = document.getElementById('pwd').value;
	if (email === "mamta" || pwd === 123) {
		alert('Loged on');
	}
	else {
		alert('enter right details');
	}

   }
function showEducation() {
	let education = document.getElementsByTagName('h1').value;
	
}

