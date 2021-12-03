import Footer from './styled' //importarea stilurilor pentru bara de navigare din fisierul local styled.ts

const FooterPage = () => {
    return (
        <Footer>
            <div className="info">
                <a id="tribute-link2" href="https://ro.wikipedia.org/wiki/Norman_Borlaug" target="_blank" rel="noreferrer">
                    ©2019 omiron.software All Rights Reserved
                </a>
            </div>
        </Footer>
    );
}
export default FooterPage;