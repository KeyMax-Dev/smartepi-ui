'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));
var framerMotion = require('framer-motion');
var styled = _interopDefault(require('styled-components'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/extra-files/fonts/Quicksand_300.ttf\") format(\"truetype\");\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/extra-files/fonts/Quicksand_400.ttf\") format(\"truetype\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/extra-files/fonts/Quicksand_500.ttf\") format(\"truetype\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/extra-files/fonts/Quicksand_700.ttf\") format(\"truetype\");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Quicksand', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif';\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-color: #fff;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n\r\n*::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n  background-color: #00000033;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.ui-grid-horizontal {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n  width: 100%;\r\n}\r\n\r\n.ui-grid-vertical {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}";
styleInject(css_248z);

const LightTheme = {
    colors: {
        primary: { principal: '#000000', contrast: '#FFFFFF' },
        secondary: { principal: '#BB86FC', contrast: '#6200EE' },
        danger: { principal: '#D40000', contrast: '#FFFFFF' },
        success: { principal: '#00D415', contrast: '#000000' }
    },
    defaultIconSize: '40px',
    transitions: {
        avarage: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
        slow: '0.7s ease-in-out'
    },
    borderRadius: '10px',
    boxShadow: {
        active: '0 1px 5px rgba(0,0,0,0.3)',
        normal: '0 2px 10px rgba(0,0,0,0.3)'
    },
    font: {
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        input: {
            fontSize: '1.2rem',
            fontWeight: 400,
            textAlign: 'left',
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Quicksand', 'Segoe UI', 'Roboto'`
        },
        p1: {
            fontSize: '1.2rem',
            fontWeight: 400,
            lineHeight: '1.2rem',
            textAlign: 'left'
        }
    }
};

const DarkTheme = {
    colors: {
        primary: { principal: '#424242', contrast: '#121212' },
        secondary: { principal: '#6200EE', contrast: '#BB86FC' },
        danger: { principal: '#D40000', contrast: '#FFFFFF' },
        success: { principal: '#00D415', contrast: '#FFFFFF' }
    },
    defaultIconSize: '40px',
    transitions: {
        avarage: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
        slow: '0.7s ease-in-out'
    },
    borderRadius: '10px',
    boxShadow: {
        active: '0 1px 5px rgba(0,0,0,0.3)',
        normal: '0 2px 10px rgba(0,0,0,0.3)'
    },
    font: {
        h1: {
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 300,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        input: {
            fontSize: '1.2rem',
            fontWeight: 300,
            textAlign: 'left',
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Quicksand', 'Segoe UI', 'Roboto'`
        },
        p1: {
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: '1.2rem',
            textAlign: 'left'
        }
    }
};

let GlobalTheme = LightTheme;
const setGlobalTheme = (theme) => {
    GlobalTheme = theme;
    if (document) {
        document.getElementsByTagName('body')[0].style.backgroundColor = GlobalTheme.colors.primary.contrast;
        document.getElementsByTagName('body')[0].style.color = GlobalTheme.colors.primary.principal;
    }
};
const getGlobalTheme = () => {
    return GlobalTheme;
};

class Required {
    constructor() {
        this.errorName = 'Required';
    }
    validate(text) {
        return text.length > 0;
    }
}
class MinLength {
    constructor(minLength) {
        this.minLength = minLength;
        this.errorName = 'MinLength';
    }
    validate(text) {
        return text.length >= this.minLength;
    }
}
class MaxLength {
    constructor(maxLenght) {
        this.maxLenght = maxLenght;
        this.errorName = 'MaxLength';
    }
    validate(text) {
        return text.length <= this.maxLenght;
    }
}
class Email {
    constructor() {
        this.errorName = 'Email';
        this.emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    }
    validate(text) {
        return text.length === 0 || this.emailRegexp.test(text);
    }
}
const Validators = {
    Required,
    MinLength,
    MaxLength,
    Email
};

const validate = (value, ...validators) => {
    const errors = [];
    validators.forEach((validator) => {
        if (!validator.validate(value)) {
            errors.push(validator.errorName);
        }
    });
    return errors.length > 0 ? errors : false;
};

const HeaderIn = {
    translateY: ['-100%', '0%'],
    transition: {
        delay: 0.1,
        duration: 0.2,
        ease: 'easeOut'
    }
};
const HeaderOut = {
    translateY: ['0%', '-100%'],
    transition: {
        duration: 0.2,
        ease: 'easeIn'
    }
};
const HeaderInitial = {
    translateY: '-100%'
};
const FadeOut = {
    opacity: [1, 0],
    scale: [1, 0.5],
    transition: { duration: .3, ease: 'backIn' }
};
const FadeIn = {
    opacity: [0, 1],
    scale: [0.5, 1],
    transition: { duration: .3, ease: 'backOut' }
};
const FadeInitial = {
    opacity: 0
};
const ListItemInitial = { opacity: 0 };
const ListItemIn = (index = 0) => ({ opacity: 1, transition: { delay: index * .05, duration: 0.2, ease: 'easeOut' } });
const FingerprintShadowTry = {
    opacity: [0, .6, 0],
    translateY: [0, 10, 0],
    rotate: [(Math.random() * 50 - 25), (Math.random() * 50 - 25)],
    transition: { duration: .7, ease: 'easeInOut' }
};
const FingerprintBaseTry = {
    scale: [1, .9, 1],
    transition: { duration: .7, ease: 'backInOut' }
};
const Animations = {
    HeaderIn,
    HeaderOut,
    HeaderInitial,
    FadeOut,
    FadeIn,
    FadeInitial,
    ListItemInitial,
    ListItemIn,
    FingerprintShadowTry,
    FingerprintBaseTry
};

const DEFAULT_ASIDE_CONFIG = {
    id: 'ui-default-aside-id',
    rootElement: 'body'
};
class AsideController {
    constructor(content, options) {
        this.content = content;
        this.container = null;
        this.status = 'closed';
        this.containerControls = framerMotion.useAnimation();
        this.config = Object.assign({}, DEFAULT_ASIDE_CONFIG, options);
        this.injectProps({ controller: this });
    }
    getStatus() {
        return this.status;
    }
    injectProps(props) {
        this.content = React__default.cloneElement(this.content, Object.assign(Object.assign({}, this.content.props), props));
        if (this.status === 'opened') {
            this.renderReactElement();
        }
    }
    createContainer() {
        if (this.container || typeof document === 'undefined')
            return;
        this.container = document.createElement('aside');
        this.container.setAttribute('id', this.config.id);
        this.container.style.position = 'fixed';
        this.container.style.zIndex = '99';
    }
    renderReactElement() {
        if (this.status === 'opening' || this.status === 'opened') {
            ReactDOM.render(this.createReactElement(), this.container);
        }
        else {
            throw new Error('Bad time react element render.');
        }
    }
    appendNode() {
        this.status = 'opening';
        this.createContainer();
        try {
            this.renderReactElement();
            let elementReference;
            if (this.config.rootElement.startsWith('#')) {
                elementReference = document.getElementById(this.config.rootElement.replace('#', ''));
            }
            else if (this.config.rootElement.startsWith('.')) {
                elementReference = document.getElementsByClassName(this.config.rootElement.replace('.', ''))[0];
            }
            else {
                elementReference = document.getElementsByTagName(this.config.rootElement)[0];
            }
            if (elementReference) {
                elementReference.appendChild(this.container);
                return true;
            }
            else {
                throw new Error('Element reference not found');
            }
        }
        catch (e) {
            console.error(`${this.config.id} append failed:`, e);
            console.error(`${this.config.id} configurations:`, this.config);
            this.status = 'closed';
            return false;
        }
    }
    removeNode() {
        try {
            ReactDOM.unmountComponentAtNode(this.container);
            let elementReference;
            if (this.config.rootElement.startsWith('#')) {
                elementReference = document.getElementById(this.config.rootElement.replace('#', ''));
            }
            else if (this.config.rootElement.startsWith('.')) {
                elementReference = document.getElementsByClassName(this.config.rootElement.replace('.', ''))[0];
            }
            else {
                elementReference = document.getElementsByTagName(this.config.rootElement)[0];
            }
            if (elementReference) {
                elementReference.removeChild(this.container);
                this.status = 'closed';
                return true;
            }
            else {
                throw new Error('Element reference not found');
            }
        }
        catch (e) {
            console.error(`${this.config.id} remove failed`, e);
            console.error(`${this.config.id} configurations:`, this.config);
            return false;
        }
    }
    onOpen(func) {
        this.onopen = func;
    }
    onClose(func) {
        this.onclose = func;
    }
}

const BadgeElement = styled(framerMotion.motion.div) `
    padding: 2px;
    border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
    background-color: ${(props) => getGlobalTheme().colors[props.color].principal};
    color: ${(props) => getGlobalTheme().colors[props.color].contrast};
    margin: 0 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    .ui-badge-text {
        flex: 1;
        margin: 0 5px;
        text-transform: uppercase;
    }
`;

const IconElement = styled(framerMotion.motion.div) `
    width: ${(props) => props.width ? props.width : getGlobalTheme().defaultIconSize};
    height: ${(props) => props.height ? props.height : getGlobalTheme().defaultIconSize};
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
    }
`;

const AccountSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }));
const AccountCircleSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" }));
const AccountCogSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17 12C16.87 12 16.76 12.09 16.74 12.21L16.55 13.53C16.25 13.66 15.96 13.82 15.7 14L14.46 13.5C14.35 13.5 14.22 13.5 14.15 13.63L13.15 15.36C13.09 15.47 13.11 15.6 13.21 15.68L14.27 16.5C14.25 16.67 14.24 16.83 14.24 17C14.24 17.17 14.25 17.33 14.27 17.5L13.21 18.32C13.12 18.4 13.09 18.53 13.15 18.64L14.15 20.37C14.21 20.5 14.34 20.5 14.46 20.5L15.7 20C15.96 20.18 16.24 20.35 16.55 20.47L16.74 21.79C16.76 21.91 16.86 22 17 22H19C19.11 22 19.22 21.91 19.24 21.79L19.43 20.47C19.73 20.34 20 20.18 20.27 20L21.5 20.5C21.63 20.5 21.76 20.5 21.83 20.37L22.83 18.64C22.89 18.53 22.86 18.4 22.77 18.32L21.7 17.5C21.72 17.33 21.74 17.17 21.74 17C21.74 16.83 21.73 16.67 21.7 16.5L22.76 15.68C22.85 15.6 22.88 15.47 22.82 15.36L21.82 13.63C21.76 13.5 21.63 13.5 21.5 13.5L20.27 14C20 13.82 19.73 13.65 19.42 13.53L19.23 12.21C19.22 12.09 19.11 12 19 12H17M10 14C5.58 14 2 15.79 2 18V20H11.68A7 7 0 0 1 11 17A7 7 0 0 1 11.64 14.09C11.11 14.03 10.56 14 10 14M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.16 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5Z" }));
const AccountGroupSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }));
const AccountPlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" }));
const AccountTieSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" }));
const AlertSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }));
const AlertDecagramSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" }));
const AtSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" }));
const CancelSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" }));
const CalendarSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" }));
const CashUsdSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z" }));
const CashPlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" }));
const CheckSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
const ChevronDoubleDownSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" }));
const ChevronDoubleLeftSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" }));
const ChevronDoubleRightSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" }));
const ChevronDoubleUpSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z" }));
const ChevronDownSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }));
const ChevronLeftSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }));
const ChevronRightSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }));
const ChevronUpSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }));
const ClockSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }));
const ClockCheckSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" }));
const CloseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }));
const CloudSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" }));
const CloudAlertSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,20H6C2.71,20 0,17.29 0,14C0,10.9 2.34,8.36 5.35,8.03C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.03C21.95,10.22 24,12.36 24,15C24,17.74 21.74,20 19,20M11,15V17H13V15H11M11,13H13V8H11V13Z" }));
const CloudRefreshSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4M17 13V9L16 10C15.09 8.79 13.64 8 12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.05 18 15.81 16.77 16.58 15H14.24C13.69 15.61 12.89 16 12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.09 10 14.04 10.58 14.56 11.44L13 13H17Z" }));
const CloudSyncSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19 12V13.5C21.21 13.5 23 15.29 23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L16.72 14.22C16.78 14.17 16.85 14.13 19 12M19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5L21.25 20.75L21.28 20.78C21.22 20.83 21.15 20.87 19 23M13 17.5C13 13.91 15.91 11 19.5 11C20.78 11 21.97 11.38 23 12C22.13 10.9 20.84 10.14 19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H13.5C13.18 19.23 13 18.39 13 17.5Z" }));
const CogSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }));
const DesktopSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" }));
const DesktopTowerSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z" }));
const DownloadSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }));
const DotsVerticalSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" }));
const EmailSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }));
const ExitSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M13.34,8.17C12.41,8.17 11.65,7.4 11.65,6.47A1.69,1.69 0 0,1 13.34,4.78C14.28,4.78 15.04,5.54 15.04,6.47C15.04,7.4 14.28,8.17 13.34,8.17M10.3,19.93L4.37,18.75L4.71,17.05L8.86,17.9L10.21,11.04L8.69,11.64V14.5H7V10.54L11.4,8.67L12.07,8.59C12.67,8.59 13.17,8.93 13.5,9.44L14.36,10.79C15.04,12 16.39,12.82 18,12.82V14.5C16.14,14.5 14.44,13.67 13.34,12.4L12.84,14.94L14.61,16.63V23H12.92V17.9L11.14,16.21L10.3,19.93M21,23H19V3H6V16.11L4,15.69V1H21V23M6,23H4V19.78L6,20.2V23Z" }));
const EyeSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }));
const EyeOffSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" }));
const FileSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" }));
const FileCompareSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M10,18H6V16H10V18M10,14H6V12H10V14M10,1V2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V23H12V1H10M20,8V20C20,21.11 19.11,22 18,22H14V20H18V11H14V9H18.5L14,4.5V2L20,8M16,14H14V12H16V14M16,18H14V16H16V18Z" }));
const FileDownloadSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,2H6C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2M12,19L8,15H10.5V12H13.5V15H16L12,19M13,9V3.5L18.5,9H13Z" }));
const FileReplaceSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,12H19.5L14,6.5V12M8,5H15L21,11V21A2,2 0 0,1 19,23H8C6.89,23 6,22.1 6,21V18H11V20L15,17L11,14V16H6V7A2,2 0 0,1 8,5M13.5,3H4V16H6V18H4A2,2 0 0,1 2,16V3A2,2 0 0,1 4,1H11.5L13.5,3Z" }));
const FileSearchSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H13C12.59,21.75 12.2,21.44 11.86,21.1C9.22,18.67 9.05,14.56 11.5,11.92C13.69,9.5 17.33,9.13 20,11V8L14,2M13,9V3.5L18.5,9H13M20.31,18.9C21.64,16.79 21,14 18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 14.09,20.3C15.55,21.23 17.41,21.23 18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19A2.5,2.5 0 0,1 14,16.5A2.5,2.5 0 0,1 16.5,14A2.5,2.5 0 0,1 19,16.5A2.5,2.5 0 0,1 16.5,19Z" }));
const FilterSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" }));
const FilterPlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H18V14H20V17H23V19H20V22H18V19H15V17Z" }));
const FilterRemoveSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z" }));
const FingerprintSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z" }));
const GestureTapSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z" }));
const HammerWrenchSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" }));
const KeySVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z" }));
const KeyChangeSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16A1.5,1.5 0 0,0 5,17.5A1.5,1.5 0 0,0 6.5,19A1.5,1.5 0 0,0 8,17.5A1.5,1.5 0 0,0 6.5,16Z" }));
const LicenseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z" }));
const LinuxSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63" }));
const ListSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" }));
const ListCheckSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z" }));
const ListSelectSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" }));
const MagnifySVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }));
const MapMarkerSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" }));
const MinusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,13H5V11H19V13Z" }));
const MicrosoftWindowsSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" }));
const MoonSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" }));
const PackageVariantSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }));
const PencilSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }));
const PlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }));
const PrinterSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" }));
const VideoSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" }));
const SelectGroupSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M5 3A2 2 0 0 0 3 5H5M7 3V5H9V3M11 3V5H13V3M15 3V5H17V3M19 3V5H21A2 2 0 0 0 19 3M3 7V9H5V7M7 7V11H11V7M13 7V11H17V7M19 7V9H21V7M3 11V13H5V11M19 11V13H21V11M7 13V17H11V13M13 13V17H17V13M3 15V17H5V15M19 15V17H21V15M3 19A2 2 0 0 0 5 21V19M7 19V21H9V19M11 19V21H13V19M15 19V21H17V19M19 19V21A2 2 0 0 0 21 19Z" }));
const SelectionSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M11.2 4C9.94 4.12 8.72 4.53 7.64 5.2L6.64 3.47C7.95 2.64 9.45 2.13 11 2M17.53 6.25C16.62 5.39 15.53 4.73 14.34 4.33L15 2.39C16.5 2.84 17.89 3.66 19 4.78M5.34 7.41C4.64 8.44 4.19 9.6 4 10.83L2 10.55C2.2 9 2.79 7.5 3.7 6.23M22 12V12.66L20 12.5V12C20 10.92 19.81 9.86 19.39 8.86L21.22 8.06C21.75 9.31 22 10.65 22 12M6 17.3L4.5 18.61C3.47 17.43 2.72 16.04 2.3 14.53L4.17 14C4.53 15.22 5.16 16.35 6 17.3M12.14 22H12C10.5 22 9 21.68 7.64 21.07L8.53 19.24C9.62 19.75 10.8 20 12 20H12.19M17 21H15V15H21V17H18.42L21.14 19.76L19.73 21.17L17 18.5" }));
const ShapePlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M2,2H11V11H2V2M17.5,2C20,2 22,4 22,6.5C22,9 20,11 17.5,11C15,11 13,9 13,6.5C13,4 15,2 17.5,2M6.5,14L11,22H2L6.5,14M19,17H22V19H19V22H17V19H14V17H17V14H19V17Z" }));
const SunSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" }));
const RefreshSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" }));
const TrashSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }));
const WarehouseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M6 19H8V21H6V19M12 3L2 8V21H4V13H20V21H22V8L12 3M8 11H4V9H8V11M14 11H10V9H14V11M20 11H16V9H20V11M6 15H8V17H6V15M10 15H12V17H10V15M10 19H12V21H10V19M14 19H16V21H14V19Z" }));
const WorkerSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" }));
const Icons = {
    account: AccountSVG,
    accountCircle: AccountCircleSVG,
    accountCog: AccountCogSVG,
    accountGroup: AccountGroupSVG,
    accountPlus: AccountPlusSVG,
    accountTie: AccountTieSVG,
    alert: AlertSVG,
    alertDecagram: AlertDecagramSVG,
    at: AtSVG,
    calendar: CalendarSVG,
    cancel: CancelSVG,
    cashUsd: CashUsdSVG,
    cashPlus: CashPlusSVG,
    check: CheckSVG,
    chveronDoubleDown: ChevronDoubleDownSVG,
    chevronDoubleLeft: ChevronDoubleLeftSVG,
    chevronDoubleRight: ChevronDoubleRightSVG,
    chevronDoubleUp: ChevronDoubleUpSVG,
    chevronDown: ChevronDownSVG,
    chevronLeft: ChevronLeftSVG,
    chevronRight: ChevronRightSVG,
    chevronUp: ChevronUpSVG,
    clock: ClockSVG,
    clockCheck: ClockCheckSVG,
    close: CloseSVG,
    cloud: CloudSVG,
    cloudAlert: CloudAlertSVG,
    cloudRefresh: CloudRefreshSVG,
    cloudSync: CloudSyncSVG,
    cog: CogSVG,
    desktop: DesktopSVG,
    desktopTower: DesktopTowerSVG,
    download: DownloadSVG,
    dotsVertical: DotsVerticalSVG,
    email: EmailSVG,
    exit: ExitSVG,
    eye: EyeSVG,
    eyeOff: EyeOffSVG,
    file: FileSVG,
    fileCompare: FileCompareSVG,
    fileDownload: FileDownloadSVG,
    fileReplace: FileReplaceSVG,
    fileSearch: FileSearchSVG,
    filter: FilterSVG,
    filterPlus: FilterPlusSVG,
    filterRemove: FilterRemoveSVG,
    fingerprint: FingerprintSVG,
    gestureTap: GestureTapSVG,
    hammerWrench: HammerWrenchSVG,
    key: KeySVG,
    keyChange: KeyChangeSVG,
    license: LicenseSVG,
    linux: LinuxSVG,
    list: ListSVG,
    listCheck: ListCheckSVG,
    listSelect: ListSelectSVG,
    magnify: MagnifySVG,
    mapMarker: MapMarkerSVG,
    microsoftWindows: MicrosoftWindowsSVG,
    minus: MinusSVG,
    moon: MoonSVG,
    packageVariant: PackageVariantSVG,
    pencil: PencilSVG,
    plus: PlusSVG,
    printer: PrinterSVG,
    selectGroup: SelectGroupSVG,
    selection: SelectionSVG,
    shapePlus: ShapePlusSVG,
    sun: SunSVG,
    refresh: RefreshSVG,
    trash: TrashSVG,
    video: VideoSVG,
    warehouse: WarehouseSVG,
    worker: WorkerSVG,
};

