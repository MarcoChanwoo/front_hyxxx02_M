import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import img01 from '../img/img01.png';

const MainPage = () => {
    return (
        <>
            <Header />
            <div>
                <h2>(주)호윤상사에 방문하신 것을 환영합니다!</h2>
                <h4>(주)호윤상사는 언제나 귀하의 안전한 건설을 응원합니다.</h4>
                {/* <img src={img01} alt="field01" /> */}
            </div>
            <Footer />
        </>
    );
};
export default MainPage;
