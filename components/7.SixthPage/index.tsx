import Image from 'next/image'//importarea scripturilor din fisierul image.js pentru imaginile din pagina
import Page6 from './styled'  //importarea stilurilor pentru bara de navigare din fisierul local styled.ts
import Link from 'next/link'  //importarea scripturilor din fisierul link.js pentru interactiunea cu bara de navigare


const SectionSix = () => {
    return ( 
        <Page6>
            <section className="page6">
                <h3 id="dies"> Norman Bourlaug visits Delhi</h3>
                <p id="age">
                    2009 Norman Bourlaug dies at the age of 95.
                </p>
                <div className="time">
                    <time id ="finish">2009</time>
                </div>
                <div className="img-finish">
                    <Image src="/Images/img10.jpg" width={500} height={600} alt="no_photo" />
                </div>
                <Link href="https://ro.wikipedia.org/wiki/Norman_Borlaug"><a target="_blank" id="tribute-link2"><h3 id="www"> More info on the wikipedia</h3></a></Link>
                <div className="arrow">
                    <p id="arrow6">&#8593;</p>
                </div>
            </section>
        </Page6>
    ) 
}

export default SectionSix;