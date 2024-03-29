import './index.css';

import {
	LightTheme,
	DarkTheme,
	setGlobalTheme,
	getGlobalTheme,
} from './assets/themes';
import {
	validate,
	Validators,
	InputValidator,
} from './services/input-validator';
import Animations from './assets/animations';
import AsideController from './services/aside-components/aside-controller';
import Badge from './components/Badge';
import Button from './components/Button';
import CardBase from './components/CardBase';
import Checkbox, { CheckboxToggleEvent } from './components/Checkbox';
import Datepicker from './components/Datepicker';
import Icon from './components/Icon';
import Icons from './assets/svgs/icons';
import ImageAvatar from './components/ImageAvatar';
import Input from './components/Input';
import ScrollableContainer from './components/ScrollableContainer';
import Spinners from './assets/svgs/spinners';
import Tab from './components/Tabs/tab';
import Table, {
	TableRowProps,
	TableRowEvents,
	TableRowEventHandler,
} from './components/Table';
import TableColumn from './components/Table/table-column';
import Tabs from './components/Tabs';
import TextArea from './components/TextArea';
import Theme from './types/Theme';
import useModal, {
	ModalController,
	ModalConfig,
} from './services/aside-components/modal';
import useOverflow, {
	OverflowController,
	OverflowConfig,
} from './services/aside-components/overflow';
import useToast, {
	ToastController,
	ToastConfig,
} from './services/aside-components/toast';

export {
	Animations,
	AsideController,
	Badge,
	Button,
	CardBase,
	Checkbox,
	DarkTheme,
	Datepicker,
	getGlobalTheme,
	Icon,
	Icons,
	ImageAvatar,
	Input,
	LightTheme,
	ModalController,
	OverflowController,
	ScrollableContainer,
	setGlobalTheme,
	Spinners,
	Tab,
	Table,
	TableColumn,
	Tabs,
	TextArea,
	ToastController,
	useModal,
	useOverflow,
	useToast,
	validate,
	Validators,
};

export type {
	CheckboxToggleEvent,
	InputValidator,
	ModalConfig,
	OverflowConfig,
	TableRowEventHandler,
	TableRowEvents,
	TableRowProps,
	Theme,
	ToastConfig,
};

export * from './components';
