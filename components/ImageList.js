const IMAGE_SOURCE = {
	JavaScript: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg`,
	TypeScript: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg`,
	React: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
	Python: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`,
	Git: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg`,
}

class ImageList extends HTMLElement {
	constructor() {
        super()

        this.attachShadow({ mode: `open` })
	}

	static get observedAttributes() {
		return [`strings`, `name`]
	}

	attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name' || name === 'strings') {
          this.render()
        }
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const name = this.getAttribute(`name`)
		const strings = this.getAttribute(`strings`).split(` `)

		this.shadowRoot.innerHTML = ``

        const ul = document.createElement(`ul`)
		ul.className = `${name}-list`

        strings.forEach((str) => {
			const li = document.createElement(`li`)
			li.className = `${name}-list__item`
			li.style = `display: inline-block; font-size: 20px;`

			const img = document.createElement(`img`)

			img.src = IMAGE_SOURCE[str]

			img.alt = `${str} Logo`
			img.style = `width: 4vw; height: 4vw;`

			li.appendChild(img)
			li.innerHTML += str
			ul.appendChild(li)
        })

		const style = document.createElement(`style`)
		style.textContent = `
			.${name}-list {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
				grid-column-gap: 10px;
				grid-row-gap: 10px;
				width: 10vw;
			}

			@media (max-width: 800px) {
				.${name}-list {
					grid-template-columns: repeat(1, 1fr);
					grid-template-rows: repeat(4, 1fr);
					width: 100%;
				}
			}
		`

		this.shadowRoot.appendChild(style)
        this.shadowRoot.appendChild(ul)
	}
}

customElements.define(`image-list`, ImageList)
