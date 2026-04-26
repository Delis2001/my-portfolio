import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Image, { StaticImageData } from "next/image";
import { Props } from "../../../theme/styling/GlobalStyle";
import hse from "../../../../public/assets/images/hse.png";
import mlm from "../../../../public/assets/images/mlm.png";
import oil from "../../../../public/assets/images/oil.png";
import nov from "../../../../public/assets/images/nov.png";
import rest from "../../../../public/assets/images/rest.png";
import oilapp from "../../../../public/assets/images/oilapp.png";
import curr from "../../../../public/assets/images/curr@2x.png";
import news from "../../../../public/assets/images/news.png";
import nova from "../../../../public/assets/images/nova@2x.png";
import breakn from "../../../../public/assets/images/break.png";
import pf from "../../../../public/assets/images/pf.png";
import may from "../../../../public/assets/images/mayuk@2x.png";
import kanban from "../../../../public/assets/images/kanban.png";
import market from "../../../../public/assets/images/market.png";
import nahdi from "../../../../public/assets/images/nahdi.png";
import studypal from "../../../../public/assets/images/study_pal.png";
import vendor from "../../../../public/assets/images/shopnest.png";
import mall from "../../../../public/assets/images/mall.png";
import tok from "../../../../public/assets/images/tok.png";
import chatbot from "../../../../public/assets/images/chatbot.png";
import doova from "../../../../public/assets/images/doova.png";
import novate from "../../../../public/assets/images/novate.png";
import noavicon from "../../../../public/assets/images/nova.png";
import { Container } from "../../Container";

type Project = {
  name: string;
  description: string;
  stack: string[];
  environment: { icon: string; link: string; title?: string }[];
  cover: StaticImageData;
  gallery?: StaticImageData[];
};
interface Wp {
  featured: Project[];
  fun: Project[];
}

const projects: Wp = {
  featured: [
    {
      name: "Build Africa",
      description:
        "A comprehensive multivendor e-commerce platform for building materials, built with Flutter and featuring real-time inventory management, payment processing, and vendor dashboards.",
      stack: [
        "Flutter",
        "Dart",
        "Firebase",
        "BLoC Pattern",
        "REST APIs",
        "Payment Gateway Integration",
        "Real-time Database",
        "Push Notifications",
      ],
      cover: market,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://buildafrica.store",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/buildafrica",
        },
      ],
    },
    {
      name: "AI Chatbot",
      description:
        "An intelligent conversational AI chatbot built with Flutter, featuring natural language processing and real-time responses with multiple UI screens showcasing different chat functionalities.",
      stack: [
        "Flutter",
        "Dart",
        "AI Integration",
        "Chat UI",
        "Real-time Messaging",
        "State Management",
        "API Integration",
        "Natural Language Processing",
        "Multi-screen Design",
      ],
      cover: chatbot,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://github.com/Delis2001/aichatbot",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/aichatbot",
        },
      ],
    },
    {
      name: "Doova App",
      description:
        "A modern mobile application built with Flutter, showcasing advanced UI patterns, smooth animations, and professional user experience across multiple screens.",
      stack: [
        "Flutter",
        "Dart",
        "Material Design",
        "State Management",
        "Responsive UI",
        "Advanced Animations",
        "Local Database",
        "Clean Architecture",
        "Multi-screen Navigation",
      ],
      cover: doova,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://github.com/Delis2001/doova",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/doova",
        },
      ],
    },
    {
      name: "Portfolio Website",
      description:
        "A professional portfolio website built with Next.js and TypeScript, showcasing Flutter development projects with modern UI and responsive design.",
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Styled Components",
        "Framer Motion",
        "Responsive Design",
        "SEO Optimization",
        "Modern UI/UX",
      ],
      cover: pf,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://github.com/Delis2001/my-portfolio",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/my-portfolio",
        },
      ],
    },
  ],
  fun: [
    {
      name: "Flutter Todo App",
      description:
        "A simple todo application built with Flutter and BLoC pattern, perfect for learning state management fundamentals.",
      stack: ["Flutter", "Dart", "BLoC", "Hive", "Clean Architecture"],
      cover: hse,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/Flutter_internal.git",
        },
      ],
    },
    {
      name: "News App",
      description:
        "A modern news application built with Flutter, fetching real-time news updates with clean UI and offline support.",
      stack: ["Flutter", "Dart", "News API", "Provider", "Local Caching", "Responsive Design"],
      cover: news,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/newsify.git",
        },
      ],
    },
    {
      name: "Meal Planning App",
      description:
        "A comprehensive meal planning application with Flutter, featuring recipe management, meal scheduling, and nutritional tracking.",
      stack: ["Flutter", "Dart", "SQLite", "Provider", "Meal Database API", "Calendar Integration"],
      cover: curr,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/Meal_app.git",
        },
      ],
    },
    {
      name: "Netflix Clone",
      description:
        "A Netflix-inspired streaming app clone built with Flutter, showcasing video browsing, user authentication, and content management.",
      stack: ["Flutter", "Dart", "Video Streaming", "Firebase", "Authentication", "Material Design", "State Management"],
      cover: nova,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/flutter-netflix-clone",
        },
      ],
    },
    {
      name: "QR Building Info",
      description:
        "A QR code-based building information system built with Flutter, allowing users to scan QR codes and access detailed building information, floor plans, and amenities.",
      stack: ["Flutter", "Dart", "QR Code Integration", "Firebase", "Real-time Database", "Material Design", "State Management", "Mobile Scanning"],
      cover: market,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Delis2001/qr_building_info.git",
        },
      ],
    },
  ],
};

