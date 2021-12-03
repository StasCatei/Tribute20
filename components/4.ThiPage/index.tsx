import Image from 'next/image'//importarea scripturilor din fisierul image.js pentru imaginile din pagina
import Page3 from './styled'  //importarea stilurilor pentru bara de navigare din fisierul local styled.ts

const SectionThree = () => {
    return ( 
        <Page3>
            <section className="page3">
                <div className="born-div">
                    <h3 id="year5">1935 Civilian Conservation Corps</h3>
                    
                    <div className="img-CCC">
                        <Image src="/Images/img4.jpg" width={300} height={200} alt="no_photo" />
                    </div>

                    <p id="CC">
                        <br/>
                        <br/>
                        Stop school <br/>
                        Norman Bourlaug has to stop school and
                        save up more money. Works in the Civilian Conservation Corps, helping starving Americans.
                        &ldquo;I saw how food changed them&rdquo;, he said. 
                        &ldquo;All of this left scars on me.&rdquo;
                    </p>

                    <div className="time">    
                        <time id="year6">1935</time>
                        <time id="year7">1937</time>
                    </div>

                    <div className="right1">
                        <h3 id="year8">1937  US Forestry Service</h3>
                        <p id="job">
                            Norman Bourlaug finishes university and takes 
                            a job in the US Forestry Service
                        </p>
                    </div>
                </div>

                <div className="img-job">
                    <Image src="/Images/img5.jpg" width={300} height={200} alt="work" />
                </div>

                <div className="arrow">
                    <p id="arrow3">&#8595;&#8593;</p>
                </div>
            </section>
        </Page3>
    )
}

export default SectionThree;