import styled from "styled-components";

const Header: React.FC<{
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ theme, setTheme }) => {
  return (
    <HeaderContainer>
      <Title>TODO</Title>
      <Theme
        onClick={() => setTheme(!theme)}
        src={`${theme ? "images/icon-moon.svg" : "images/icon-sun.svg"}`}
        alt="Moon"
        className="theme"
      />
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
