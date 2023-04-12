import styled, { css } from 'styled-components';
import Thumbnails from './thumbnails';
import { useState } from 'react';

const Container = styled.div<{ categoryType: ProductCardTypeEnum }>`
	display: flex;
	flex-direction: column;
	gap: 8px;
	position: relative;
	text-align: start;
	border-radius: 4px;
	font-family: ${({ theme }) => theme.fonts.secondary};
	text-transform: uppercase;
	overflow: hidden;

	& h2 {
		margin: 0;
		font-size: 28px;
	}
	& h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 500;
	}
	& p {
		position: absolute;
		right: 0.5rem;
		bottom: 0rem;
		margin: 0;
		color: ${({ theme }) => theme.colors.secondary};
	}

	${({ categoryType }) =>
		categoryType === 'cart' &&
		css`
			flex-direction: row;
			border-radius: 4px;
			& img {
				width: 90px;
				height: 90px;
				border-radius: 4px;
			}
			& p {
				position: static;
			}
		`}

	${({ categoryType }) =>
		categoryType === 'card' &&
		css`
			max-width: 256px;
			text-align: center;
			box-shadow: ${({ theme }) => theme.shadown};
			& div {
				padding: 0.25rem;
			}
			& h2 {
				font-size: 1rem;
			}
			& h3 {
				font-size: 0.75rem;
			}
			& p {
				position: static;
			}
		`}
`;

const Img = styled.img`
	width: 100%;
`;

export enum ProductCardTypeEnum {
	card = 'card',
	cart = 'cart',
	full = 'full',
}

interface Props {
	img: string[] | string;
	title: string;
	categoty: string;
	price: string;
	productCardType: ProductCardTypeEnum;
}

/**
 *
 * @param props
 * @param img string o string[] con la ubicación de la o las imagenes.
 * @param title string con el título del componente.
 * @param category string con la categoria.
 * @param price string con el precio.
 * @params categoryType string con el tipo de formato
 *
 * @returns JSX.Element
 *
 * @example
 * <ProductCard title='Lámpara Farol' img={imgProduct00} productCardType={ProductCardTypeEnum.cart} categoty='Lámparas' price='$399.00' />
 * <ProductCard title='Lámpara Farol' img={[imgProduct00, imgProduct01, imgProduct02]} productCardType={ProductCardTypeEnum.full} categoty='Lámparas' price='$399.00' />
 */

const App = (props: Props): JSX.Element => {
	const [selected, setSelected] = useState(0);

	const handleClick = (id: number): void => {
		setSelected(id);
	};

	return (
		<Container categoryType={props.productCardType}>
			{typeof props.img === 'string' ? (
				<Img src={props.img} alt='' />
			) : (
				<Img src={props.img[selected]} alt='' />
			)}

			{typeof props.img === 'object' && (
				<Thumbnails
					imgs={props.img}
					onClick={handleClick}
					selected={selected}
				/>
			)}
			<div>
				<h2>{props.title}</h2>
				<h3>{props.categoty}</h3>
				<p>{props.price}</p>
			</div>
		</Container>
	);
};

export default App;
