import '@styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import theme from "../ui/themes/theme";
import Header from "../ui/components/surfaces/Header/Header";
import Footer from "../ui/components/surfaces/Footer/Footer";
import {AppContainer} from "@styles/pages/_app.style";

function MyApp({Component, pageProps}: AppProps) {
    return (

        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </AppContainer>
        </ThemeProvider>

    );
}

export default MyApp
