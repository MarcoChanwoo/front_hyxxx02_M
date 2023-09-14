import Container from '../components/auth/Container';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const GuestPage = ({ onClick }) => {
    return (
        <>
            <Header />
            <Container />
            <div className="container">
                <h2>당신의 현장을 안전하게!</h2>
                <div>
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
            <Footer />
        </>
    );
};
export default GuestPage;
