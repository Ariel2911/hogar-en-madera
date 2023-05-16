import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
// import ProductCard, { ProductCardTypeEnum } from './components/productCard';
import Header from './components/header';
import Footer from './components/footer';

import {
	contactInformation,
	socialNetwork,
	copyRight,
} from './data/dataFooter';

import logo from './assets/header/Logo.png';
import logoFooter from './assets/footer/logoFooter.png';

function App(): JSX.Element {
	const navBarItems = ['inicio', 'categorias', 'productos', 'contacto'];

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Header navBarItems={navBarItems} logo={logo} />

			<Footer
				logo={logoFooter}
				socialNetwork={socialNetwork}
				contactInformation={contactInformation}
				copyRight={copyRight}
			/>
		</ThemeProvider>
	);
}

export default App;
