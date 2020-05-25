
import Theme from './../../types/Theme';
import DefaultTheme from './default-theme';

let GlobalTheme: Theme = DefaultTheme;
const setGlobalTheme = (theme: Theme): void => {
    GlobalTheme = theme;
};
const getGlobalTheme = (): Theme => {
    return GlobalTheme;
};

// Themes
export { DefaultTheme };

// Functions
export { setGlobalTheme, getGlobalTheme };