import ThemeController from 'themecontroller'

const myThemes = {
	'light': {
		'text-color': 'black',
		'background-color': '#e3e3e3',
		'off-background-color': '#f5f5f5',
		'accent-color': '#0eebc659',
		'highlight-color': '#6b0505',
		'glass-color': 'hsla(215.8, 87.3%, 33.9%, 0.05)',
	},
	'dark': {
		'text-color': 'white',
		'background-color': '#202020',
		'off-background-color': '#2f3136',
		'accent-color': '#0eebc659',
		'highlight-color': '#f1c40f',
		'glass-color': 'hsla(215.8, 87.3%, 33.9%, 0.05)',
	},
}

window.ThemeController = new ThemeController(myThemes)