import styled from 'styled-components';

const Container = styled.div`
	padding: 1rem 1rem 0.25rem 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.typography.secondaryTypography};
	& h2 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}
	& p {
		margin-bottom: 0;
		font-size: 0.75rem;
	}
	& a {
		padding: 0;
	}
	& svg path {
		fill: white;
	}
`;

const Logo = styled.img`
	width: 100px;
	height: 24px;
`;

const SocialNetwork = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const Contact = styled.div``;

const ContactInformation = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin: 0.25rem 0;
	& p {
		margin: 0;
	}
`;

const Footer = styled.div`
	text-align: center;
	& p {
		margin: 0;
	}
`;

interface Props {
	logo: string;
	socialNetwork: Array<{
		icon: JSX.Element;
		url: string;
	}>;
	contactInformation: Array<{
		icon: JSX.Element;
		data: string;
	}>;
	copyRight: string;
}

const App = (props: Props): JSX.Element => (
	<Container>
		<Logo src={props.logo} />
		<h2>Seguinos</h2>
		<SocialNetwork>
			{props.socialNetwork.map(({ icon, url }) => (
				<a key={url} href={url}>
					{icon}
				</a>
			))}
		</SocialNetwork>
		<Contact>
			<h2>Contactanos</h2>
			{props.contactInformation.map(({ icon, data }) => (
				<ContactInformation key={data}>
					{icon}
					<p>{data}</p>
				</ContactInformation>
			))}
		</Contact>
		<Footer>
			<p>Copyright © {props.copyRight}</p>
			<p>Desarrollado por Ariel Barrios</p>
		</Footer>
	</Container>
);

export default App;
