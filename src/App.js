import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    );
};
export default App;
