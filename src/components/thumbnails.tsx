import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;

	.isActive {
		border-color: ${({ theme }) => theme.colors.secondary};
		box-shadow: ${({ theme }) => theme.shadown};
	}
`;

const Button = styled.button`
	width: 32px;
	height: 32px;
	padding: 0;
	border: 2px solid transparent;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

interface Props {
	imgs: string[];
	selected: number;
	onClick: (id: number) => void;
}

/**
 *
 * @param props
 * @param img string con la ubicación de la imagen.
 * @param selected id de la imagen seleccionada
 * @params onClick función que se ejecutara con el evento onClick del componente
 *
 * @returns JSX.Element
 *
 * @example
 * <Thumbnails imgs={string[]} onClick={():number => handleClick(id:number)} selected={selected} />
 */

const App = (props: Props): JSX.Element => {
	const handleClick = (id: number): void => {
		props.onClick(id);
	};

	return (
		<Container>
			{props.imgs.map((img, key) => {
				const className = key === props.selected ? 'isActive' : '';

				return (
					<Button
						onClick={() => {
							handleClick(key);
						}}
						className={className}
						key={key}
					>
						<Img src={img} alt='' />
					</Button>
				);
			})}
		</Container>
	);
};

export default App;
