import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;        
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.typography.primaryTypography};
      font-family: ${(props) => props.theme.fonts.primary}
    }
`;