const ImageGallery = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  img {
    width: 90px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }: Props) => theme.expCardHover}30;
    transition: all 0.3s ease;
    cursor: pointer;
    flex-shrink: 0;
    
    &:hover {
      transform: scale(1.05);
      border-color: ${({ theme }: Props) => theme.expCardHover};
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    @media (max-width: 768px) {
      width: 70px;
      height: 120px;
    }
  }
`;

const Wrapper = styled.section.attrs({ id: "portfolio" })`
  padding-block: 6em;
  position: relative;

  h2 {
    margin-bottom: 4em;
  }

  .project {
    margin-bottom: 2em;
    h3 {
      font-weight: var(--fw-semi-bold);
      color: ${({ theme }: Props) => theme.txtPrimary400};
    }
    @media (max-width: 60em) {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      overflow: hidden;

      &__content {
        & > * + * {
          margin-top: 0.6em;
        }
        padding: 1em;
        .flex {
          justify-content: start;
          gap: 0.5em;
          flex-wrap: wrap;
        }

        & > p {
          display: none;
        }
        .project__card {
          font-size: 0.8rem;
        }
        .project__stack {
          li {
            font-size: 0.7rem;
            color: ${({ theme }: Props) => theme.expCardHover};
          }
        }
        .project__env {
          ul {
            justify-content: start;
          }
          li {
            font-size: 1.8rem;
            a {
              color: ${({ theme }: Props) => theme.expCardHover};
            }
          }
        }
      }
    }

    img {
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 10px;
      @media (max-width: 60em) {
        border-radius: 0px;
      }

      &:hover {
        filter: none;
        -webkit-filter: grayscale(0%);
      }
    }

    @media (min-width: 60em) {
      margin-bottom: 6em;
      grid-template-columns: repeat(12, 1fr);
      display: grid;
      align-items: center;
      gap: 2em;

      &__image {
        grid-area: 1 / 1 / 2 / 8;
        height: 100%;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      }

      &__content {
        z-index: 1;
        grid-row: 2;
        grid-area: 1/7/2/-1;
        text-align: right;
        padding: 1.5em 1em;

        .project-feat {
          color: ${({ theme }: Props) => theme.expCardHover};
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 0.9em;
          letter-spacing: 0.05em;
        }

        h3 {
          margin-bottom: 0.8em;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .project__card {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
          background: ${({ theme }: Props) => theme.projectColor};
          padding: 2em 1.5em;
          border-radius: 8px;
          margin-bottom: 0.8em;
          border: 1px solid ${({ theme }: Props) => theme.expCardHover}20;

          p {
            font-size: 0.88rem;
            line-height: 1.6;
          }
        }
        .project__env ul,
        .project__stack ul {
          gap: 0.8em;
          justify-content: flex-end;
          margin-bottom: 0.8em;
          flex-wrap: wrap;
        }

        .project__stack ul li {
          font-size: 0.799rem;
          color: ${({ theme }: Props) => theme.expCardHover};
          background: ${({ theme }: Props) => theme.expCardHover}10;
          padding: 0.3em 0.6em;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .project__env ul a {
          font-size: 1.6rem;
          color: ${({ theme }: Props) => theme.txtPrimary400};
          transition: all 0.2s ease;
        }
        .project__env ul a:hover {
          color: ${({ theme }: Props) => theme.expCardHover};
          transform: translateY(-2px);
        }
      }

      &:nth-child(even) {
        & > .project__image {
          grid-area: 1/ 6 / 2 / -1;
        }

        & > .project__content {
          grid-area: 1/1/2/7;
          text-align: left;
        }

        .project__env ul,
        .project__stack ul {
          justify-content: flex-start;
        }
      }
    }
  }

  .pxb {
    margin-top: 6em;
    margin-bottom: 3em;
    justify-content: center;
  }
  .others {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minMax(22em, 1fr));

    .fun {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      padding: 2em;
      transition: 0.2s all ease-in;

      &:hover {
        transform: translateY(-0.3em);
      }

      & > * + * {
        margin-top: 1em;
      }
      .ico {
        justify-content: space-between;

        .ddd {
          font-size: 2.4rem;
        }
      }
      h3 {
        margin-bottom: 0.8em;
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }: Props) => theme.txtPrimary400};
        @media (min-width: 60em) {
          font-size: 1.2rem;
        }
      }
      p {
        font-size: 0.88rem;
        @media (max-width: 60em) {
          font-size: 0.8rem;
        }
      }

      .fun__env ul,
      .fun__stack ul {
        justify-content: flex-start;
        gap: 1em;
        flex-wrap: wrap;
      }

      .fun__stack ul li {
        font-size: 0.799rem;
        color: ${({ theme }: Props) => theme.expCardHover};
      }
      .fun__env ul a {
        font-size: 1.6rem;
        color: inherit;
      }
    }
  }
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <h1 className="side">PORTFOLIO</h1>
      <Container>
        <h2 className="section__title">
          <span className="deco">03. </span> Some Things I&#39;ve Built{" "}
          <span className="line"></span>
        </h2>
        <ul role="list">
          {projects.featured.map((e, i) => (
            <ProjectItem key={e.name} {...e} />
          ))}
        </ul>
        <Fade ssrFadeout bottom>
          <h2 className="section__title text-center pxb">
            Other Note Worthy Projects
          </h2>
          <div className="grid others">
            {projects.fun.map((e, i) => (
              <FunItem key={i} {...e} />
            ))}
          </div>
        </Fade>
      </Container>
    </Wrapper>
  );
};

const FunItem = ({ name, description, cover, stack, environment }: Project) => {
  return (
    <div className="fun">
      <div className="flex ico">
        <div>
          <i className="bx bx-folder ddd"></i>
        </div>
        <div className="fun__env">
          <ul role="list" className="flex">
            {environment.map((s) => (
              <li key={s.icon}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                >
                  <i className={s.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="fun__stack">
        <ul className="flex" role="list">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectItem = ({
  name,
  description,
  cover,
  stack,
  environment,
}: Project) => {
  return (
    <Fade ssrFadeout bottom>
      <li className="grid-12 project">
        <div className="project__image">
          <Image src={cover} alt={name} />
        </div>
        <div className="project__content">
          <p className="project-feat">Featured Project</p>
          <h3>{name}</h3>
          <div className="project__card">
            <p>{description}</p>
          </div>
          <div className="project__stack">
            <ul className="flex" role="list">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="project__env">
            <ul className="flex" role="list">
              {environment.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                  >
                    <i className={s.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default Portfolio;
