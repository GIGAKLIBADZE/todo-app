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
  font-size: 33px;
  color: #d8d8d8;
  letter-spacing: 8px;
`;

const Theme = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 1440px) {
    width: 25.1px;
    height: 26px;
  }
`;

export default Header;
