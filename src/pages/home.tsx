import DefaultLayout from '../components/templates/defaultLayout';

const App = (): JSX.Element => {
	const navBarItems = ['inicio', 'categorías', 'productos', 'contacto'];

	return (
		<>
			<DefaultLayout
				navBarItems={navBarItems}
				logo={''}
				socialNetwork={[]}
				contactInformation={[]}
				copyRight={''}
				madeBy={''}
			/>
		</>
	);
};

export default App;
