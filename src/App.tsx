import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/global';
import theme from './styled/theme';
import Button, { StyleTypeEnum } from './components/button';
import Tag, { TagTypeEnum } from './components/tag';
import ArrowButton, { ArrowTypeEnum } from './components/arrowButton';
import Category, { CategoryTypeEnum } from './components/category';
import { iconBag } from './components/iconos';
// import Thumbnails from './components/thumbnails';
import ProductCard, { ProductCardTypeEnum } from './components/productCard';

import imgCategory from './assets/categoty/organizadores.png';
import imgProduct00 from './assets/product/lampara farol00.png';
import imgProduct01 from './assets/product/lampara farol01.png';
import imgProduct02 from './assets/product/lampara farol02.png';

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
			<div style={{ padding: '16px' }}>
				<Category
					title='Organizadores'
					img={imgCategory}
					categoryType={CategoryTypeEnum.card}
				/>
			</div>
			<br />
			<br />
			<br />
			<Category
				title='Organizadores'
				img={imgCategory}
				categoryType={CategoryTypeEnum.default}
			/>
			<br />
			<br />
			<hr />
			<br />
			<br />
			{/* <Thumbnails imgs={[imgProduct00, imgProduct01, imgProduct02]} onClick={() => 2} /> */}
			<br />
			<br />
			<hr />
			<br />
			<br />
			<div style={{ padding: '1rem' }}>
				<ProductCard
					title='Lámpara Farol'
					img={[imgProduct00, imgProduct01, imgProduct02]}
					productCardType={ProductCardTypeEnum.full}
					categoty='Lámparas'
					price='$399.00'
				/>

				<br />
				<ProductCard
					title='Lámpara Farol'
					img={imgProduct00}
					productCardType={ProductCardTypeEnum.cart}
					categoty='Lámparas'
					price='$399.00'
				/>

				<br />
				<ProductCard
					title='Lámpara Farol'
					img={imgProduct00}
					productCardType={ProductCardTypeEnum.card}
					categoty='Lámparas'
					price='$399.00'
				/>
			</div>
			<br />
			<br />
			<hr />
			<br />
			<br />
		</ThemeProvider>
	);
}

export default App;
