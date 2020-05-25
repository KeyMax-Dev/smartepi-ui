import Theme from './../../types/Theme';
import DefaultTheme from './default-theme';
declare const setGlobalTheme: (theme: Theme) => void;
declare const getGlobalTheme: () => Theme;
export { DefaultTheme };
export { setGlobalTheme, getGlobalTheme };
