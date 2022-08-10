const switchContent = (target) => {
	document.querySelector('.Title.Nav-button.Active').classList.remove('Active')
	target.classList.add('Active')
}

const scrollObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const target = entry.target
			switchContent(document.querySelector(`#${target.id.match(/^.*?(?=-)/)}`))
		}
	})
}

const observer = new IntersectionObserver(scrollObserverCallback, {
	root: document.querySelector('#app'),
	rootMargin: '0px',
	threshold: 1.0,
})

document.querySelectorAll('.Title').forEach((button) => {
	if (button.id === 'ThemeSwitcher') {
		// Capitalize first letter of string
		const capitalize = (string) => {
			return string.charAt(0).toUpperCase() + string.slice(1)
		}
		button.addEventListener('click', () => {
			window.ThemeController.theme = window.ThemeController.theme === 'light' ? 'dark' : 'light'
			button.innerHTML = capitalize(window.ThemeController.theme)
		})
		button.innerHTML = capitalize(window.ThemeController.theme)
		return
	}
	observer.observe(document.querySelector(`#${button.id}-content`))
	button.addEventListener('click', () => {
		document.querySelector(`#${button.id}-content`).scrollIntoView(false)
	})
})
