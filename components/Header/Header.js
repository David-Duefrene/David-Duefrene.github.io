import styles from './Header.sass?inline'

class Header extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: 'open' })
	}

	connectedCallback() {
		this.render()
	}

	render() {
		// Create header element
		const header = document.createElement('header')
		header.classList.add('Header')

		// Create h1 element for the title
		const title = document.createElement('h1')
		title.classList.add('Header__title')
		title.textContent = 'David Duefrene'
		header.appendChild(title)

		// Create LinkedIn link with image
		const linkedInLink = document.createElement('a')
		linkedInLink.href = 'https://www.linkedin.com/in/david-duefrene-242858b4/'
		linkedInLink.target = '_blank'
		linkedInLink.rel = 'noopener noreferrer'

		const linkedInLogo = document.createElement('img')
		linkedInLogo.src = './LI-In-Bug.png'
		linkedInLogo.alt = 'LinkedIn logo'
		linkedInLogo.style.height = '50px'
		linkedInLogo.style.width = '60px'

		linkedInLink.appendChild(linkedInLogo)
		header.appendChild(linkedInLink)

		// Create GitHub link with image
		const githubLink = document.createElement('a')
		githubLink.href = 'https://github.com/David-Duefrene'
		githubLink.target = '_blank'
		githubLink.rel = 'noopener noreferrer'

		const githubLogo = document.createElement('img')
		githubLogo.src = './GitHub_Logo.png'
		githubLogo.alt = 'Github logo'
		githubLogo.style.height = '61px'
		githubLogo.style.width = '150px'

		githubLink.appendChild(githubLogo)
		header.appendChild(githubLink)

		// Clear existing content in shadowRoot
		this.shadowRoot.innerHTML = ''

		// Append the header to the shadowRoot
		this.shadowRoot.appendChild(header)

		// Create a style element and append the styles
		const styleElement = document.createElement('style')
		styleElement.textContent = styles
		this.shadowRoot.appendChild(styleElement)
	}
}

export default Header
