import './index.css';

// Themes
import { 
    LightTheme,
    DarkTheme,
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
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import CardBase from './components/CardBase';
import Badge from './components/Badge';
import Datepicker from './components/Datepicker';

// Services
import useModal from './services/aside-components/modal';
import useToast from './services/aside-components/toast';
import useOverflow from './services/aside-components/overflow';


export {
    DarkTheme,
    LightTheme,
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
    ImageAvatar,
    Input,
    Checkbox,
    CardBase,
    Badge,
    Datepicker
};

export {
    useModal,
    useOverflow,
    useToast
};
