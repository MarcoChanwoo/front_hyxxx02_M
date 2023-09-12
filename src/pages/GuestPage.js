import Container from '../components/auth/Container';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

const GuestPage = ({ onClick }) => {
    return (
        <>
            <Header />
            <Container />
            <div className="container">
                <h2>당신의 현장을 안전하게!</h2>
            </div>
            <Button to="/write" onClick={onClick}>
                파일 올리기
            </Button>
        </>
    );
};
export default GuestPage;
