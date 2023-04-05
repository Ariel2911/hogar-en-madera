import styled from 'styled-components';

const Container = styled.div<{ tagType: TagTypeEnum }>`
	display: inline;
	padding: ${({ tagType }) =>
		tagType !== 'agotado' ? '0.25rem 0.75rem 0.25rem 0.25rem' : '0.25rem 1rem'};
	border-radius: ${({ tagType }) =>
		tagType !== 'agotado' ? '0 1rem 1rem 0' : '0.25rem'};
	background-color: ${({ theme, tagType }) => {
		const type = {
			destacado: theme.colors.secondary,
			novedad: theme.colors.primary,
			oferta: theme.colors.alert,
			agotado: theme.colors.exhausted,
		};
		return type[tagType];
	}};
`;

const Text = styled.p`
	display: inline;
	font-family: ${({ theme }) => theme.fonts.secondary};
	color: ${({ theme }) => theme.colors.typography.secondaryTypography};
	text-transform: uppercase;
`;

export enum TagTypeEnum {
	destacado = 'destacado',
	novedad = 'novedad',
	oferta = 'oferta',
	agotado = 'agotado',
}

interface Props {
	tagType: TagTypeEnum;
	name: string;
}

const App = (props: Props): JSX.Element => (
	<Container tagType={props.tagType}>
		<Text>{props.name}</Text>
	</Container>
);

export default App;
