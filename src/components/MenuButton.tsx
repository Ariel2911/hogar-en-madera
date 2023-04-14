import styled from 'styled-components';

const Container = styled.button`
	position: relative;
	z-index: 99;
	width: 1.5rem;
	height: 2rem;
	padding: 0;
	border: none;
	outline: none;
	background: none;
	cursor: pointer;
`;

const MenuIcon = styled.div<{ isActive: boolean }>`
	position: relative;
	z-index: 9;
	width: 100%;
	height: 0.125rem;
	border-radius: 0.125rem;
	background-color: ${({ isActive }) => (!isActive ? 'black' : 'transparent')};
	transition: background-color 0.2s ease;
	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 0.125rem;
		border-radius: 0.125rem;
		background-color: black;
		transform: ${({ isActive }) =>
			!isActive ? 'translateY(0.5rem)' : 'rotate(45deg)'};
		transition: transform 0.5s ease;
	}
	&::before {
		transform: ${({ isActive }) =>
			!isActive ? 'translateY(-0.5rem)' : 'rotate(-45deg)'};
	}
`;

interface Props {
	isActive: (isActive: boolean) => void;
	active: boolean;
}

const App = (props: Props): JSX.Element => {
	const handleClick = (active: boolean): void => {
		props.isActive(active);
	};

	return (
		<Container
			onClick={() => {
				handleClick(props.active);
			}}
		>
			<MenuIcon isActive={props.active} />
		</Container>
	);
};

export default App;
