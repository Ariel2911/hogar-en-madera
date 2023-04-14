import styled from 'styled-components';
import { iconBag } from './iconos';

const Container = styled.button`
	position: relative;
	width: 2.5rem;
	height: 2rem;
	padding: 0;
	border: none;
	outline: none;
	background-color: transparent;
	& svg {
		width: 32px;
		height: 32px;
	}
`;

const Number = styled.p`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 0.25rem;
	margin: 0;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
`;

const App = (): JSX.Element => {
	const amountCart = '0';

	return (
		<Container>
			<Number>{amountCart}</Number>
			{iconBag}
		</Container>
	);
};

export default App;
