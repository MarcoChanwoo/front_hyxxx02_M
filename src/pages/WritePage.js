import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import img06 from '../img/img06.png';
import img03 from '../img/img03.png';
import Container from '../components/auth/Container';

const Totalbox = styled.div`
    text-align: center;
    padding-bottom: 150px;
    .sub_title {
        text-align: left;
        padding-left: 30px;
        font-size: 2rem;
    }
    .sub_title2 {
        font-size: 1.3rem;
        text-align: left;
        padding-top: 40px;
        padding-left: 30px;
        text-decoration: underline;
    }
    .first {
        font-size: 1.5rem;
    }
    .img {
        padding-top: 10px;
        width: 800px;
        height: 500px;
    }
    .uploadBox {
        padding-top: 20px;
        font-size: 1.5rem;
        margin: 10px;
    }
    .textarea {
        margin-top: 15px;
        width: 350px;
        height: 50px;
    }
`;

const WritePage = () => {
    const onClick = () => {
        alert('등록되었습니다. 확인 후 연락드리겠습니다.');
    };

    return (
        <div>
            <Header />
            <Container />
            <Totalbox>
                <h2 className="sub_title">견적 및 상담 신청</h2>
                <div className="first">
                    귀하의 현장 안전을 컨설팅해 드립니다.
                    <br />
                    <img className="img" src={img03} alt="img03" />
                    <br />
                    현장 사진과 함께 문의를 남겨주세요.
                    <br />
                    (주)호윤상사와 함께 현장 견적을 함께해 드립니다.
                </div>
                <img className="img" src={img06} alt="img06" />
                <br />
                <div className="uploadBox">
                    이곳에 파일을 업로드할 수 있습니다.
                    <Button>파일 첨부하기</Button>
                </div>
                <textarea
                    className="textarea"
                    placeholder='담당자 성함 / 회사명 / "파일명" / 이메일 주소'
                ></textarea>
                <br />
                <Button onClick={onClick}>등록하기</Button>
                <div className="sub_title2">
                    <Link to="/">첫 화면으로 이동</Link>
                </div>
            </Totalbox>
            <Footer />
        </div>
    );
};
export default WritePage;
