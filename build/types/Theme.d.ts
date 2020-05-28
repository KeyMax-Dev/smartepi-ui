interface Color {
    principal: string;
    contrast: string;
}
interface BoxShadow {
    active: string;
    normal: string;
}
interface HeadingFont {
    fontWeight?: string | number;
    fontSize?: string;
    fontFamily?: string;
    textAlign?: string;
    lineHeight?: string;
}
interface Transitions {
    avarage: string;
    fast: string;
    slow: string;
}
declare type Theme = {
    colors: {
        [key: string]: Color;
    };
    borderRadius: string;
    boxShadow: BoxShadow;
    font: {
        [key: string]: HeadingFont;
    };
    transitions: Transitions;
    defaultIconSize: string;
};
export default Theme;