function Icon(props) {
    return (React__default.createElement(IconElement, Object.assign({}, props), Icons[props.name]));
}

function Badge(props) {
    const color = props.color ? props.color : 'primary';
    return (React__default.createElement(BadgeElement, Object.assign({}, props, { color: color }),
        props.icon && React__default.createElement(Icon, { className: "ui-badge-icon", name: props.icon, invert: true, width: "15pt", height: "unset", color: color }),
        props.text && React__default.createElement("span", { className: "ui-badge-text" }, props.text)));
}

const CardBaseElement = styled(framerMotion.motion.div) `
    min-width: ${({ width }) => width || ''};
    width: ${({ width }) => width || ''};
    max-width: calc(100% - 30px);
    min-height: ${({ height }) => height || ''};
    background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
    border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
    margin: 10px;
    padding: 15px;
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    cursor: pointer;
    transition: all ${() => getGlobalTheme().transitions.fast};
    
    color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};

    h2 {
        margin: 5px 0;
        text-align: ${() => getGlobalTheme().font.h2.textAlign};
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        font-size: ${() => getGlobalTheme().font.h2.fontSize};
        line-height: ${() => getGlobalTheme().font.h2.lineHeight};
        color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};

        max-width: calc(100% - 30px);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .ui-card-description {
        text-align: ${() => getGlobalTheme().font.p1.textAlign};
        font-weight: ${() => getGlobalTheme().font.p1.fontWeight};
        font-size: ${() => getGlobalTheme().font.p1.fontSize};
        line-height: ${() => getGlobalTheme().font.p1.lineHeight};

        max-width: calc(100% - 30px);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: -10px;
    }
`;

