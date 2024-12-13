import styled from "styled-components";

const Todos: React.FC = () => {
  return (
    <>
      <InputContainer>
        <Mark></Mark>
        <Input type="text" placeholder="Create a new todo..." />
      </InputContainer>

      <TodoContainer>
        <NoTodos>No todos yet</NoTodos>
        <AfterTodo>
          <Info style={{ marginLeft: "20px" }}>5 items left</Info>
          <Info style={{ marginRight: "20px" }}>Clear Completed</Info>
        </AfterTodo>
      </TodoContainer>
      <Filter>
        <FilterTexts>All</FilterTexts>
        <FilterTexts>Active</FilterTexts>
        <FilterTexts>Completed</FilterTexts>
      </Filter>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 327px;
  height: 48px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
  margin-top: 40px;
`;

const Mark = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #c5c5be;
  margin-left: 20px;
`;

const Input = styled.input`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  text-align: left;
  color: #9495a5;
  border: none;
  outline: none;
`;

const TodoContainer = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
  padding: 16px 0 20px;
  margin-top: 16px;
`;

const NoTodos = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #9495a5;
  text-align: center;
  margin-bottom: 30px;
`;

const AfterTodo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 16px 0 20;
`;

const Info = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  color: #9495a5;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18.5px;
  width: 327px;
  height: 48px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
  border: none;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  text-align: left;
  color: #9495a5;
  margin-top: 16px;
`;

const FilterTexts = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #9495a5;
`;

export default Todos;
