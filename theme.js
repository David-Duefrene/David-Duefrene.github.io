import ThemeController from 'themecontroller';

const myThemes = {
	'light': {
		'main-color': 'black',
		'off-main-color': '#4d5155',
		'background-color': 'white',
	},
	'dark': {
		'main-color': 'white',
		'off-main-color': '#c2d0df',
		'background-color': 'black',
	},
}

// const MyThemeController = ThemeController(theme = 'OceanBlue', myThemes)
window.ThemeController = new ThemeController(myThemes)