function CardBase(props) {
    return React__default.createElement(CardBaseElement, Object.assign({}, props));
}

const CheckboxElement = styled(framerMotion.motion.div) `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all ${() => getGlobalTheme().transitions.avarage};
    border: 2px solid transparent;
    margin: 3px;

    &:hover {
        cursor: pointer;
    }

    &&.ui-checkbox-true {
        border-color: transparent;
        background-color: ${(props) => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};

        &:hover {
            background-color: ${(props) => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}B3;
        }
    }

    &&.ui-checkbox-false {
        border-color: ${(props) => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;

        &:hover {
            background-color: ${(props) => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;
        }
    }
`;

function Checkbox(props) {
    const size = props.size ? props.size : getGlobalTheme().defaultIconSize;
    const [value, setValue] = React.useState(!!props.value);
    const [event, setEvent] = React.useState({ value });
    const animationController = framerMotion.useAnimation();
    const iconName = props.icon ? props.icon : 'check';
    const toggle = (currentEvent) => {
        setValue(!value);
        setEvent(Object.assign(Object.assign({}, currentEvent), { value }));
    };
    React.useEffect(() => {
        setValue(!!props.value);
    }, [props.value]);
    React.useEffect(() => {
        animationController.start(value ? Animations.FadeIn : Animations.FadeOut);
        if (props.onToggle) {
            props.onToggle(event);
            setEvent({ value });
        }
        return () => animationController.stop();
    }, [value]);
    return (React__default.createElement(CheckboxElement, Object.assign({}, props, { className: `ui-checkbox-${value} ${props.className || ''}`, style: { width: size, height: size }, onClick: toggle, color: props.color }),
        React__default.createElement(Icon, { initial: { opacity: 0 }, name: iconName, invert: value, width: `calc(${size} - 30%)`, height: `calc(${size} - 30%)`, color: props.color, animate: animationController })));
}

const DatepickerElement = styled.div `
    width: ${({ width }) => width};
    max-width: 100%;
    height: ${({ height }) => height};
    max-height: 100%;
    display: flex;
    flex-direction: column;

    .ui-datepicker-header {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            flex: 1;
            text-align: center;
        }
    }

    .ui-datepicker-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .ui-datepicker-indicator {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        user-select: none;
    }

        
    .ui-datepicker-list-item-container {
        all: unset;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        position: relative;
        transition: all ${() => getGlobalTheme().transitions.fast};

        &:hover {
            background-color: ${() => getGlobalTheme().colors.primary.principal}32;
            color: ${() => getGlobalTheme().colors.primary.contrast};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }

    .ui-datepicker-list-item-outday {
        opacity: 0.3;
    }

    .ui-datepicker-list-item-unavaliable {
        cursor: not-allowed;
        color: ${() => getGlobalTheme().colors.danger.principal};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.danger.principal};

        &:hover {
            background-color: transparent;
            color: ${() => getGlobalTheme().colors.danger.principal};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.danger.principal};
        }
    }

    .ui-datepicker-list-item-today::after {
        content: " ";
        width: 100%;
        height: 100%;
        background-color: ${() => getGlobalTheme().colors.primary.principal}32;
        position: absolute;
        border: 3px solid ${() => getGlobalTheme().colors.primary.principal}32;
        border-radius: 5px;
        top: -3px;
        left: -3px;
    }

    .ui-datepicker-week-container {
        all: unset;
        flex: 1;
        display: flex;
        align-items: stretch;
    }

    .ui-datepicker-week-title {
        all: unset;
        display: flex;
        min-height: 30px;
        padding: 2% 0;
        align-items: stretch;
        color: ${() => getGlobalTheme().colors.primary.principal};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.primary.principal};

        li {
            all: unset;
            flex: 1;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .ui-datepicker-list-item-selected {
        background-color: ${() => getGlobalTheme().colors.success.principal};
        color: ${() => getGlobalTheme().colors.success.contrast};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.success.contrast};

        &:hover {
            background-color: ${() => getGlobalTheme().colors.success.principal}32;
            color: ${() => getGlobalTheme().colors.success.contrast};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.success.contrast};
        }
        
        &::after  {
            content: " ";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid ${() => getGlobalTheme().colors.success.principal};
            border-radius: 5px;
            top: -3px;
            left: -3px;
        }
    }
`;

