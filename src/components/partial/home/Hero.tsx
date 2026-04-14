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
      max-width: 450px;
      margin-left: auto;
      background: linear-gradient(135deg, ${({ theme }) => theme.expCard} 0%, ${({ theme }) => theme.expCardHover} 100%);
      border: 2px solid ${({ theme }) => theme.expCardHover};
      border-radius: 1.5rem;
      padding: 0.8rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
        border-radius: 1.5rem;
        pointer-events: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        filter: ${({ theme }) => (theme.primaryBg === '#FFFFFF' ? 'none' : 'brightness(1.05) contrast(1.1)')};
        transition: transform 0.3s ease, filter 0.3s ease;
        
        &:hover {
          transform: scale(1.02);
          filter: ${({ theme }) => (theme.primaryBg === '#FFFFFF' ? 'brightness(1.05) contrast(1.15)' : 'brightness(1.1) contrast(1.2)')};
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
                YOUR NAME
                <br />
                HERE
              </h1>
              <p className="me_txt">
               Flutter Developer specializing in cross-platform mobile and web applications. Expert in building scalable e-commerce solutions, real-time communication systems, and performance-optimized user interfaces.
              </p>
              <a
                href="/assets/docs/Your_Name_CV.pdf"
                download="Your_Name_CV.pdf"
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
