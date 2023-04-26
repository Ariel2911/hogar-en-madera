import { Header, Footer } from '..';

interface Props {
	navBarItems: string[];
	logo: string;
	socialNetwork: JSX.Element[];
	contactInformation: Array<{
		icon: JSX.Element;
		data: string;
	}>;
	copyRight: string;
	madeBy: string;
}

const App = (props: Props): JSX.Element => {
	return (
		<>
			<Header navBarItems={props.navBarItems} logo={props.logo} />

			<Footer
				logo={props.logo}
				socialNetwork={props.socialNetwork}
				contactInformation={props.contactInformation}
				copyRight={props.copyRight}
				madeBy={props.madeBy}
			/>
		</>
	);
};

App.defaulProps = {};

export default App;