const MONTH_NAMES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outuburo", "Novembro", "Dezembro"];
const WEEKDAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const DAY_TIME = 86400000;
const DEFAULT_WIDTH = '300px';
const DEFAULT_HEIGHT = '300px';
function generateMonthDays(date = new Date()) {
    const monthDays = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let day = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1 - firstDay.getDay());
    for (let weekcount = 0; weekcount < 6; weekcount++) {
        monthDays[weekcount] = [];
        for (let weekday = 0; weekday < 7; weekday++) {
            monthDays[weekcount][weekday] = new Date(day);
            day = new Date(day.setDate(day.getDate() + 1));
        }
    }
    return monthDays;
}
function Datepicker(props) {
    const [body, setBody] = React.useState();
    const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
    const [currentIndicator, setCurrentIndicator] = React.useState('month');
    const [indicatorText, setIndicatorText] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState(props.initial);
    const changeIndicator = (d) => {
        switch (currentIndicator) {
            case 'year':
                setCurrentYear(currentYear + d);
                break;
            case 'month':
                setCurrentMonth(currentMonth + d);
                break;
            case 'decade':
                setCurrentYear(currentYear + d * 10);
                break;
        }
    };
    const DayElement = ({ day }) => {
        let className = 'ui-datepicker-list-item-container';
        if (Date.now() - day.getTime() >= 0 && Date.now() - day.getTime() <= DAY_TIME) {
            className += ' ui-datepicker-list-item-today'; // Today class
        }
        if (selectedDate && day.toDateString() === selectedDate.toDateString()) {
            className += ' ui-datepicker-list-item-selected'; // Selected days class
        }
        if (day.getMonth() !== currentMonth) {
            className += ' ui-datepicker-list-item-outday'; // Out month days class
        }
        const selectDay = (event) => {
            event.stopPropagation();
            setSelectedDate(day);
            if (day.getMonth() !== currentMonth)
                setCurrentMonth(day.getMonth());
            if (props.onDaySelected)
                props.onDaySelected(day);
        };
        return React__default.createElement("li", { onClick: selectDay, className: className }, day.getDate());
    };
    const WeekElement = ({ week }) => {
        return React__default.createElement("ul", { className: "ui-datepicker-week-container" }, week.map((day, index) => React__default.createElement(DayElement, { key: index, day: day })));
    };
    const MonthElement = ({ date = new Date(currentYear) }) => {
        let className = 'ui-datepicker-list-item-container';
        if (new Date().getMonth() === date.getMonth() && new Date().getFullYear() === date.getFullYear()) {
            className += ' ui-datepicker-list-item-today';
        }
        if (selectedDate && date.getFullYear() === selectedDate.getFullYear() && date.getMonth() === selectedDate.getMonth()) {
            className += ' ui-datepicker-list-item-selected';
        }
        const selectMonth = (event) => {
            event.stopPropagation();
            setCurrentIndicator('month');
            setCurrentMonth(date.getMonth());
        };
        return React__default.createElement("li", { onClick: selectMonth, className: className }, MONTH_NAMES[date.getMonth()]);
    };
    const YearElement = ({ fullYear }) => {
        let className = 'ui-datepicker-list-item-container';
        if (new Date().getFullYear() === fullYear) {
            className += ' ui-datepicker-list-item-today';
        }
        if (selectedDate && fullYear === selectedDate.getFullYear()) {
            className += ' datepicker-list-item-selected'; // Selected days class
        }
        const selectYear = (event) => {
            event.stopPropagation();
            setCurrentIndicator('year');
            setCurrentYear(fullYear);
        };
        return React__default.createElement("li", { onClick: selectYear, className: className }, fullYear);
    };
    const fillMonth = (date = new Date(currentYear, currentMonth)) => {
        setCurrentYear(date.getFullYear());
        setCurrentMonth(date.getMonth());
        setIndicatorText(MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear());
        setCurrentIndicator('month');
        const monthDays = generateMonthDays(date);
        return monthDays.map((week, index) => React__default.createElement(WeekElement, { key: index, week: week }));
    };
    const fillYear = (fullYear = currentYear) => {
        setCurrentIndicator('year');
        setCurrentYear(fullYear);
        const list = [];
        for (let i = 0; i < 4; i++) {
            const aux = [];
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                aux.push(React__default.createElement(MonthElement, { date: new Date(fullYear, index), key: index }));
            }
            list.push(React__default.createElement("ul", { className: "ui-datepicker-week-container", key: i }, aux));
        }
        setIndicatorText(fullYear.toString());
        return list;
    };
    const fillDecade = (from = currentYear) => {
        setCurrentIndicator('decade');
        from = Math.floor(from / 10) * 10;
        setCurrentYear(from);
        const list = [];
        for (let i = 0; i < 5; i++) {
            const aux = [];
            for (let j = 0; j < 2; j++) {
                const fullYear = from + i * 2 + j;
                aux.push(React__default.createElement(YearElement, { fullYear: fullYear, key: fullYear }));
            }
            list.push(React__default.createElement("ul", { className: "ui-datepicker-week-container", key: i }, aux));
        }
        setIndicatorText(`${from} - ${from + 9}`);
        return list;
    };
    const nextIndicator = () => {
        switch (currentIndicator) {
            case 'month':
                return setCurrentIndicator('year');
            case 'year':
                return setCurrentIndicator('decade');
            case 'decade':
                return;
        }
    };
    React.useEffect(() => {
        switch (currentIndicator) {
            case 'month':
                return setBody(fillMonth());
            case 'year':
                return setBody(fillYear());
            case 'decade':
                return setBody(fillDecade());
        }
    }, [currentIndicator, currentYear, currentMonth, selectedDate]);
    return (React__default.createElement(DatepickerElement, { width: props.width ? props.width : DEFAULT_WIDTH, height: props.height ? props.height : DEFAULT_HEIGHT },
        React__default.createElement("div", { className: "ui-datepicker-header" },
            React__default.createElement(Button, { buttonType: "icon", icon: "chevronLeft", onClick: () => changeIndicator(-1) }),
            React__default.createElement("span", { className: "ui-datepicker-idicator", onClick: nextIndicator }, indicatorText),
            React__default.createElement(Button, { buttonType: "icon", icon: "chevronRight", onClick: () => changeIndicator(1) })),
        currentIndicator === 'month' &&
            React__default.createElement("ul", { className: "ui-datepicker-week-title" }, WEEKDAY_NAMES.map((weekdayName) => React__default.createElement("li", { key: weekdayName }, weekdayName))),
        React__default.createElement("div", { className: "ui-datepicker-body" }, body)));
}

const InputContainerElement = styled(framerMotion.motion.div) `
    min-width: 300px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all ${() => getGlobalTheme().transitions.fast};
    
    
    &&.ui-input-container-outline {
        background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};
        border: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }

    &&.ui-input-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;

        &:focus-within {
            border-bottom: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }
    
    .__icon-right {
        margin: 0 5px 0 0;
        padding: 0;

        .ui-btn-icon {
            margin: 0 !important;
        }
    }

    .__icon-left {
        margin: 0 0 0 5px;
        padding: 0;
        
        .ui-btn-icon {
            margin: 0 !important;
        }
    }

    @media screen and (max-width: 600px) {   
        width: calc(100% - 30px);
        min-width: 250px;

        .__icon-right {
            margin: 0 3px 0 0;
        }

        .__icon-left {
            margin: 0 0 0 3px;
        }
    }
`;
const InputElement = styled(framerMotion.motion.input) `
    color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
    background-color: transparent;
    flex: 1;
    border: none;
    outline: none;
    font-size: ${() => getGlobalTheme().font.input.fontSize};
    font-weight: ${() => getGlobalTheme().font.input.fontWeight};
    text-align: ${() => getGlobalTheme().font.input.textAlign};
    font-family: ${() => getGlobalTheme().font.input.fontFamily};
    margin: 0 10px;
    
    &::placeholder {
        transition: all ${() => getGlobalTheme().transitions.avarage};
        color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}7A;
    }
    &:focus {
        &::placeholder {
            color: transparent;
        }
    }

    @media screen and (max-width: 600px) {   
        margin: 0 3px;
        min-width: 150px;
    }
`;

