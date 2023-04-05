import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
import Button, { StyleTypeEnum } from './components/button';
import Tag, { TagTypeEnum } from './components/tag';

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
			<hr />
			<Tag name='marca' tagType={TagTypeEnum.destacado} />
			<Tag name='novedad' tagType={TagTypeEnum.novedad} />
			<Tag name='oferta' tagType={TagTypeEnum.oferta} />
			<Tag name='agotado' tagType={TagTypeEnum.agotado} />
		</ThemeProvider>
	);
}

export default App;
