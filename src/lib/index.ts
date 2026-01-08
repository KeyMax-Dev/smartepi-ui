import "./index.css";

import Animations from "./assets/animations";
import Icons from "./assets/svgs/icons";
import Spinners from "./assets/svgs/spinners";
import {
	DarkTheme,
	LightTheme,
	getGlobalTheme,
	setGlobalTheme,
} from "./assets/themes";
import Badge from "./components/Badge";
import Button from "./components/Button";
import CardBase from "./components/CardBase";
import Checkbox from "./components/Checkbox";
import type { CheckboxToggleEvent } from "./components/Checkbox";
import Datepicker from "./components/Datepicker";
import Icon from "./components/Icon";
import ImageAvatar from "./components/ImageAvatar";
import Input from "./components/Input";
import ScrollableContainer from "./components/ScrollableContainer";
import Table from "./components/Table";
import type {
	TableRowEventHandler,
	TableRowEvents,
	TableRowProps,
} from "./components/Table";
import TableColumn from "./components/Table/table-column";
import Tabs from "./components/Tabs";
import Tab from "./components/Tabs/tab";
import TextArea from "./components/TextArea";
import AsideController from "./services/aside-components/aside-controller";
import useModal from "./services/aside-components/modal";
import type {
	ModalConfig,
	ModalController,
} from "./services/aside-components/modal";
import useOverflow from "./services/aside-components/overflow";
import type {
	OverflowConfig,
	OverflowController,
} from "./services/aside-components/overflow";
import useToast from "./services/aside-components/toast";
import type {
	ToastConfig,
	ToastController,
} from "./services/aside-components/toast";
import { Validators, validate } from "./services/input-validator";
import type { InputValidator } from "./services/input-validator";
import type Theme from "./types/Theme";

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
	ScrollableContainer,
	setGlobalTheme,
	Spinners,
	Tab,
	Table,
	TableColumn,
	Tabs,
	TextArea,
	useModal,
	useOverflow,
	useToast,
	validate,
	Validators,
};

// Export classes as both value and type
export { ModalController } from "./services/aside-components/modal";
export { OverflowController } from "./services/aside-components/overflow";
export { ToastController } from "./services/aside-components/toast";

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

export * from "./components";
