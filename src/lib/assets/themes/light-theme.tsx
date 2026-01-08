import type Theme from '../../types/Theme';

const LightTheme: Theme = {
	colors: {
		primary: { principal: '#000000', contrast: '#FFFFFF' },
		secondary: { principal: '#BB86FC', contrast: '#6200EE' },
		danger: { principal: '#D40000', contrast: '#FFFFFF' },
		success: { principal: '#00D415', contrast: '#000000' },
	},
	defaultIconSize: '40px',
	transitions: {
		avarage: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
		slow: '0.7s ease-in-out',
	},
	borderRadius: '10px',
	boxShadow: {
		active: '0 1px 5px rgba(0,0,0,0.3)',
		normal: '0 2px 10px rgba(0,0,0,0.3)',
	},
	font: {
		h1: {
			fontSize: '2rem',
			fontWeight: 600,
			lineHeight: '1.8rem',
			textAlign: 'center',
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 500,
			lineHeight: '1.8rem',
			textAlign: 'center',
		},
		input: {
			fontSize: '1.2rem',
			fontWeight: 400,
			textAlign: 'left',
			fontFamily: `-apple-system, BlinkMacSystemFont, 'Quicksand', 'Segoe UI', 'Roboto'`,
		},
		p1: {
			fontSize: '1.2rem',
			fontWeight: 400,
			lineHeight: '1.2rem',
			textAlign: 'left',
		},
	},
};

export default LightTheme;
