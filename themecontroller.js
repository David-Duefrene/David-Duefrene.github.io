class r {
	constructor(e, t = () => {
	}) {
	  this.Themes = e, this.updateThemeCallback = t, window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? this.CurrentTheme = "dark" : this.CurrentTheme = "light", Object.keys(this.Themes[this.CurrentTheme]).forEach((s) => {
		document.documentElement.style.setProperty(`--${s}`, this.Themes[this.CurrentTheme][s]);
	  });
	}
	doesThemeExist(e) {
	  return this.themeList.includes(e);
	}
	addNewTheme(e) {
	  const t = Object.keys(e)[0];
	  if (this.doesThemeExist(t))
		throw new Error(`Theme ${t} already exists`);
	  this.Themes = { ...e, ...this.Themes };
	}
	deleteTheme(e) {
	  if (!this.doesThemeExist(e))
		throw new Error(`Theme ${e} does not exist`);
	  delete this.Themes[e];
	}
	updateTheme(e) {
	  const t = Object.keys(e)[0];
	  if (!this.doesThemeExist(t))
		throw new Error(`Theme ${t} does not exist`);
	  this.Themes[t] = e[t], Object.keys(this.Themes[t]).forEach((s) => {
		document.documentElement.style.setProperty(`--${s}`, this.Themes[t][s]);
	  }), this.theme = t;
	}
	set theme(e) {
	  if (!this.doesThemeExist(e))
		throw new Error(`Theme ${e} does not exist`);
	  Object.keys(this.Themes[e]).forEach((s) => {
		document.documentElement.style.setProperty(`--${s}`, this.Themes[e][s]);
	  }), this.CurrentTheme = e, this.updateThemeCallback(e);
	  const t = new CustomEvent("themeChange", {
		detail: { theme: e }
	  });
	  document.dispatchEvent(t);
	}
	get theme() {
	  return this.CurrentTheme;
	}
	get themeList() {
	  return Object.keys(this.Themes);
	}
  }
  export {
	r as default
  };