const DEFAULT_TYPE = 'downline';
function Input(props) {
    var _a;
    const containerType = props.containerType ? props.containerType : DEFAULT_TYPE;
    const inputRef = React.useRef();
    const [enableClear, setEnableClear] = React.useState(!!props.value && !!props.enableClear);
    const clear = () => {
        var _a;
        if (inputRef.current) {
            const input = inputRef.current;
            const setValue = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
            if (setValue) {
                setValue.call(input, '');
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    };
    const onDatepickerSelect = (date) => {
        var _a;
        if (inputRef.current) {
            const input = inputRef.current;
            const setValue = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
            if (setValue) {
                setValue.call(input, date.toLocaleDateString('pt-br'));
                input.dispatchEvent(new Event('input', { bubbles: true }));
                // eslint-disable-next-line
                // datepicker.close();
            }
        }
    };
    const datepicker = useOverflow(React__default.createElement(Datepicker, { onDaySelected: onDatepickerSelect }));
    React.useEffect(() => {
        var _a;
        if (props.getRef)
            props.getRef(inputRef);
        const eventHandler = (event) => setEnableClear(event.target.value.length > 0 && !!props.enableClear);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('input', eventHandler);
        return () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', eventHandler); };
    }, [inputRef.current]);
    return (React__default.createElement(InputContainerElement, Object.assign({}, props.containerProps, { invert: props.invert, color: props.color, className: `ui-input-container-${containerType} ${((_a = props.containerProps) === null || _a === void 0 ? void 0 : _a.className) || ''}` }),
        props.iconLeft && React__default.createElement(Icon, { color: props.color, name: props.iconLeft, invert: props.invert, width: "25px", height: "25px", className: "__icon-left" }),
        React__default.createElement(InputElement, Object.assign({}, props, { ref: inputRef, disabled: props.enableDatepicker })),
        enableClear && React__default.createElement(Button, { buttonType: "icon", icon: "close", onClick: clear, iconSize: "25px", invert: props.invert, className: "__icon-right" }),
        props.enableDatepicker && React__default.createElement(Button, { buttonType: "icon", icon: "calendar", invert: props.invert, onClick: (event) => datepicker.open(event.currentTarget), iconSize: "25px", className: "__icon-right" }),
        props.iconRight && React__default.createElement(Icon, { color: props.color, name: props.iconRight, invert: props.invert, width: "25px", height: "25px", className: "__icon-right" })));
}

function FormField(props) {
    const [color, setColor] = React.useState(props.color);
    const [iconRight, setIconRight] = React.useState(props.iconRight);
    const [validated, setValidated] = React.useState(props.validated || false);
    const validateField = (value, forceErrorState) => {
        const validation = validate(value, ...props.validators);
        if (validation) {
            if (validated || forceErrorState) {
                setColor('danger');
                setIconRight('alert');
                setValidated(true);
            }
        }
        else {
            setColor(props.color);
            setIconRight(props.iconRight);
            if (!validated)
                setValidated(true);
        }
        props.onValidationChange(validation);
        return validation;
    };
    const blurValidationHandler = (event) => {
        validateField(event.target.value, true);
        if (props.onBlur)
            props.onBlur(event);
    };
    const changeValidationHandler = (event) => {
        validateField(event.target.value);
        if (props.onChange)
            props.onChange(event);
    };
    React.useEffect(() => {
        if (props.validated) {
            validateField(props.value || '', props.validated);
        }
    }, [props.validated]);
    return React__default.createElement(Input, Object.assign({}, props, { color: color, iconRight: iconRight, onBlur: blurValidationHandler, onChange: changeValidationHandler, className: `ui-form-input ${props.className}` }));
}

function useForm(fields) {
    const [fieldStates, setFieldStates] = React.useState(fields.reduce((obj, cur) => (Object.assign(Object.assign({}, obj), { [cur.key]: { value: cur.initial || '', hasError: validate(cur.initial || '', ...cur.validators), validators: cur.validators } })), {}));
    const validationChangeHandler = (key, hasError) => {
        const state = Object.assign(Object.assign({}, fieldStates[key]), { hasError });
        setFieldStates(Object.assign(Object.assign({}, fieldStates), { [key]: state }));
    };
    const valueChangeHandler = (key, value) => {
        const state = Object.assign(Object.assign({}, fieldStates[key]), { value });
        setFieldStates(Object.assign(Object.assign({}, fieldStates), { [key]: state }));
    };
    const formElement = fields.map(({ key, inputProps, validators }) => React__default.createElement(FormField, Object.assign({}, inputProps, { key: key, onValidationChange: (value) => validationChangeHandler(key, value), onChange: (event) => valueChangeHandler(key, event.target.value), value: fieldStates[key].value, validators: validators, validated: fieldStates[key].validated })));
    const getErrors = () => {
        let newFieldStates = {};
        let hasError = {};
        for (const key in fieldStates) {
            fieldStates[key].hasError = validate(fieldStates[key].value, ...fieldStates[key].validators);
            const state = Object.assign(Object.assign({}, fieldStates[key]), { validated: true });
            newFieldStates = Object.assign(Object.assign({}, newFieldStates), { [key]: state });
            if (fieldStates[key].hasError)
                hasError = Object.assign(Object.assign({}, hasError), { [key]: fieldStates[key].hasError });
        }
        setFieldStates(newFieldStates);
        if (Object.entries(hasError).length > 0)
            return hasError;
        else
            return null;
    };
    const getValues = () => {
        return Object.entries(fieldStates).reduce((obj, curr) => (Object.assign(Object.assign({}, obj), { [curr[0]]: curr[1].value })), {});
    };
    return [formElement, getErrors, getValues, fieldStates];
}

const img = "data:image/jpeg;base64,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";

const ImageAvatarElement = styled.div `
    width: ${(props) => props.size ? props.size : getGlobalTheme().defaultIconSize};
    height: ${(props) => props.size ? props.size : getGlobalTheme().defaultIconSize};
    min-width: ${(props) => props.size ? props.size : getGlobalTheme().defaultIconSize};
    min-height: ${(props) => props.size ? props.size : getGlobalTheme().defaultIconSize};
    border-radius: 50%;
    background-image: url(${(props) => props.src ? props.src : img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 3px;
`;

function ImageAvatar(props) {
    return (React__default.createElement(ImageAvatarElement, Object.assign({}, props)));
}

// type ThemedScrollableContainer =
//     <C extends keyof JSX.IntrinsicElements>(c: C) => any;
const ScrollableContainer = styled(framerMotion.motion.div) `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;

    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: flex-start;
    align-items: center;
`;

const SelectInputElement = styled.input `
    flex: 1;
`;
const SelectContainerElement = styled.div `
    min-width: 300px;
    height: 50px;
    margin: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;

    &.ui-select-container-outline {
        background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};
        border: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }

    &.ui-select-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;

        &:focus-within {
            border-bottom: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }

    @media screen and (max-width: 600px) {   
        width: calc(100% - 30px);
        min-width: 250px;
    }
`;
const SelectListElement = styled.div `
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    z-index: 10;
    margin-bottom: 15px;

    top: 40px;
    left: 4px;
    right: 4px;
    max-height: 23vh;
    overflow-y: auto;
    border-bottom-left-radius: calc(${() => getGlobalTheme().borderRadius} * 0.4);
    border-bottom-right-radius: calc(${() => getGlobalTheme().borderRadius} * 0.4);
    box-shadow: ${() => getGlobalTheme().boxShadow.active};
    background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};

    .ui-select-list-item {
        width: 100%;
        padding: 5px 5px 5px 15px;
        transition: ${() => getGlobalTheme().transitions.fast};

        &:hover {
            cursor: pointer;
            background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}12;
        }
    }

    .ui-select-list-loading {
        width: 100%;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}0A;
    }
`;

const CirclesSVG = (props) => React__default.createElement("svg", Object.assign({ width: "45", height: "45", viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: "#000" }, props),
    React__default.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        React__default.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
            React__default.createElement("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })),
        React__default.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
            React__default.createElement("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })),
        React__default.createElement("circle", { cx: "22", cy: "22", r: "8" },
            React__default.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" }))));
const Spinners = {
    circles: CirclesSVG
};

const SEARCH_LIMIT_TIME = 500;
let SEARCH_TIMER;
function Select({ data, dataKey, loading, onSelect, onSearch, onOpen, onClose, value, color, invert, placeholder, containerType }) {
    const [inputValue, setInputValue] = React.useState(value ? `${value[dataKey]}` : '');
    const [selected, setSelected] = React.useState(value);
    const [opened, setOpened] = React.useState(false);
    const [filteredData, setFilteredData] = React.useState(data);
    const buttonAnimationController = framerMotion.useAnimation();
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if (value) {
            setInputValue(`${value[dataKey]}`);
        }
    }, [value]);
    const itemSelectHandler = (event, item) => {
        setSelected(item);
        setInputValue(`${item[dataKey]}`);
        setOpened(false);
        if (onSelect)
            onSelect(event, item);
    };
    const inputChangeHandler = (event) => {
        const value = `${event.target.value}`;
        setInputValue(value);
        setSelected(undefined);
        setFilteredData(data.filter(item => `${item[dataKey]}`.toLocaleLowerCase().match(value.toLocaleLowerCase())));
        clearTimeout(SEARCH_TIMER);
        SEARCH_TIMER = setTimeout(() => {
            if (onSearch)
                onSearch(value);
        }, SEARCH_LIMIT_TIME);
    };
    const focusHandler = () => {
        setOpened(true);
    };
    const togglerHandler = () => {
        setOpened(!opened);
    };
    const renderListItem = (item, index) => {
        return React__default.createElement("div", { key: index, onClick: (event) => itemSelectHandler(event, item), className: "ui-select-list-item" }, `${item[dataKey]}`);
    };
    React.useEffect(() => {
        const closeHandler = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpened(false);
            }
        };
        if (opened) {
            if (onOpen)
                onOpen();
            if (onSearch)
                onSearch('');
            buttonAnimationController.start({ rotate: 180, transition: { duration: 0.1, ease: 'backInOut' } });
            setFilteredData(data);
            setInputValue('');
            window.addEventListener('click', closeHandler);
            return () => window.removeEventListener('click', closeHandler);
        }
        else {
            if (onClose)
                onClose();
            if (!selected) {
                console.log('git', value);
                setSelected(value);
                setFilteredData(data);
            }
            setInputValue(value ? `${value[dataKey]}` : '');
            buttonAnimationController.start({ rotate: 0, transition: { duration: 0.1, ease: 'backInOut' } });
        }
    }, [opened]);
    React.useEffect(() => {
        if (!loading) {
            setFilteredData(data.filter(item => `${item[dataKey]}`.toLocaleLowerCase().match(inputValue.toLocaleLowerCase())));
        }
    }, [data]);
    React.useEffect(() => {
        setSelected(value);
        setInputValue(value ? `${value[dataKey]}` : '');
    }, [value]);
    return (React__default.createElement(SelectContainerElement, { color: color, invert: invert, ref: containerRef, className: `ui-select-container-${containerType || 'downline'}` },
        React__default.createElement(InputElement, { value: inputValue, onChange: inputChangeHandler, onFocus: focusHandler, placeholder: placeholder }),
        React__default.createElement(Button, { buttonType: "icon", icon: "chevronDown", iconSize: "20px", onClick: togglerHandler, animate: buttonAnimationController }),
        opened &&
            React__default.createElement(SelectListElement, { color: color, invert: invert, className: `ui-select-list-container` },
                filteredData.map(renderListItem),
                loading &&
                    React__default.createElement("div", { className: "ui-select-list-loading" },
                        React__default.createElement(Spinners.circles, { width: "40px", height: "40px" }),
                        React__default.createElement("span", null, "Carregando mais dados...")),
                !loading && filteredData.length < 1 &&
                    React__default.createElement("div", { className: "ui-select-list-loading" },
                        React__default.createElement("span", null, "Nenhum item encontrado")))));
}

const TabsLayoutElement = styled(framerMotion.motion.section) `
    flex: 1 1 100%;
    width: 100%;
    justify-self: stretch;
    align-self: stretch;
    
    display: flex;
    flex-direction: column;
    .ui-tabs-header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: stretch;
        width: 100%;
        min-height: 50px;
        background-color: ${() => getGlobalTheme().colors.primary.principal};
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};
        color: ${() => getGlobalTheme().colors.primary.contrast}33;
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        
        .ui-tabs-tab {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100%;
            cursor: pointer;
            border-bottom: 5px solid ${() => getGlobalTheme().colors.primary.contrast}33;
            text-transform: uppercase;
            overflow: hidden;
        }
        .ui-tabs-tab-selector {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: ${() => getGlobalTheme().colors.primary.contrast};
            z-index: 3;
        }
        .ui-tabs-tab-selected {
            color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }
    .ui-tabs-tab-body {
        flex: 1 1 100%;
        width: 100%;
        justify-self: stretch;
        align-self: stretch;
        position: relative;
    }
`;
const TabElement = styled(framerMotion.motion.div) `
    flex: 1 1 100%;
    width: 100%;
    justify-self: stretch;
    align-self: stretch;
`;

function Tab(props) {
    return (React__default.createElement(TabElement, Object.assign({}, props, { className: `ui-tabs-tab-body ${props.className}` }), props.children));
}

const TableElement = styled.table `
    flex: 1 1 100%;
    width: 100%;
    height: 100%;
    min-height: 100px;
    justify-self: flex-start;
    align-self: flex-start;
    overflow: auto;
    
    border-spacing: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    tr {
        display: flex;
        justify-content: center;
        align-items: stretch;
        text-align: center;
        width: 100%;
        max-width: 1024px;
    }

    .ui-table-loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        flex: 1;
        text-align: center;

        td {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
const TableHeaderElement = styled.thead `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => getGlobalTheme().colors.primary.principal};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    min-width: fit-content;
    height: 50px;
    th {
        color: ${() => getGlobalTheme().colors.primary.contrast};
        font-size: ${() => getGlobalTheme().font.h2.fontSize};
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        text-align: center;

        max-width: calc(100% - 10px);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    @media screen and (max-width: 600px) {
        height: 40px;
        th {
            font-size: calc(${() => getGlobalTheme().font.h2.fontSize} * 0.5);
        }
    }
`;
const TableBodyElement = styled.tbody `
    flex: 1;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: fit-content;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    tr {        
        border-bottom: 1px solid ${() => getGlobalTheme().colors.primary.principal}32;
        * {
            max-width: 100%;
        }
    }

    .ui-table-inner-loading-container {
        border-bottom: unset;
        margin: 15px 0;

        td {
            display: flex;
            flex-direction: column;
            justify-content: center; 
            align-items: center;
        }
    }

    @media screen and (max-width: 600px) {
        top: 40px;
        font-size: 0.8rem;
    }
`;
const TableColumnElement = styled.td `
    flex: ${({ flex }) => flex || 'initial'};
    min-width: ${({ minwidth }) => minwidth || 'initial'} !important;
    max-width: ${({ maxwidth }) => maxwidth || 'initial'} !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    transition: all ${() => getGlobalTheme().transitions.avarage};
    &:hover {
        background-color: ${() => getGlobalTheme().colors.primary.principal}08;
    }
`;

function TableColumn(props) {
    return (React__default.createElement(TableColumnElement, Object.assign({}, props)));
}

const DEFAULT_TABLE_CONFIG = {
    rowProps: {},
    rowEvents: {},
    loadingMessage: 'Carregando dados...',
    innerLoadingMessage: 'Carregando mais dados...',
    emptyMessage: 'Nenhum dado para ser exibido.'
};
const mapChildren = (children) => {
    if (Array.isArray(children)) {
        return children.filter((ele) => typeof ele === 'object' && (ele === null || ele === void 0 ? void 0 : ele.type) === TableColumn);
    }
    else {
        if (typeof children === 'object') {
            return (children === null || children === void 0 ? void 0 : children.type) === TableColumn ? [children] : [];
        }
        else {
            return [];
        }
    }
};
function Table({ data, children, loading, config }) {
    const mappedChildren = mapChildren(children);
    const baseConfig = Object.assign({}, DEFAULT_TABLE_CONFIG, config);
    const [animationIndex, setAnimationIndex] = React.useState(0);
    const tableBodyRef = React.useRef(null);
    const renderLine = (element, index) => {
        const events = {};
        Object.entries(baseConfig.rowEvents).forEach(([key, event]) => events[key] = (nativeEvent) => event ? event(nativeEvent, element) : undefined);
        return (React__default.createElement(framerMotion.motion.tr, Object.assign({ key: index, initial: Animations.ListItemInitial, animate: Animations.ListItemIn(index < animationIndex ? 0 : (index - animationIndex) / ((data === null || data === void 0 ? void 0 : data.length) - animationIndex)) }, baseConfig.rowProps, events), mappedChildren.map((column) => React__default.cloneElement(column, column.props, column.props.children(element, index)))));
    };
    React.useEffect(() => {
        if (data.length > 0) {
            setAnimationIndex(data.length - 1);
        }
        else {
            setAnimationIndex(0);
        }
    }, [data]);
    React.useEffect(() => {
        if (data.length > 0 && loading) {
            if (tableBodyRef.current) {
                tableBodyRef.current.scrollTo({ top: tableBodyRef.current.scrollHeight, behavior: 'smooth' });
            }
        }
    }, [loading]);
    return (React__default.createElement(TableElement, { className: "ui-table" },
        (data.length > 0) &&
            React__default.createElement(TableHeaderElement, { className: "ui-table-header" },
                React__default.createElement("tr", null, mappedChildren.map((child) => React__default.createElement("th", Object.assign({ key: child.props.name, style: { flex: child.props.flex, minWidth: child.props.minwidth, maxWidth: child.props.maxwidth } }, child.props), child.props.name)))),
        (data.length > 0) &&
            React__default.createElement(TableBodyElement, { onScroll: baseConfig.onScroll, className: "ui-table-body", ref: tableBodyRef },
                data.map(renderLine),
                loading &&
                    React__default.createElement("tr", { className: "ui-table-inner-loading-container" },
                        React__default.createElement("td", null,
                            React__default.createElement(Spinners.circles, { width: "100px", height: "100px" }),
                            baseConfig.innerLoadingMessage))),
        (data.length === 0 && !loading) &&
            React__default.createElement(framerMotion.motion.tbody, { className: "ui-table-loading-container" },
                React__default.createElement("tr", null,
                    React__default.createElement("td", null, baseConfig.emptyMessage))),
        (data.length === 0 && loading) &&
            React__default.createElement(framerMotion.motion.tbody, { className: "ui-table-loading-container" },
                React__default.createElement("tr", null,
                    React__default.createElement("td", null,
                        React__default.createElement(Spinners.circles, { width: "200px", height: "200px" }),
                        baseConfig.loadingMessage)))));
}

function Tabs({ index, children, onTabChange }) {
    const [tabIndex, setTabIndex] = React.useState(index === undefined ? 0 : index);
    const selectorController = framerMotion.useAnimation();
    const bodyController = framerMotion.useAnimation();
    const childrenLenght = Array.isArray(children) ? children.length : 1;
    React.useEffect(() => {
        selectorController.start({
            left: `calc(${100 * tabIndex / childrenLenght}%)`,
            transition: { duration: 0.2, ease: 'easeIn' }
        });
        // TODO: Define tab body animation
        // bodyController.start({
        //     opacity: [0, 1],
        //     transition: { duration: 0.2, ease: 'easeIn' }
        // });
        if (onTabChange)
            onTabChange(tabIndex);
    }, [tabIndex]);
    React.useEffect(() => {
        if (index !== undefined) {
            setTabIndex(index);
        }
    }, [index]);
    const renderTab = (element, index) => {
        return React__default.createElement("div", { key: index, className: `ui-tabs-tab ${tabIndex === index ? 'ui-tabs-tab-selected' : ''}`, onClick: () => setTabIndex(index) }, element.props.title);
    };
    return (React__default.createElement(TabsLayoutElement, { className: "ui-tabs" },
        React__default.createElement(framerMotion.motion.header, { className: "ui-tabs-header" },
            Array.isArray(children) ? children.map(renderTab) : renderTab(children, 0),
            React__default.createElement(framerMotion.motion.div, { className: "ui-tabs-tab-selector", style: { width: `calc(100% / ${childrenLenght})` }, animate: selectorController })),
        React__default.createElement(framerMotion.motion.div, { className: "ui-tabs-tab-body", animate: bodyController },
            React__default.createElement(ScrollableContainer, { flexDirection: "column" }, Array.isArray(children) ? children[tabIndex] : children))));
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const TextAreaContainerElement = styled(framerMotion.motion.div) `
    padding: 5px;
    margin: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ${() => getGlobalTheme().transitions.fast};
    position: relative;
    width: fit-content;
    max-width: 100%;

    &&.ui-textarea-container-outline {
        background-color: ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'principal' : 'contrast']};
        border: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }

    &&.ui-textarea-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']}32;

        &:focus-within {
            border-bottom: 2px solid ${({ color, invert }) => getGlobalTheme().colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        }
    }

    textarea {
        min-width: 286px;
        width: 100%;
        max-width: 100%;
        min-height: 82px;
        height: 100%;
        max-height: 100%;
        color: ${() => getGlobalTheme().colors.primary.principal};
        border: none;
        outline: none;
        font-size: ${() => getGlobalTheme().font.input.fontSize};
        font-weight: ${() => getGlobalTheme().font.input.fontWeight};
        text-align: ${() => getGlobalTheme().font.input.textAlign};
        font-family: ${() => getGlobalTheme().font.input.fontFamily};
        
        &::placeholder {
            transition: all ${() => getGlobalTheme().transitions.avarage};
        }
        &:focus {
            &::placeholder {
                color: transparent;
            }
        }
    }
    .__icon {
        position: absolute;
        bottom: 10px;
        right: 10px;
        opacity: 0.3;
    }
