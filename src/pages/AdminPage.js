import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const AdminPage = () => {
    return (
        <AuthTemplate>
            <AuthForm /> admin으로 접속 시 보여질 화면
        </AuthTemplate>
    );
};
export default AdminPage;
