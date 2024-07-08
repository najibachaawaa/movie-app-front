// src/Contexts/CustomThemeProvider.js
import { ThemeProvider } from 'styled-components';
import colors from '../Styles/color.module.scss';
import sizes from '../Styles/size.module.scss';
import screens from '../Styles/screen.module.scss';
import fonts from '../Styles/font.module.scss';

export const CustomThemeProvider = ({ children }) => {
    const theme = {
        colors: {
            ...colors,
        },
        globalSize: {
            ...sizes,
        },
        fonts: {
            ...fonts,
        },
        devices: {
            desktop: `@media only screen and (min-width: ${screens.desktop})`,
            tablet: `@media only screen and (max-width: ${screens.tablet})`,
            tabletOnly: `@media only screen and (min-width: ${screens.tablet}) and (max-width: ${screens.desktop})`,
            mobile: `@media only screen and (max-width: ${screens.mobile})`,
            desktopOnly: `@media only screen and (min-width: ${screens.desktop}) and (max-width: ${screens.fullhdRealWidth})`,
            fullhd: `@media only screen and (min-width: ${screens.fullhd})`,
            fullhdRealWidth: `@media only screen and (min-width: ${screens.fullhdRealWidth})`,
        },
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}


