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
      max-width: 320px;
      margin-left: auto;
      background: linear-gradient(135deg, ${({ theme }) => theme.expCard} 0%, ${({ theme }) => theme.expCardHover} 100%);
      border: 2px solid ${({ theme }) => theme.expCardHover};
      border-radius: 1rem;
      padding: 0.4rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.08);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%);
        border-radius: 1rem;
        pointer-events: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.8rem;
        filter: ${({ theme }) => (theme.primaryBg === '#FFFFFF' ? 'brightness(1.02) contrast(1.05)' : 'brightness(1.05) contrast(1.08)')};
        transition: transform 0.3s ease, filter 0.3s ease;
        
        &:hover {
          transform: scale(1.01);
          filter: ${({ theme }) => (theme.primaryBg === '#FFFFFF' ? 'brightness(1.05) contrast(1.08)' : 'brightness(1.08) contrast(1.12)')};
        }
      }
    }
  }
`;

const Hero = () => {
  const glitch = useGlitch();
  return (
    <HeroWrapper>
      <h1 className="side">FLUTTER</h1>
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
             Full-Stack Developer focused on building scalable mobile, web, and backend applications using Flutter, Next.js, and NestJS.
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
            <Image src={kingsley} priority alt="Flutter Developer Profile" />
          </div>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
