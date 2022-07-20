const switchContent = (target) => {
	document.querySelector('.Title.Nav-button.Active').classList.remove('Active');
	target.classList.add('Active')
}

const scrollObserverCallback = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const target = entry.target;
			switchContent(document.querySelector(`#${target.id.match(/^.*?(?=-)/)}`));
		}
	});
};


const observer = new IntersectionObserver(scrollObserverCallback, {
	root: document.querySelector('#app'),
	rootMargin: '0px',
	threshold: 1.0
  });

document.querySelectorAll('.Title').forEach(button => {
	observer.observe(document.querySelector(`#${button.id}-content`));
	button.addEventListener('click', () => {
		document.querySelector(`#${button.id}-content`).scrollIntoView(false);
	});
});
