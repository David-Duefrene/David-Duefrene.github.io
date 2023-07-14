import styles from './ImageList.sass'

const IMAGE_SOURCE = {
	JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
	TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
	React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
	NextJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
	Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
	Jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
	D3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
	Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
}

class ImageList extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: 'open' })
	}

	static get observedAttributes() {
		return [ 'strings', 'name' ]
	}

	attributeChangedCallback(name) {
		if (name === 'name' || name === 'strings') {
			this.render()
		}
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const name = this.getAttribute('name')
		const strings = this.getAttribute('strings').split(' ')

		this.shadowRoot.innerHTML = ''

		const ul = document.createElement('ul')
		ul.className = 'ImageList'

		strings.forEach((str) => {
			const li = document.createElement('li')
			li.className = 'ImageItem'

			const img = document.createElement('img')

			img.src = IMAGE_SOURCE[str]

			img.alt = `${str} Logo`

			li.appendChild(img)
			li.innerHTML += str
			ul.appendChild(li)
		})

		const style = document.createElement('style')
		style.textContent = styles

		this.shadowRoot.appendChild(style)
		this.shadowRoot.innerHTML += `<h3>${name} List</h3>`

		this.shadowRoot.appendChild(ul)
	}
}

customElements.define('image-list', ImageList)
