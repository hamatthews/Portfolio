import {useState, useEffect} from 'react';
import './portfolio.css'

export default function Portfolio () {

    const [currentPage, setCurrentPage] = useState('home');
    const [fontMod, setFontMod] = useState(0);

    const widthLimit = 1350;

    const Home = () => {
        return <>
            <div className='content-segment'>
                <h1>Henry Matthews</h1>
            </div>
            <div className='content-segment'>
                <p>I am a front-end web developer based out of Boston, Massachusetts. I love to create everything from quality-of-life Chrome extensions to fullstack web applications.</p>
            </div>
            <div className='content-segment'>
                <p>I believe there is tremendous power in a clean and intuitive user interface. I am always honing my skills to help make the web a more traversable and accessible place.</p>
            </div>
            <div className='content-segment'>
                <p>Some of the technologies I most enjoy working with:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>WebSocket</li>
                </ul>
            </div>
        </>
    }

    const About = () => {
        return <>
            <div className='content-segment'>
                <h1>About</h1>
            </div>
            <div className='content-segment'>
                <p>Before I discovered a passion for programming, I was working in the field of clinical research. I have always loved to work with people, and with organizations that I believe are working toward the betterment of society. </p>
            </div>
            <div className='content-segment'>
                <p>I wanted to expand my repertoire of professional skills to broaden the range of fields where I might be able to make an impact, and so I have spent the last year teaching myself how to code.</p>
            </div>
            <div className='content-segment'>
                <p>As someone with a relatively niche set of hard skills like taking vitals and drawing blood, programming has been a transformative venture, both as a creative outlet and as a doorway into new professional prospects.</p>
            </div>
        </>
    }

    const Projects = () => {
        return <>
            <div className='content-segment'>
                <h1>Projects</h1>
            </div>
            <div className='content-segment'>
                <p>Poké-Decks is a MERN stack web app that lets you play the Pokémon trading card game with friends online. It uses WebSocket for real-time gameplay and messaging. It is presently optimized for desktop. You can visit the <a href="https://poke-decks-frontend.onrender.com/" target='_blank'>site</a> or watch a <a href="https://www.youtube.com/watch?v=1PSwuQU2aFY" target='_blank'>video demonstration.</a></p>
            </div>
            <div className='content-segment'>
                <p>Poké-Decks is not a licensed product of The Pokémon Company.</p>
            </div>
        </>
    }

    const Contact = () => {
        return <>
            <div className='content-segment'>
                <h1>Contact</h1>
            </div>
            <div className='content-segment'>
                <p>Email: <a href='mailto:hm110896@gmail.com?subject=Mail from Portfolio'>hm110896@gmail.com</a></p>
            </div>
            <div className='content-segment'>
                <p>Resume: <a href='Henry-Matthews-Resume.pdf' download>download link</a></p>
            </div>
        </>
    }

    const mod = .85;
    const zero = (100 - 100*mod)/2;
    const twentyFive = 25*mod + zero;
    const thirty = 30*mod + zero;
    const twelve = 12*mod + zero;
    const twelveFive = 12.5*mod + zero;
    const mZag = `${thirty},50 50,${100-twelveFive} ${100-thirty},50`;
    const lTriangle = `${zero},${zero} ${twelveFive},50 ${zero},${100-zero}`;
    const rTriangle = `${100-zero},${zero} ${100-twelveFive},50 ${100-zero},${100-zero}`;

    const bZero = zero/1.2;
    const borderLine = `${bZero},${bZero} ${100-bZero},${bZero} ${100-bZero},${100-bZero} ${bZero},${100-bZero} ${bZero},${bZero}`;

    const switchPage = (page) => {
        setCurrentPage(page);
        if (window.innerWidth < widthLimit) setFontMod(.1);
    }

    useEffect(() => {
        const onLoad = () => {
            switchPage('home');
        }
        if (document.readyState === 'complete') {
            onLoad();
        }
        else {
            window.addEventListener('load', onLoad);

            return () => window.removeEventListener('load', onLoad);
        }
    }, []);


    useEffect(() => {
        const resizeListener = () => {
            setFontMod(0);
        };

        window.addEventListener('resize', resizeListener);
    
        return () => {
        window.removeEventListener('resize', resizeListener);
        }
    }, []);

    useEffect(() => {
        const content = document.querySelector('.content-section').clientHeight;
        const wrapper = document.querySelector('.content-wrapper').clientHeight;

        if (window.innerWidth < widthLimit) {
            if (fontMod < 1 && wrapper < content*.8) {
                setFontMod(prev => {
                    const mod = prev + 0.05;
                    return mod < 1 ? mod : 1;
                });
            }    
        }
        else setFontMod(1)
    });
    
    return <div>
        <style>{`
            :root {
                font-size: ${16*fontMod}px;
            }
            .nav-button {
            }

        `}</style>
        <div className='portfolio-wrapper'>
            <div className='border-fill-1 border-fill'></div>
            <div className='border-fill-2 border-fill'></div>
            <div className='border-fill-3 border-fill'></div>
            <div className='border-fill-4 border-fill'></div>
            <div className='portfolio-foreground'>
                <div className='portfolio'>
                    <div className='nav-section portfolio-section'>
                        <svg
                        className='portfolio-icon'
                        width="100" height="100" viewBox='0 0 100 100'
                        onClick={e => switchPage('home')}
                        >
                            <line x1={thirty} y1={zero} x2={thirty} y2={100-zero} strokeWidth="5" stroke="var(--color-bg)"/>                        
                            <line x1={100-thirty} y1={zero} x2={100-thirty} y2={100-zero} strokeWidth="5" stroke="var(--color-bg)"/>
                            <line x1={thirty} y1={twentyFive} x2={100-thirty} y2={twentyFive} strokeWidth="5" stroke="var(--color-bg)"/>
                            <line x1={twelve} y1="50" x2={100-twelve} y2="50" strokeWidth="5" stroke="var(--color-bg)"/>
                            <polyline points={mZag} strokeWidth="5" stroke="var(--color-bg)" fill="none"/>
                            <polyline points={lTriangle} strokeWidth="0" fill="var(--color-bg)"/>
                            <polyline points={rTriangle} strokeWidth="0" fill="var(--color-bg)"/>
                            <polyline points={borderLine} strokeWidth="5" stroke="var(--color-bg)" strokeLinecap='square' fill="none"/>
                        </svg>
                        <div className='nav-wrapper'>
                            <div className='about-button nav-button' onClick={() => switchPage('about')}>About</div>
                            <div className='projects-button nav-button' onClick={() => switchPage('projects')}>Projects</div>
                            <div className='contact-button nav-button' onClick={() => switchPage('contact')}>Contact</div>
                        </div>
                    </div>
                    <div className='content-section portfolio-section'>
                        <div className='content-shadow'></div>
                        <div className='content-wrapper'>
                            {
                                currentPage === 'about' ? <About /> :
                                currentPage === 'projects' ? <Projects /> : 
                                currentPage === 'contact' ? <Contact /> :
                                <Home />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}