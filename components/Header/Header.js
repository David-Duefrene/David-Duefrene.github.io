import styles from './Header.sass?inline'

class Header extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: 'open' })

		window.addEventListener('resize', () => this.render())
	}

	connectedCallback() {
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = /*HTML*/`
			<header class="Header">
				<h1 class="Header__title">David Duefrene</h1>
				<a href="https://www.linkedin.com/in/david-duefrene-242858b4/" target="_blank" rel="noopener noreferrer"><img src="./LI-In-Bug.png" alt="LinkedIn logo" style="height:50px;width:60px;"></a>
				<a href="https://github.com/David-Duefrene" target="_blank" rel="noopener noreferrer"><img src="./GitHub_Logo.png" alt="Github logo" style="height:61px;width:150px"></a>
			</header>
			<style>${styles}</style>
		`
	}
}

export default Header
