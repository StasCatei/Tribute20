import Image from 'next/image'//importarea scripturilor din fisierul image.js pentru imaginile din pagina
import Page4 from './styled'  //importarea stilurilor pentru bara de navigare din fisierul local styled.ts



const SectionFour = () => {
    return ( 
        <Page4>
            <section className="page4">
                <div className="born-div">
                    <div className="img-mexico">
                        <Image src="/Images/img6.jpg" width={300} height={200} alt="Mexico" />
                    </div>
                    <div className="progr">
                        <h3 id="program"> 
                            Norman Bourlaug in  Mexico
                            head a new plant pathology program
                        </h3>
                        <p id="wife">
                            1944- Norman Bourlaug rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. 
                            Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.
                        </p>
                    </div>
                    <div className="time">   
                        <time id="year9">1938</time>
                        <time id="year10">1944</time>
                    </div>
                    <div className="left">
                        <h3 id="married">Norman Bourlaug marries</h3>
                        <p id="married1">
                            1938-Norman Bourlaug marries his 24-year-old wife, Margret Gibson. It is made available due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school under Stakman, who teaches him how to grow pest-resistant plants.
                        </p>
                    </div>
                </div>
                <div className="img-norman">
                    <Image src="/Images/img7.jpg" width={300} height={200} alt="work" />
                </div>
                <div className="arrow">
                    <p id="arrow4">&#8595;&#8593;</p>
                </div>
            </section>
        </Page4>
    );
};

export default SectionFour;