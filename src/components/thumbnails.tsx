import { useState } from 'react';
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
`;

interface Props {
	imgs: string[];
	onClick: () => void;
}

/**
 *
 * @param props
 * @param img string con la ubicación de la imagen.
 * @params onClick función que se ejecutara con el evento onClick del componente
 *
 * @returns JSX.Element
 *
 * @example
 * <Thumbnails onClick={() => { console.log("Soy un thumbnail"); }} imgs={[imgProduct, imgProduct, imgProduct]} />
 */

const App = (props: Props): JSX.Element => {
	const [select, setSelect] = useState(0);

	const handleClick = (id: number): void => {
		setSelect(id);
		props.onClick();
	};

	return (
		<Container>
			{props.imgs.map((img, key) => {
				const className = key === select ? 'isActive' : '';

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

App.defaultProps = {
	onClick: () => {
		console.log('Soy un thumbnail');
	},
};

export default App;
