import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormElement = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// Export FormElement as Form for backwards compatibility
export const Form = FormElement;
export default Form;