`;

const DEFAULT_TYPE$1 = 'downline';
function TextArea(_a) {
    var { icon, containerProps, containerType, invert, color } = _a, props = __rest(_a, ["icon", "containerProps", "containerType", "invert", "color"]);
    return (React__default.createElement(TextAreaContainerElement, Object.assign({}, containerProps, { invert: invert, color: color, className: `ui-textarea-container-${containerType || DEFAULT_TYPE$1} ${(containerProps === null || containerProps === void 0 ? void 0 : containerProps.className) || ''}` }),
        React__default.createElement("textarea", Object.assign({}, props)),
        icon && React__default.createElement(Icon, { color: color, name: icon, invert: invert, width: "25px", height: "25px", className: "__icon" })));
}

const ModalBaseElement = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .ui-modal-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: ${() => getGlobalTheme().colors.primary.principal}4D;
        opacity: 0;
    }

    .ui-modal-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: ${() => getGlobalTheme().borderRadius};
        background-color: ${() => getGlobalTheme().colors.primary.contrast};
        border-radius: ${() => getGlobalTheme().borderRadius};
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};
        opacity: 0;
        max-width: calc(100% - 30px);
        max-height: calc(100% - 30px);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const ModalCloseButton = styled(Icon) `
    position: absolute;
    right: calc(${() => getGlobalTheme().borderRadius} / 3);
    top: calc(${() => getGlobalTheme().borderRadius} / 3);

    cursor: pointer;
    transition: ${() => getGlobalTheme().transitions.fast};
    &:active {
        transform: scale(0.90);
    }
