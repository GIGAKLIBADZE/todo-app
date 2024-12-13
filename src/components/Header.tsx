import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>TODO</Title>
      <Theme src="images/icon-moon.svg" alt="Moon" className="theme" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 27px;
  color: #d8d8d8;
  letter-spacing: 8px;
`;

const Theme = styled.img`
  width: 20px;
  height: 20px;
`;

export default Header;
