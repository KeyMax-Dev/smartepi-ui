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
import ImageAvatar from './components/ImageAvatar';

// Services
import useModal from './services/aside-components/modal';
import useToast from './services/aside-components/toast';
import useOverflow from './services/aside-components/overflow';


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
    Button,
    ImageAvatar
};

export {
    useModal,
    useOverflow,
    useToast
};
