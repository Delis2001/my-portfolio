import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../Container";
import Fade from 'react-reveal/Fade';
import kingsley from '../../../../public/assets/images/kingsley.png'
import { Props } from "../../../theme/styling/GlobalStyle";

const Wrapper = styled.section.attrs({id: 'about'})`
    padding-block: 6em;
    position:relative;
    background-color: ${({theme}: Props) => theme.primaryBg};
    z-index:1;
    @media(min-width: 50em){
        padding-block: 16em 6em;
        margin-top: -12em;
    }

    .about__details{
        & > *+*{
            margin-top: 1em;
        }
    }
    .about__list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .6em;
        margin-top: .89em; 

        li{
            font-size: .7rem;
            position: relative;
            left: 1.2em;

            @media(min-width: 50em){
                font-size: .9rem;
            }

            &::before{
                content: '▹';
                top:0;
                left:-1.2em;
                position:absolute;
                color: ${({theme}: Props) => theme.expCardHover};
            }
        }
    }

    .image_container{
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        display: block;
        position: relative;
        width: 250px;
        border-radius: 4px;
        height: 300px;

        @media(min-width: 50em){
            &:hover{
                &::after{
                    top:2em;
                    left:2em;
                }
            }
    
            &::after{
                z-index: -1;
                position: absolute;
                border: 2px solid ${({theme}: Props) => theme.expCardHover};
                top:3em;
                left:3em;
                content: '';
                height: inherit;
                width: inherit;
                border-radius: inherit;
                transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
            }
        }
        img{
            height:inherit;
            object-fit: contain;
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
            transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

            &:hover{
                filter: grayscale(0%);
                -webkit-filter: grayscale(0%);
            }

        }
    }
    .about__me{
        display: grid;
        place-content: center;
    }
`;

const About= () => {
    return (
        <Wrapper>
            <Fade ssrFadeout bottom>
                <h1 className="side">About Me</h1>
                <Container>
                    <div className="about grid even-columns">
                        <div className="about__details">
                            <h2 className="section__title"><span className="deco">01. </span>  About me <span className="line"></span></h2>
                           <p>
Hello! Thanks for taking the time to visit my portfolio. My name is Nwoye Fidelis Chidera, a passionate Flutter Developer focused on building modern, scalable mobile and web applications. I enjoy solving real-world problems through clean, efficient code and continuously improving my skills to deliver high-quality user experiences.
</p>

<p>
I am committed to growing as a developer, with a strong interest in building performant applications and staying up-to-date with modern technologies and best practices.
</p>

<p>
My core focus is Flutter and Dart for cross-platform development, along with experience in modern web technologies.
</p>

<p>
Below are some of the technologies, languages, and tools I work with:
</p>
                          <ul className="about__list" role='list'>
  <li>Flutter (Cross-platform Mobile & Web Development)</li>
  <li>Dart Programming Language</li>
  <li>State Management (Bloc, Provider, Riverpod)</li>
  <li>Backend Integration (REST APIs, Firebase Services)</li>
  <li>Firebase (Authentication, Firestore, Cloud Functions)</li>
  <li>Responsive & Adaptive UI Design</li>
  <li>Material & Cupertino Design Systems</li>
  <li>Local Storage (SQLite, Hive, SharedPreferences)</li>
  <li>App Performance Optimization & Debugging</li>
  <li>Version Control (Git & GitHub)</li>
  <li>Clean Architecture & Code Structuring</li>
  <li>Problem Solving & Algorithmic Thinking</li>
</ul>
                        </div>
                        <div className="about__me">
                            <div className="image_container">
                                <Image src={kingsley} alt="Nwoye Fidelis Chidera" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </Wrapper>
    );
}

export default About;