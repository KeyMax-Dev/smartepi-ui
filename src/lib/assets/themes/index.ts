import Theme from './../../types/Theme';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';

let GlobalTheme: Theme = LightTheme;
const setGlobalTheme = (theme: Theme): void => {
	GlobalTheme = theme;
	if (document) {
		document.getElementsByTagName('body')[0].style.backgroundColor =
			GlobalTheme.colors.primary.contrast;
		document.getElementsByTagName('body')[0].style.color =
			GlobalTheme.colors.primary.principal;
	}
};
const getGlobalTheme = (): Theme => {
	return GlobalTheme;
};

// Themes
export { LightTheme, DarkTheme };

// Functions
export { setGlobalTheme, getGlobalTheme };
