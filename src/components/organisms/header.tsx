import styled from 'styled-components';
import MenuButton from '../atoms/menuButton';
import CartButton from '../atoms/cartButton';

import NavBar from '../atoms/navBar';
import { useState } from 'react';

const Container = styled.header`
	position: sticky;
	top: 0;
	z-index: 9999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: ${({ theme }) => theme.shadown};
`;

const Logo = styled.img`
	width: 7.5rem;
	height: 2rem;
`;

interface Props {
	navBarItems: string[];
	logo: string;
}

const App = (props: Props): JSX.Element => {
	const [active, setActive] = useState(false);

	const handleClick = (isActive: boolean): void => {
		setActive(!isActive);
	};

	return (
		<Container>
			<MenuButton isActive={handleClick} active={active} />
			<NavBar active={active} items={props.navBarItems} />
			<Logo src={props.logo} />
			<CartButton />
		</Container>
	);
};

export default App;
