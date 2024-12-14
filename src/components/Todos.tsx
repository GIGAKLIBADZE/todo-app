import styled from "styled-components";
import { useState } from "react";

interface Itodo {
  id: number;
  task: string;
  mark: boolean;
}

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<Itodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <>
      <InputContainer>
        <Mark></Mark>
        <Input
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              const newTask: Itodo = {
                id: Date.now(),
                task: newTodo,
                mark: false,
              };
              setTodo([...todo, newTask]);
              setNewTodo("");
            }
          }}
        />
      </InputContainer>
      <TodoContainer>
        {/* {todo.length < 1 ? (
          <NoTodos>No todos yet</NoTodos>
        ) : (
          todo.map((key) => <div>{todo[key]}</div>)
        )} */}
        {/* <NoTodos>No todos yet</NoTodos> */}
        <AfterTodo>
          <Info>5 items left</Info>
          <FilterDesktop>
            <FilterTexts>All</FilterTexts>
            <FilterTexts>Active</FilterTexts>
            <FilterTexts>Completed</FilterTexts>
          </FilterDesktop>
          <Info>Clear Completed</Info>
        </AfterTodo>
      </TodoContainer>
      <FilterMobile>
        <FilterTexts>All</FilterTexts>
        <FilterTexts>Active</FilterTexts>
        <FilterTexts>Completed</FilterTexts>
      </FilterMobile>
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

  @media (min-width: 1440px) {
    width: 540px;
    height: 64px;
    gap: 24px;
    margin-top: 51px;
  }
`;

const Mark = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #c5c5be;
  margin-left: 20px;

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  text-align: left;
  color: #9495a5;
  border: none;
  outline: none;

  @media (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: -0.25px;
  }
`;

const TodoContainer = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
  padding: 16px 0 20px;
  margin-top: 16px;

  @media (min-width: 1440px) {
    padding: 20px 0 16px;
    margin-top: 24px;
  }
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
  margin: 0;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: -0.19px;
  }

  &:first-child {
    margin-left: 24px;
  }

  &:last-child {
    margin-right: 24px;
  }
`;

const FilterMobile = styled.div`
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
  margin-top: 16px;

  @media (min-width: 1440px) {
    display: none;
  }
`;

const FilterDesktop = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18.5px;
  }
`;

const FilterTexts = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #9495a5;
`;

export default Todos;
