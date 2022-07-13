const switchContent = (event) => {
	const target = event.target;
	document.querySelector('.Nav-button.Active').classList.remove('Active');
	target.classList.add('Active')
	document.querySelector('.Content-box.Active').classList.remove('Active');
	document.querySelector(`#${target.id}-content`).classList.add('Active');
}

document.querySelectorAll('.Nav-button').forEach(button => {
	button.addEventListener('click', switchContent);
});
