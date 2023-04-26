import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
import Home from './pages/home';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
}

export default App;
