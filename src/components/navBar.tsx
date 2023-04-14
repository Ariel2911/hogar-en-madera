import styled from 'styled-components';

const Container = styled.nav<{ isActive: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
	width: 100vw;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	transform: ${({ isActive }) =>
		!isActive ? 'translateX(-100vw)' : 'translateX(0)'};
	transition: transform 0.6s;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	margin: 4rem 0;
	list-style: none;
`;

const Item = styled.li`
	margin: 4vh;
	cursor: pointer;
`;

interface Props {
	active: boolean;
	items: string[];
}

const App = (props: Props): JSX.Element => {
	return (
		<Container isActive={props.active}>
			<List>
				{props.items.map((item, id) => (
					<Item key={id}>{item}</Item>
				))}
			</List>
		</Container>
	);
};

export default App;
