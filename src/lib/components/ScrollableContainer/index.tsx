import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ScrollableContainerProps {
	flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

// type ThemedScrollableContainer =
//     <C extends keyof JSX.IntrinsicElements>(c: C) => any;

const ScrollableContainer = styled(motion.div)<ScrollableContainerProps>`
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

export default ScrollableContainer;
