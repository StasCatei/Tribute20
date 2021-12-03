import Image from 'next/image'//importarea scripturilor din fisierul image.js pentru imaginile din pagina
import Page5 from './styled'  //importarea stilurilor pentru bara de navigare din fisierul local styled.ts


const SectionFive = () => {
    return (
        <Page5>
            <section className="page5">
                <div className="born-div">
                    <h3 id="delhi"> Norman Bourlaug visits Delhi</h3>
                    <p id="population">
                    1962 Norman Bourlaug Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population
                    </p>
                    
                    <div className="img-speech">
                        <Image src="/Images/img8.jpg" width={300} height={200} alt="no_photo" />
                    </div>

                    <div className="time">   
                        <time id="year11">1962</time>
                        <time id="year12">2005</time>
                    </div>

                    <div className="right2">
                        <h3 id="speech1"> Norman Borlaug&rsquo;s 2005 speech</h3>
                        <p id="culture">
                        In his 2005 speech, Norman Bourlaug stated that &ldquo;we will have to double the world&rsquo;s food supply by 2050.&rdquo;
                        He argues that genetically modified crops are the only way we can meet demand because we run out of arable land. He says genetically modified crops are not inherently dangerous because &ldquo;we&rsquo;ve been genetically modifying plants and animals for a long time. Long before we called it science, humans chose the best breeds.&rdquo;
                        </p>
                    </div>
                </div>

                <div className="img-visit">
                    <Image src="/Images/img9.jpg" width={300} height={200} alt="no_photo" />
                </div>

                <div className="arrow">
                    <p id="arrow5">&#8595;&#8593;</p>
                </div>
            </section>
        </Page5>
    )
}
export default SectionFive;