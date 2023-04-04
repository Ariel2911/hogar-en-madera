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

	${({ styleType }) =>
		styleType === 'ghost' &&
		css`
			background-color: ${(props) => props.theme.colors.background};
			color: ${(props) => props.theme.colors.typography.tertiaryTypography};
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
	icon?: string;
	onClick: () => void;
	styleType: StyleTypeEnum;
}

/**
 *
 * @param prop
 * @param label string con eltexto que mostrara el componente
 * @param icon string con la localización del icono
 * @param onClick función que se ejecutara con el evento click del componente
 * @param styleType nombre del tipo de botón
 *
 * @returns JSX.Element
 *
 * @example
 *  <Button label="Soy un botón"/>
 * <Button label="botón" styleType='ghost' icon="https://example.png"/>
 */

const App = (props: Props): JSX.Element => (
	<Button onClick={props.onClick} styleType={props.styleType}>
		{props.label}
		{props.icon !== undefined && <img src={props.icon} />}
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
