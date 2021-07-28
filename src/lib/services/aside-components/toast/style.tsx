import { getGlobalTheme } from '../../../assets/themes';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ToastProps {
	color: string;
}

export const ToastElement = styled(motion.div)<ToastProps>`
	position: fixed;
	width: 1024px;
	left: calc(50% - 512px);
	padding: 15px;
	bottom: -100px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props): string =>
		getGlobalTheme().colors[props.color].principal};
	color: ${(props): string => getGlobalTheme().colors[props.color].contrast};
	font-size: ${() => getGlobalTheme().font.p1.fontSize};
	font-weight: ${() => getGlobalTheme().font.p1.fontWeight};
	border-radius: ${() => getGlobalTheme().borderRadius};
	box-shadow: ${() => getGlobalTheme().boxShadow.normal};

	@media screen and (max-width: 1024px) {
		width: calc(100% - 30px);
		left: 15px;
	}
`;
