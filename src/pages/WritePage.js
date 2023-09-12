import { Link } from '../../node_modules/react-router-dom/dist/index';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

const WritePage = () => {
    return (
        <div>
            <Header />
            <div>이곳에 파일을 업로드할 수 있습니다.</div>
            <Button>파일 업로드</Button>
            <br />
            <Link to="/">첫 화면으로 이동</Link>
        </div>
    );
};
export default WritePage;
