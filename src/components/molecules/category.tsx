import styled, { css } from 'styled-components';

const Container = styled.div<{ categoryType: CategoryTypeEnum }>`
	display: flex;
	flex-direction: column;
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadown};

	${({ categoryType }) =>
		categoryType === 'card'
			? css`
					flex-direction: column-reverse;
					border-radius: 4px;
					& h2 {
						font-weight: 500;
						font-size: 20px;
					}
					& img {
						border-radius: 8px;
					}
			  `
			: css`
					& h2 {
						font-weight: 700;
						font-size: 28px;
					}
			  `}
`;
const Title = styled.h2`
	font-family: ${({ theme }) => theme.fonts.secondary};
	text-transform: uppercase;
`;
const Img = styled.img`
	width: 100%;
`;

export enum CategoryTypeEnum {
	default = 'default',
	card = 'card',
}

interface Props {
	title: string;
	img: string;
	categoryType: CategoryTypeEnum;
}

/**
 *
 * @param props
 * @param title string con el título del componente.
 * @param img string con la ubicación de la imagen.
 * @params categoryType string con el tipo de formato
 *
 * @returns JSX.Element
 *
 * @example
 * <Category title='Organizadores' img={imgCategory} categoryType={CategoryTypeEnum.default} />
 */

const App = (props: Props): JSX.Element => (
	<Container categoryType={props.categoryType}>
		<Title>{props.title}</Title>
		<Img src={props.img} alt='' />
	</Container>
);

export default App;
