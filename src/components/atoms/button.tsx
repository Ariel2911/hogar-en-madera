import styled, { css } from 'styled-components';

const Button = styled.button<{ styleType: string }>`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	border: 1px solid ${(props) => props.theme.colors.secondary};
	outline: none;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.typography.secondaryTypography};
	font-family: ${(props) => props.theme.fonts.secondary};
	cursor: pointer;
	box-shadow: ${(props) => props.theme.shadown};

	& svg path {
		stroke: ${(props) => props.theme.colors.typography.secondaryTypography};
	}

	${({ styleType }) =>
		styleType === 'ghost' &&
		css`
			background-color: ${(props) => props.theme.colors.background};
			color: ${(props) => props.theme.colors.typography.tertiaryTypography};
			& svg path {
				stroke: ${(props) => props.theme.colors.typography.tertiaryTypography};
			}
		`}

	&:hover {
		transform: scale(1);
	}
`;

export enum StyleTypeEnum {
	default = 'default',
	ghost = 'ghost',
}

interface Props {
	label: string;
	svg?: JSX.Element;
	onClick: () => void;
	styleType: StyleTypeEnum;
}

/**
 *
 * @param prop
 * @param label string con el texto que mostrara el componente
 * @param svg JSX.Element que contiene un icono en formato
 * @param onClick función que se ejecutara con el evento click del componente
 * @param styleType string con el tipo de botón
 *
 * @returns JSX.Element
 *
 * @example
 *  <Button label="Soy un botón"/>
 * 	<Button label="botón" styleType='ghost' svg={iconBag} />
 */

const App = (props: Props): JSX.Element => (
	<Button onClick={props.onClick} styleType={props.styleType}>
		{props.label}
		{props.svg}
	</Button>
);

App.defaultProps = {
	label: 'Soy un botón',
	onClick: () => {
		console.log('Presionaste el botón');
	},
	styleType: 'default',
};

export default App;
