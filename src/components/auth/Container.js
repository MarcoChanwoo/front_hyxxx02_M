import styled from 'styled-components';

/**
 * 일반 페이지 꾸미기
 */

const ContainerBlock = styled.div`
    background-color: violet;
    height: 4rem;
    text-align: center;
    font-size: 2rem;
`;

const Container = () => {
    return (
        <ContainerBlock>
            <div>사업주 여러분을 환영합니다!</div>
        </ContainerBlock>
    );
};

export default Container;
