import Theme from '../../types/Theme';

const DarkTheme: Theme = {
    colors: {
        primary: {principal: '#424242', contrast: '#121212'},
        secondary: {principal: '#6200EE', contrast: '#BB86FC'},
        danger: {principal: '#D40000', contrast: '#FFFFFF'},
        success: {principal: '#00D415', contrast: '#FFFFFF'}
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

export default DarkTheme;