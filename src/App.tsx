import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
import Button, { StyleTypeEnum } from './components/button';
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
		</ThemeProvider>
	);
}

export default App;
