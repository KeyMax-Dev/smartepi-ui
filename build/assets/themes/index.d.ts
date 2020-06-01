import Theme from './../../types/Theme';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';
declare const setGlobalTheme: (theme: Theme) => void;
declare const getGlobalTheme: () => Theme;
export { LightTheme, DarkTheme };
export { setGlobalTheme, getGlobalTheme };
