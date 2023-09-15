import styled from 'styled-components';
import Container from '../components/auth/Container';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import img07 from '../img/img07.png';

const Total = styled.div`
    text-align: center;
    padding-bottom: 120px;
    .info {
        font-size: 1.5rem;
    }
    .img {
        adding-top: 20px;
        width: 800px;
        height: 500px;
    }
`;

const GuestPage = ({ onClick }) => {
    return (
        <>
            <Header />
            <Container />
            <Total>
                <div>
                    <h2>당신의 현장을 안전하게!</h2>
                    <img className="img" src={img07} alt="img07" />
                    <div className="info">
                        (주)호윤상사는 이미 수많은 회사와 함께해 왔습니다.
                        <br />
                        이제 귀하의 차례입니다.
                        <br />
                        궁금하신 사항은 아래 버튼을 통해 언제든지 문의해보세요.
                    </div>
                </div>
                <br />
                <Button to="/write" onClick={onClick}>
                    견적 신청하기
                </Button>
            </Total>
            <Footer />
        </>
    );
};
export default GuestPage;
