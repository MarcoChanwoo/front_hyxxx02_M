import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
    position: fixed;
    bottom: 0; // 바닥에 고정시킴!
    width: 100%;
    background: #cef6f5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        font-size: 1rem;
    }
    .right {
    }
    .info {
        font-size: 0.75rem;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterBlock>
                <Wrapper>
                    <div className="left">
                        호윤상사 주식회사
                        <br />
                        <div className="info">
                            사업자 등록번호 : 00000-00
                            <br /> 주소: 서울시 마포구
                        </div>
                    </div>
                    <div className="right">
                        Copyrightⓒ호윤상사 all right reserved(2023)
                    </div>
                </Wrapper>
            </FooterBlock>
        </>
    );
};

export default Footer;
