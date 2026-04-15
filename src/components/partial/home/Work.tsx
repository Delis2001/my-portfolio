import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Container } from "../../Container";
import experienceData from "../../../data.json";
import chatbot from "../../../../public/assets/images/chatbot.png";
import doova from "../../../../public/assets/images/doova.png";
import buildafrica from "../../../../public/assets/images/market.png";
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
    title: "Backend Web<br/> Development",
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
  const experience = experienceData.experience;

  return (
    <Wrapper>
      <h1 className="side">Some Things I&apos;ve Built</h1>
      <Container>
        <div className="experience-grid">
          {experience.map((item, index) => (
            <Fade ssrFadeout bottom key={index} delay={index * 100}>
              <div className="experience-item">
                <div className="company">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.company}
                    <i className="bx bx-link-external" style={{ marginLeft: '0.5em', fontSize: '0.9em' }}></i>
                  </a>
                </div>
                
                <h3>{item.title}</h3>
                <div className="duration">{item.duration}</div>
                
                <div className="roles">
                  <ul>
                    {item.roles.map((role, roleIndex) => (
                      <li key={roleIndex}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </Wrapper>
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
