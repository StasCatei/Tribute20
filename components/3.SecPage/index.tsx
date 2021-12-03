import Image from 'next/image' //importarea scripturilor din fisierul image.js pentru imaginile din pagina
import Page2 from './styled'   //importarea stilurilor locale din fisierul styled.ts

const Section = () => {
    return ( 
        <Page2>
            <section className="page2">
                <div className="born-div">
                    <h3 id="year1">March 25, 1914 Born in Cresco, Iowa</h3>
                </div>
                <div className="university-img">
                    <Image src="/Images/img2.jpg" width={300} height={200} alt="univer" />
                    <p id="born">
                        Norman Borlaug was born to Henry Oliver (1889–1971) and Clara (Vaala) Borlaug (1888–1972) on his grandparent&rsquo;s farm in Saude in 1914, the first of four children. His three sisters were Palma Lillian (Behrens; 1916–2004), Charlotte (Culbert; b. 1919) and Helen (b. 1921).
                    </p>
                    <div className="time">
                        <time id="year2">1914</time>
                        <time id="year3">1933</time>
                    </div>
                    <div className="right">
                        <h3 id="year4">1933 - Norman Bourlaug Admission to the Minnesota University</h3>
                        <p id="univer">1933 - Norman Bourlaug leaves his family&rsquo;s farm to attend the University of Minnesota, thanks to a Depression era program known as the &ldquo;National Youth Administration&rdquo;</p>
                    </div>
                </div>
                <div className="img-univ">
                    <Image src="/Images/img3.jpg" width={300} height={200} alt="family" />
                </div>
                <div className="arrow">
                    <p id="arrow2">&#8595;&#8593;</p>
                </div>
            </section>
        </Page2>
    )
}

export default Section;