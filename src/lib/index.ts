import './index.css';

// Themes
import { 
    DefaultTheme,
    setGlobalTheme,
    getGlobalTheme
} from './assets/themes';

// SVGs
import Icons from './assets/svgs/icons';
import Spinners from './assets/svgs/spinners';

// Components
import Button from './components/Button';
import Icon from './components/Icon';

// Services
import useModal from './services/modal';
import useToast from './services/toast';


export { 
    DefaultTheme,
    setGlobalTheme,
    getGlobalTheme
};

export {
    Icons,
    Spinners
};

export {
    Icon,
    Button
};

export {
    useModal,
    useToast
};
