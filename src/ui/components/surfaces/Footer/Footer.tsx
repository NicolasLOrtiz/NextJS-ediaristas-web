import {
    AppList,
    FooterContainer,
    FooterStyled,
    FooterTitle
} from "./Footer.style";
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{maxWidth: '400px'}}>
                    <FooterTitle>
                        Quem somos
                    </FooterTitle>
                    <Typography variant={'body2'} sx={{mt: 2}}>
                        O e-diaristas te ajuda a encontrar um profissional
                        perfeito para realizar a limpeza da sua casa. Garantimos
                        os melhores profissionais com total segurança e
                        praticidade! São milhares de clientes satisfeitos por
                        todo o país.
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={"noopener noreferrer"}
                            >
                                <img src={'/img/logos/app-store.png'}
                                     alt={'App Store'}/>
                            </a>

                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={"noopener noreferrer"}
                            >
                                <img src={'/img/logos/google-play.png'}
                                     alt={'App Store'}/>
                            </a>
                        </li>
                    </AppList>
                </div>

            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer;