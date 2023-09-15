import styled from 'styled-components';

/**
 * 일반 페이지 꾸미기
 */

const ContainerBlock = styled.div`
    background-color: violet;
    height: 4rem;
    display: flex;
    justify-content: center; // 중앙 정렬
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
`;

const Container = () => {
    return (
        <ContainerBlock>
            <div>사업주 여러분을 환영합니다!</div>
        </ContainerBlock>
    );
};

export default Container;
