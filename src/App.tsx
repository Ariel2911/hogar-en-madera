import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
import Button, { StyleTypeEnum } from './components/button';
import Tag, { TagTypeEnum } from './components/tag';
import ArrowButton, { ArrowTypeEnum } from './components/arrowButton';

import { iconBag } from './components/iconos';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Button />
			<Button styleType={StyleTypeEnum.ghost} />
			<Button
				label='Ver mi compra'
				styleType={StyleTypeEnum.ghost}
				svg={iconBag}
			/>
			<br />
			<br />
			<hr />
			<br />
			<br />
			<Tag name='marca' tagType={TagTypeEnum.destacado} />
			<Tag name='novedad' tagType={TagTypeEnum.novedad} />
			<Tag name='oferta' tagType={TagTypeEnum.oferta} />
			<Tag name='agotado' tagType={TagTypeEnum.agotado} />
			<br />
			<br />
			<hr />
			<br />
			<br />
			<ArrowButton arrowType={ArrowTypeEnum.arriba} />
			<ArrowButton arrowType={ArrowTypeEnum.derecha} />
			<ArrowButton arrowType={ArrowTypeEnum.abajo} />
			<ArrowButton arrowType={ArrowTypeEnum.izquierda} />
			<br />
			<br />
			<hr />
			<br />
			<br />
		</ThemeProvider>
	);
}

export default App;