`;

const DEFAULT_MODAL_CONFIG = {
    id: 'ui-modal-default',
    disableBackdropClose: false,
    disableCloseButton: false,
    preventScroll: true,
    rootElement: 'body',
    containerProps: {}
};
class ModalController extends AsideController {
    constructor(content, options) {
        super(content, options);
        this.overlayControls = framerMotion.useAnimation();
        this.config = Object.assign({}, DEFAULT_MODAL_CONFIG, options);
        this.injectProps({ controller: this });
    }
    open() {
        if (this.status !== 'closed')
            return Promise.resolve();
        if (!this.appendNode())
            return Promise.reject('append failed');
        if (this.config.preventScroll) {
            document.body.style.overflow = 'hidden';
        }
        // Animation
        this.containerControls.start({
            opacity: [0, 1],
            scale: [0.5, 1],
            transition: { delay: 0.1, duration: .2, ease: 'backOut' }
        });
        return this.overlayControls.start({
            opacity: [0, 1],
            transition: { duration: .4 }
        }).then(() => {
            this.status = 'opened';
            if (this.onopen)
                this.onopen();
            return Promise.resolve();
        });
    }
    close(reason) {
        if (this.status !== 'opened')
            return Promise.resolve();
        this.status = 'closing';
        if (this.config.preventScroll) {
            document.body.style.overflow = 'auto';
        }
        // Animation
        this.containerControls.start({
            opacity: [1, 0],
            scale: [1, 0.5],
            transition: { duration: .2, ease: 'backIn' },
        });
        return this.overlayControls.start({
            opacity: [1, 0],
            transition: { duration: .3 },
        }).then(() => {
            this.status = 'closed';
            if (this.onclose)
                this.onclose(reason);
            if (this.removeNode())
                return Promise.resolve();
            else
                return Promise.reject();
        });
    }
    setDisabledBackdrop(value) {
        this.config.disableBackdropClose = value;
    }
    setDisabledCloseButto(value) {
        this.config.disableCloseButton = value;
        this.renderReactElement();
    }
    createReactElement() {
        return (React__default.createElement(ModalBaseElement, null,
            React__default.createElement(framerMotion.motion.div, { className: "ui-modal-overlay", onClick: () => (this.config.disableBackdropClose ? undefined : this.close('backdrop')), animate: this.overlayControls }),
            React__default.createElement(framerMotion.motion.div, Object.assign({ className: "ui-modal-container" }, this.config.containerProps, { animate: this.containerControls }),
                this.content,
                !this.config.disableCloseButton && React__default.createElement(ModalCloseButton, { className: "ui-modal-btn-close", onClick: () => this.close('closeButton'), width: "30px", height: "30px", name: "close" }))));
    }
}
function useModal(content, options) {
    const [modal] = React.useState(new ModalController(content, options));
    return modal;
}

const OverflowElement = styled(framerMotion.motion.div) `
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    max-width: calc(100vw - 20px);
    max-height: calc(100vh - 20px);
    
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    background-color: ${() => getGlobalTheme().colors.primary.contrast};
    padding: 5px;

    &.ui-overflow-bottom {
        top: 100%;
    }

    &.ui-overflow-top {
        bottom: 100%;
    }
`;
const OverflowElementArrow = styled.div `
    position: absolute;
    border: 5px solid transparent;

    &.ui-overflow-bottom {
        left: calc(50% - 5px);
        top: -10px;
        border-bottom-color: ${() => getGlobalTheme().colors.primary.contrast};
    }

    &.ui-overflow-top {
        left: calc(50% - 5px);
        bottom: -10px;
        border-top-color: ${() => getGlobalTheme().colors.primary.contrast};
    }
