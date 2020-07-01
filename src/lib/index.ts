import './index.css';

// Themes
import { 
    LightTheme,
    DarkTheme,
    setGlobalTheme,
    getGlobalTheme
} from './assets/themes';

// Assets
import Animations from './assets/animations';
import Icons from './assets/svgs/icons';
import Spinners from './assets/svgs/spinners';

// Components
import Badge from './components/Badge';
import Button from './components/Button';
import CardBase from './components/CardBase';
import Checkbox from './components/Checkbox';
import Datepicker from './components/Datepicker';
import Icon from './components/Icon';
import ImageAvatar from './components/ImageAvatar';
import Input from './components/Input';
import Tab from './components/Tabs/tab';
import Table from './components/Table';
import TableColumn from './components/Table';
import Tabs from './components/Tabs';

// Services
import AsideController from './services/aside-components/aside-controller';
import useModal from './services/aside-components/modal';
import useToast from './services/aside-components/toast';
import useOverflow from './services/aside-components/overflow';

// Types
import Customer from './types/Customer';
import Group from './types/Group';
import License from './types/License';
import Order from './types/Order';
import Product from './types/Product';
import ProductSize from './types/ProductSize';
import Rule from './types/Rule';
import Sector from './types/Sector';
import Theme from './types/Theme';
import User from './types/User';
import UserProfile from './types/UserProfile';
import Warehouse from './types/Warehouse';
import Withdraw from './types/Withdraw';
import { TableRowProps, TableRowEvents } from './components/Table';

export {
    DarkTheme,
    LightTheme,
    setGlobalTheme,
    getGlobalTheme
};

export {
    Animations,
    Icons,
    Spinners
};

export {
    Badge,
    Button,
    CardBase,
    Checkbox,
    Datepicker,
    Icon,
    ImageAvatar,
    Input,
    Tab,
    Table,
    TableColumn,
    Tabs
};

export {
    AsideController,
    useModal,
    useOverflow,
    useToast
};

export type {
    Customer,
    Group,
    License,
    Order,
    Product,
    ProductSize,
    Rule,
    Sector,
    TableRowEvents,
    TableRowProps,
    Theme,
    User,
    UserProfile,
    Warehouse,
    Withdraw
};