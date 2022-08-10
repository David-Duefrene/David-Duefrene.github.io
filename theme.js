import ThemeController from 'themecontroller'

const myThemes = {
	'light': {
		'text-color': '#444444',
		'background-color': '#e3e3e3',
		'off-background-color': '#dbdada',
		'accent-color': '#0eebc659',
		'highlight-color': '#6b0505',
		'glass-color': 'hsla(215.8, 87.3%, 33.9%, 0.05)',
	},
	'dark': {
		'text-color': '#e3e3e3',
		'background-color': '#444444',
		'off-background-color': '#575757',
		'accent-color': '#0eebc659',
		'highlight-color': '#f1c40f',
		// 'glass-color': 'hsla(215.8, 87.3%, 33.9%, 0.05)',
		'glass-color': '#44444424',
	},
}

window.ThemeController = new ThemeController(myThemes)