`;

const DEFAULT_CONFIG = {
    id: 'ui-overflow-default',
    position: 'bottom',
    rootElement: 'body'
};
const MARGIN = 10;
class OverflowController extends AsideController {
    constructor(content, options) {
        super(content, options);
        this.parent = null;
        this.contentRef = React.useRef();
        this.contentArrowRef = React.useRef();
        this.clickListener = (event) => {
            var _a;
            if (!((_a = this.container) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || this.container === event.target) {
                this.close('clickOutside');
            }
        };
        this.updateContainerListener = () => this.updateContainer();
        this.hoverLeaveListener = () => {
            var _a;
            this.close('mouseLeave');
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.removeEventListener('mouseleave', this.hoverLeaveListener);
        };
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
    }
    setParent(newParent) {
        this.parent = newParent;
    }
    getParent() {
        return this.parent;
    }
    open(parent, isHover) {
        setTimeout(() => {
            var _a;
            if (this.status === 'opened')
                return;
            if (!this.appendNode())
                return;
            this.updateContainer(parent);
            this.addListeners();
            this.status = 'opening';
            this.containerControls.stop();
            this.containerControls.start({
                opacity: [0, 1],
                transition: { duration: .2 }
            }).then(() => {
                this.status = 'opened';
                if (this.onopen)
                    this.onopen();
            });
            if (isHover)
                (_a = this.container) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseleave', this.hoverLeaveListener);
        });
    }
    close(reason) {
        setTimeout(() => {
            const duration = 0.2;
            this.removeListeners();
            this.status = 'closing';
            this.containerControls.start({
                opacity: [1, 0],
                transition: { duration }
            });
            setTimeout(() => {
                this.status = 'closed';
                if (this.onclose)
                    this.onclose(reason);
                this.removeNode();
            }, duration * 1000);
        });
    }
    createReactElement() {
        return (React__default.createElement(OverflowElement, { ref: this.contentRef, className: `ui-overflow-${this.config.position}`, animate: this.containerControls },
            this.content,
            React__default.createElement(OverflowElementArrow, { ref: this.contentArrowRef, className: `ui-overflow-${this.config.position}` })));
    }
    updateContainer(parent) {
        if (parent)
            this.setParent(parent);
        if (!!!this.parent)
            throw new Error('No parent provided');
        const parentBounding = this.parent.getBoundingClientRect();
        if (this.container) {
            this.container.style.position = 'fixed';
            this.container.style.width = parentBounding.width + 'px';
            this.container.style.height = parentBounding.height + 'px';
            this.container.style.left = parentBounding.left + 'px';
            this.container.style.top = parentBounding.top + 'px';
            this.container.style.display = 'flex';
            this.container.style.justifyContent = 'center';
            this.container.style.alignItems = 'center';
        }
        if (this.contentRef.current && this.contentArrowRef.current) {
            const contentBounding = this.contentRef.current.getBoundingClientRect();
            if (contentBounding.left < 0) {
                const offsetLeft = -parentBounding.left + MARGIN;
                this.contentRef.current.style.left = offsetLeft + 'px';
                this.contentArrowRef.current.style.left = (-offsetLeft + parentBounding.width / 2 + this.contentArrowRef.current.offsetWidth / 2 - MARGIN) + 'px';
            }
            else if (contentBounding.right > window.innerWidth) {
                const offsetRight = -window.innerWidth + parentBounding.right;
                this.contentRef.current.style.right = (offsetRight + MARGIN) + 'px';
                this.contentArrowRef.current.style.left = (this.contentRef.current.offsetWidth + offsetRight - MARGIN) + 'px';
            }
            const minContentOut = contentBounding.height * 0.1;
            if (contentBounding.top < -minContentOut) {
                this.config.position = 'bottom';
                this.contentRef.current.classList.replace('ui-overflow-top', 'ui-overflow-bottom');
                this.contentArrowRef.current.classList.replace('ui-overflow-top', 'ui-overflow-bottom');
            }
            else if (contentBounding.bottom > window.innerHeight + minContentOut) {
                this.config.position = 'top';
                this.contentRef.current.classList.replace('ui-overflow-bottom', 'ui-overflow-top');
                this.contentArrowRef.current.classList.replace('ui-overflow-bottom', 'ui-overflow-top');
            }
        }
    }
    addListeners() {
        this.removeListeners();
        setTimeout(() => {
            window.addEventListener('click', this.clickListener);
            window.addEventListener('resize', this.updateContainerListener);
            window.addEventListener('scroll', this.updateContainerListener);
        });
    }
    removeListeners() {
        window.removeEventListener('click', this.clickListener);
        window.removeEventListener('resize', this.updateContainerListener);
        window.removeEventListener('scroll', this.updateContainerListener);
    }
}
function useOverflow(content, options) {
    const [overflow] = React.useState(new OverflowController(content, options));
    return overflow;
}

const ToastElement = styled(framerMotion.motion.div) `
    position: fixed;
    width: 1024px;
    left: calc(50% - 512px);
    padding: 15px;
    bottom: -100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => getGlobalTheme().colors[props.color].principal};
    color: ${(props) => getGlobalTheme().colors[props.color].contrast};
    font-size: ${() => getGlobalTheme().font.p1.fontSize};
    font-weight: ${() => getGlobalTheme().font.p1.fontWeight};
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};

    @media screen and (max-width: 1024px) {
        width: calc(100% - 30px);
        left: 15px;
    }
`;

const DEFAULT_CONFIG$1 = {
    id: 'ui-toast-default',
    color: 'primary',
    timeout: 2000,
    rootElement: 'body'
};
class ToastController extends AsideController {
    constructor(content, options) {
        super(content, options);
        this.animationController = framerMotion.useAnimation();
        this.clickListener = (event) => {
            var _a;
            if (!((_a = this.container) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || this.container === event.target) {
                this.close('outsideClick');
            }
        };
        this.config = Object.assign({}, DEFAULT_CONFIG$1, options);
        this.hideTimeout = this.animationTimeout = 0;
    }
    open() {
        clearTimeout(this.animationTimeout);
        clearTimeout(this.hideTimeout);
        if (!!!this.content) {
            return;
        }
        if (!this.appendNode())
            return;
        ReactDOM.render(this.createReactElement(), this.container);
        setTimeout(() => window.addEventListener('click', this.clickListener));
        this.hideTimeout = setTimeout(() => this.close('timeout'), this.config.timeout);
        this.status = 'opening';
        this.animationController.start({
            bottom: [-100, 15],
            opacity: [0, 1],
            transition: { duration: .2, ease: 'backOut' }
        });
        this.animationTimeout = setTimeout(() => {
            this.status = 'opened';
            if (this.onopen)
                this.onopen();
        }, 200);
    }
    close(reason) {
        if (this.status !== 'opened') {
            return;
        }
        this.status = 'closing';
        clearTimeout(this.hideTimeout);
        window.removeEventListener('click', this.clickListener);
        this.animationController.start({
            bottom: [15, -100],
            opacity: [1, 0],
            transition: { duration: .2, ease: 'backIn' }
        });
        this.animationTimeout = setTimeout(() => {
            this.removeNode();
            this.status = 'closed';
            if (this.onclose)
                this.onclose(reason);
        }, 200);
    }
    setContent(newContent) {
        this.content = typeof newContent === 'string' ? React__default.createElement("span", null, newContent) : newContent;
    }
    createReactElement() {
        return (React__default.createElement(ToastElement, { color: this.config.color, animate: this.animationController }, this.content));
    }
}
function useToast(content, options) {
    const [toast] = React.useState(new ToastController(content, options));
    return toast;
}

const IconButton = styled(framerMotion.motion.button) `
    all: unset;
    background: transparent;
    color: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
    -webkit-text-fill-color: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
    padding: 5px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        transform: scale(0.96);
    }

    span {
        max-width: 80px;
        text-align: center;
        font-size: calc(${() => getGlobalTheme().font.h2.fontSize} * 0.45);
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        text-overflow: ellipsis;
        overflow: hidden;
        text-transform: uppercase;
    }

    .ui-btn-icon {
        flex: 1;
        margin: 5px;
    }
`;
const BaseButton = styled(framerMotion.motion.button) `
    all: unset;
    padding: 10px 25px;
    min-height: 38px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &&.ui-btn-outline {    
        background: transparent;
        color: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        -webkit-text-fill-color: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        border: 1px solid ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};

        &:active {
            background: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']}20;
        }

        &:disabled {
            opacity: 0.15;
            cursor: default;

            &:active {
                transform: none;
                background: transparent;
            }
        }

        span {
            max-width: 300px;
            flex: 1;
            text-align: center;
            font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        }
    }

    &&.ui-btn-solid {
        background: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        -webkit-text-fill-color: ${(props) => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'principal' : 'contrast'] : getGlobalTheme().colors['primary'][props.invert ? 'principal' : 'contrast']};
        border: 1px solid transparent;
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};

        &:active {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            transform: scale(0.96);
        }

        &:disabled {
            opacity: 0.3;
            cursor: default;
            box-shadow: none;
            &:active {
                transform: none;
                box-shadow: none;
            }
        }
    
        span {
            max-width: 300px;
            flex: 1;
            text-align: center;
            color: ${(props) => props.color ? getGlobalTheme().colors[props.color].contrast : getGlobalTheme().colors['primary'].contrast};
            font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        }
    }

    .ui-btn-solid-icon,
    .ui-btn-outline-icon {
        margin-right: 15px
    }
`;

function Button(props) {
    const buttonType = props.buttonType ? props.buttonType : 'solid';
    switch (buttonType) {
        case 'icon':
            if (!!!props.icon)
                throw new Error('Square button icon not provided');
            return (React__default.createElement(IconButton, Object.assign({}, props),
                React__default.createElement(Icon, { name: props.icon, color: props.color, invert: props.invert, height: props.iconSize, width: props.iconSize, className: "ui-btn-icon" }),
                props.text && React__default.createElement("span", null, props.text)));
        case 'outline':
        case 'solid':
        default:
            return (React__default.createElement(BaseButton, Object.assign({}, props, { className: `ui-btn-${buttonType} ${props.className}` }),
                props.icon && React__default.createElement(Icon, { name: props.icon, color: props.color, invert: (buttonType === 'solid' || props.invert), height: props.iconSize, width: props.iconSize, className: `ui-btn-${buttonType}-icon` }),
                props.text && React__default.createElement("span", { className: `ui-btn-${buttonType}-text` }, props.text)));
    }
}

exports.Animations = Animations;
exports.AsideController = AsideController;
exports.Badge = Badge;
exports.Button = Button;
exports.CardBase = CardBase;
exports.Checkbox = Checkbox;
exports.DarkTheme = DarkTheme;
exports.Datepicker = Datepicker;
exports.Form = useForm;
exports.FormField = FormField;
exports.Icon = Icon;
exports.Icons = Icons;
exports.ImageAvatar = ImageAvatar;
exports.Input = Input;
exports.LightTheme = LightTheme;
exports.ModalController = ModalController;
exports.OverflowController = OverflowController;
exports.ScrollableContainer = ScrollableContainer;
exports.Select = Select;
exports.Spinners = Spinners;
exports.Tab = Tab;
exports.Table = Table;
exports.TableColumn = TableColumn;
exports.Tabs = Tabs;
exports.TextArea = TextArea;
exports.ToastController = ToastController;
exports.Validators = Validators;
exports.getGlobalTheme = getGlobalTheme;
exports.setGlobalTheme = setGlobalTheme;
exports.useForm = useForm;
exports.useModal = useModal;
exports.useOverflow = useOverflow;
exports.useToast = useToast;
exports.validate = validate;
//# sourceMappingURL=index.js.map
