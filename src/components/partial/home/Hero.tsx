import Image from "next/image";
import styled from "styled-components";
import { useGlitch } from "react-powerglitch";
import { Container } from "../../Container";
import Button from "../../shared/Button";
import kingsley from "../../../../public/assets/images/man.png";
import FadeIn from "react-fade-in";
import { Circle, Hex, Ke } from "../../Shape";

const HeroWrapper = styled.section`
  padding-top: 4em;
  min-height: 30em;
  position: relative;
  overflow: hidden;
  p {
    margin-block: 1.3em;
  }

  .hero__image {
    display: none;

    @media (min-width: 50em) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 420px;
      margin-left: auto;
      background: ${({ theme }) => theme.expCard};
      border: 1px solid ${({ theme }) => theme.expCardHover};
      border-radius: 1rem;
      padding: 0.6rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75rem;
        filter: ${({ theme }) => (theme.primaryBg === '#FFFFFF' ? 'none' : 'brightness(1.1)')};
      }
    }
  }
`;

const Hero = () => {
  const glitch = useGlitch();
  return (
    <HeroWrapper>
      <h1 className="side">NFC</h1>
      <Ke />
      <Hex />
      <Circle />
      <Container>
        <div className="hero_container grid even-columns">
          <div className="hero__detail">
            <FadeIn delay={250}>
              <p className="text-primary-300">Hi, my name is</p>
              <h1 ref={glitch.ref}>
                NWOYE FIDELIS 
                <br />
                CHIDERA
              </h1>
              <p className="me_txt">
               Flutter Developer focused on building scalable, high-performance mobile and web applications. Passionate about clean code, problem-solving, and creating user-centric digital experiences.
              </p>
              <a
                href="/assets/docs/Nwoye_Fidelis_Chidera.pdf"
                download="Nwoye_Fidelis_Chidera.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button inverse={true}>DOWNLOAD CV</Button>
              </a>
            </FadeIn>
          </div>
          <div className="hero__image">
            <Image src={kingsley} priority alt="Nwoye Fidelis Chidera" />
          </div>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
