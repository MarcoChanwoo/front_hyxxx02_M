import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import img01 from '../img/img01.png';
import img02 from '../img/img02.png';
import img05 from '../img/img05.png';

const Total = styled.div`
    text-align: center;
    .hello {
        font-size: 1.5rem;
    }
    .img {
        padding-top: 10px;
        width: 800px;
        height: 500px;
    }
    .intro {
        padding-top: 50px;
        font-size: 1.5rem;
    }
    .img02 {
        padding-top: 20px;
        width: 800px;
        height: 500px;
    }
    .bottom {
        padding-top: 20px;
        padding-bottom: 130px;
        margin: 10px;
    }
`;

const MainPage = () => {
    return (
        <Total>
            <Header />
            <div>
                <div className="hello">
                    <h2>(주)호윤상사에 방문하신 것을 환영합니다!</h2>
                </div>
                <img className="img" src={img01} alt="field01" />
                <br />
                <div className="intro">
                    호윤상사에서는... <br />
                    세상 모든 건설 현장의 안전을 위해 최선을 다합니다.
                    <br />
                    <img className="img02" src={img02} alt="img02" />
                    <br />
                    <div className="bottom">
                        근로자의 안전을 확실하게! 호윤상사가 이끌어갑니다!
                        <br />
                        <img className="img" src={img05} alt="img05" />
                        <br />
                        대표번호: 010-9019-7XX2
                    </div>
                </div>
            </div>
            <Footer />
        </Total>
    );
};
export default MainPage;
