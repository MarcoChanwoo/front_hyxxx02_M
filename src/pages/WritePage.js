import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import img06 from '../img/img06.png';

const Totalbox = styled.div`
    text-align: center;
    .first {
        font-size: 1.5rem;
    }
    .img {
        width: 800px;
        height: 500px;
    }
`;

const WritePage = () => {
    return (
        <div>
            <Header />
            <Totalbox>
                <h2>견적 요청</h2>
                <div className="first">
                    귀하의 현장 사진을 보여주세요.
                    <br />
                    (주)호윤상사와 함께 현장 견적을 함께해 드립니다.
                </div>
                <img className="img" src={img06} alt="img06" />
                <br />
                <div>이곳에 파일을 업로드할 수 있습니다.</div>
                <br />
                <Button>파일 업로드</Button>
                <br />
                <br />
                <Link to="/">첫 화면으로 이동</Link>
            </Totalbox>
            <Footer />
        </div>
    );
};
export default WritePage;
