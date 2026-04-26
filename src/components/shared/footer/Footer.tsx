import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";

const Wrapper = styled.footer.attrs({className: 'footer'})`
    padding-block: 6em;

    .flex{
        gap: 1em;
        font-size: 1.9rem;
        margin-top: 1.4em;

        a{
            color: ${({theme}: Props) => theme.expCardHover};
        }
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <p className="text-center">Designed & Built with passion by Nwoye Fidelis Chidera &copy;{new Date().getFullYear()}</p>

                <ul role='list' className="flex">
                    <li><a href="https://www.linkedin.com/in/fidelis-chidera-622242330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-linkedin-square' ></i></a></li>
                    <li><a href="https://github.com/Delis2001" target='_blank'  referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://wa.link/nuefg7" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-whatsapp'></i></a></li>
                    <li><a href="tel:+2348121685344"><i className='bx bx-phone'></i></a></li>
                </ul>
            </Container>
        </Wrapper>
    );
}

export default Footer;