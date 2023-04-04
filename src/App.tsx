import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<h1>Lato</h1>
		</ThemeProvider>
	);
}

export default App;
