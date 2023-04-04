import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {
			primary: string;
			secondary: string;
		};

		colors: {
			background: string;
			primary: string;
			secondary: string;
			alert: string;
			exhausted: string;
			white: string;
			black: string;

			typography: {
				primaryTypography: string;
				secondaryTypography: string;
				tertiaryTypography: string;
			};
		};

		shadown: string;
	}
}
