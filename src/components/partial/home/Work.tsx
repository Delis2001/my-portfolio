import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Container } from "../../Container";
import nova from "../../../../public/assets/images/logo/nova.png";
import bict from "../../../../public/assets/images/logo/bict.png";
import cousant from "../../../../public/assets/images/logo/cousent.png";
import devAmplify from "../../../../public/assets/images/logo/dev_amplify.png";
import oakSoft from "../../../../public/assets/images/logo/oak_soft.png";
import hoh from "../../../../public/assets/images/logo/hoh.png";
import exai from "../../../../public/assets/images/logo/exai.svg";
import fm from "../../../../public/assets/images/logo/featuremind.webp";
import zarttech from "../../../../public/assets/images/logo/zarttech.png";
import kodex from "../../../../public/assets/images/logo/kodex.png";

type d = { icon: string; title: string };
const skills: d[] = [
  {
    icon: "bx bx-mobile-alt",
    title: "Mobile App <br/> Development",
  },
  {
    icon: "bx bx-devices",
    title: "Frontend Web<br/> Development",
  },
  {
    icon: "bx bx-data",
    title: "Backend Web<br/> Development<br/>(NestJS, Node.js)",
  },
];

const Wrapper = styled.section`
  padding-block: 6em;
  background-color: ${({ theme }: Props) => theme.secondaryBg};
  position: relative;

  .intro {
    justify-content: space-between;
    .line {
      flex: 1;
      margin-left: 2em;
      width: 100%;
      height: 1px;
      background: ${({ theme }: Props) => theme.txtPrimary400};
    }
  }

  .worked__with {
    margin-top: 4em;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minMax(6em, 1fr));

    img {
      width: 70%;
      cursor: pointer;
      margin-inline: auto;

      &:not(:first-child) {
        transition: 0.4s;
        object-fit: contain;
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */

        &:hover {
          filter: none;
          -webkit-filter: grayscale(0%);
        }
      }
    }
  }

  .skills {
    gap: 1em;
    margin-top: 2em;
  }

  .expo__skill-set {
    position: relative;
    z-index: 2;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    margin-top: 3em;
  }

  .experience-item {
    background: ${({ theme }: Props) => theme.expCard};
    border-radius: 12px;
    padding: 2em;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }: Props) => theme.expCardHover}20;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      border-color: ${({ theme }: Props) => theme.expCardHover};
    }

    h3 {
      color: ${({ theme }: Props) => theme.txtPrimary400};
      margin-bottom: 0.5em;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .company {
      color: ${({ theme }: Props) => theme.expCardHover};
      font-weight: 500;
      margin-bottom: 0.3em;
      display: flex;
      align-items: center;
      gap: 0.5em;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }: Props) => theme.txtPrimary400};
        }
      }
    }

    .duration {
      color: ${({ theme }: Props) => theme.txtPrimary300};
      font-size: 0.9rem;
      margin-bottom: 1.5em;
      font-weight: 500;
    }

    .roles {
      ul {
        list-style: none;
        padding: 0;

        li {
          position: relative;
          padding-left: 1.5em;
          margin-bottom: 0.8em;
          color: ${({ theme }: Props) => theme.txtPrimary300};
          line-height: 1.6;

          &::before {
            content: "£";
            position: absolute;
            left: 0;
            color: ${({ theme }: Props) => theme.expCardHover};
            font-weight: bold;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .experience-grid {
      grid-template-columns: 1fr;
      gap: 1.5em;
    }

    .experience-item {
      padding: 1.5em;
    }
  }

  .expo {
    margin-top: 6em;
    display: none;

    @media (min-width: 50em) {
      display: grid;
      align-items: start;
      grid-template-columns: minmax(250px, 1fr) 3.5fr;
    }

    .yr {
      font-size: 6rem;
      font-weight: var(--fw-semi-bold);
      justify-content: flex-start;
      align-items: baseline;

      span {
        font-size: 4rem;
        margin-left: 0.3em;
      }
    }
    .box {
      height: 250px;
      display: grid;
      align-items: center;
      padding: 1em;
      // position: relative;
      z-index: 10 !important;
      transition: 0.4s;
      background: ${({ theme }: Props) => theme.expCard};

      &:hover {
        background: ${({ theme }: Props) => theme.expCardHover};
        color: ${({ theme }: Props) => theme.txtPrimary100};

        h3,
        a {
          color: ${({ theme }: Props) => theme.txtPrimary100};
        }
        p {
          opacity: 1;

          & > i.bx {
            margin-left: 1.5em;
          }
        }
      }
      & > .bx {
        font-size: 2.5rem;
      }

      p {
        transition: opacity 0.4s;
        opacity: 0;
        font-size: 0.8rem;
        margin-top: 0.8em;
        & > i.bx {
          transition: margin-left 0.4s;
          display: inline-block;
        }
      }
    }
  }
`;

const Work = () => {
  return (
    // <Fade ssrFadeout bottom>
    <Wrapper>
      <h1 className="side">Work</h1>
      <Container>
        <p className="flex intro">
          Companies I&#39;ve Worked With <span className="line"></span>
        </p>
        <div className="grid worked__with">
          <a href="https://kodexafrica.com" target="_blank" rel="noopener noreferrer">
            <Image src={kodex} alt="Kodex Africa" />
          </a>
        </div>

        <div className="grid expo even-columns">
          <Fade ssrFadeout bottom>
            <div className="expo__years">
              <p className="yr flex">
                3 <span>+</span>
              </p>
              <p>Years Experience Working.</p>
            </div>
          </Fade>
          <div className="expo__skill-set">
            <p>
             I have worked in a full-capacity role as a Flutter mobile application developer across all the aforementioned organizations
            </p>
            <Fade ssrFadeout bottom>
              <div className="skills even-columns grid">
                {skills.map((s) => (
                  <SkillWrap {...s} key={s.title} />
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </Wrapper>
    // </Fade>
  );
};

const SkillWrap = ({ title, icon }: d) => {
  return (
    <div className="box">
      <i className={icon}></i>
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
      <a href="mailto:nwoyefidelischidera@gmail.com">
        <p>
          Hire Me <i className="bx bx-right-arrow-alt"></i>
        </p>
      </a>
    </div>
  );
};

export default Work;
