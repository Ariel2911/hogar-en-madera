import styled from 'styled-components';

const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border: 1px solid ${(props) => props.theme.colors.secondary};
	outline: none;
	border-radius: 50%;
	cursor: pointer;
	box-shadow: ${(props) => props.theme.shadown};

	&:hover {
		transform: scale(1.1);
	}
`;

const Arrow = styled.div<{ arrowType: ArrowTypeEnum }>`
	width: 14px;
	height: 14px;
	border-color: ${(props) => props.theme.colors.black};
	border-left-color: transparent;
	border-bottom-color: transparent;
	border-width: 1.5px;
	border-style: solid;
	border-radius: 4px;

	transform: ${({ arrowType }) => {
		const type = {
			arriba: 'rotate(-45deg)',
			derecha: 'rotate(45deg)',
			abajo: 'rotate(135deg)',
			izquierda: 'rotate(-135deg)',
		};
		return type[arrowType];
	}};
`;

export enum ArrowTypeEnum {
	arriba = 'arriba',
	derecha = 'derecha',
	abajo = 'abajo',
	izquierda = 'izquierda',
}

interface Props {
	arrowType: ArrowTypeEnum;
}

const App = (props: Props): JSX.Element => (
	<Container>
		<Arrow arrowType={props.arrowType} />
	</Container>
);

export default App;
