const switchContent = (target) => {
	document.querySelector('.Jump.Nav-button.Active').classList.remove('Active')
	target.classList.add('Active')
}

const scrollObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			let target = entry.target
			if (target.className === 'Card Project') target = target.parentElement
			switchContent(document.querySelector(`#${target.id.match(/^.*?(?=-)/)}`))
		}
	})
}

const observer = new IntersectionObserver(scrollObserverCallback, {
	root: document.querySelector('#app'),
	rootMargin: '0px',
	threshold: 1.0,
})

document.querySelectorAll('.Jump').forEach((button) => {
	let proj = button.id === 'Proj'
	if (button.id !== 'Proj') observer.observe(document.querySelector(`#${button.id}-Content`))
	button.addEventListener('click', () => {
		proj ?
			document.querySelector(`#ProjStart`).scrollIntoView(false) :
			document.querySelector(`#${button.id}-Content`).scrollIntoView(false)
	})
})

document.querySelectorAll('.Project').forEach((project) => {
	observer.observe(project)
})
