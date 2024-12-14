import styled, { css } from "styled-components";
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
        {todo.length < 1 ? (
          <NoTodos>No todos yet</NoTodos>
        ) : (
          todo.map((each, index) => (
            <EachTodo
              key={each.id}
              style={{
                borderTopLeftRadius: index === 0 ? "5px" : "",
                borderTopRightRadius: index === 0 ? "5px" : "",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Mark
                  $mark={todo[index].mark}
                  onClick={() => {
                    const modifiedTodo = [...todo];
                    modifiedTodo[index].mark = !modifiedTodo[index].mark;
                    setTodo(modifiedTodo);
                  }}
                ></Mark>
                <EachTodoText $mark={todo[index].mark}>
                  {todo[index].task}
                </EachTodoText>
              </div>
              <div>
                <Cross src="../public/images/icon-cross.svg" alt="Cross" />
              </div>
            </EachTodo>
          ))
        )}
        <AfterTodo>
          <Info>{todo.length} items left</Info>
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

const Mark = styled.div<{ $mark: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #c5c5be;
  margin-left: 20px;

  ${({ $mark }) =>
    $mark
      ? css`
          background-image: url("../public/images/icon-check.svg");
          background-image: url("../public/images/icon-check.svg"),
            linear-gradient(135deg, #5df, #c058f3);
          background-repeat: no-repeat;
          background-position: center;
        `
      : ""}

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-left: 24px;
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
  padding-bottom: 20px;
  margin-top: 16px;

  @media (min-width: 1440px) {
    padding-bottom: 16px;
    margin-top: 24px;
  }
`;

const NoTodos = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #9495a5;
  text-align: center;
  padding-top: 16px;
  margin-bottom: 30px;
`;

const EachTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e3e4f1;

  @media (min-width: 1440px) {
    height: 64px;
  }
`;

const EachTodoText = styled.p<{ $mark: boolean }>`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  color: ${({ $mark }) => ($mark ? "#d1d2da" : "#494c6b")};
  margin-left: 12px;
  text-decoration: ${({ $mark }) => ($mark ? "line-through" : "none")};

  @media (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: -0.25px;
    margin-left: 24px;
  }
`;

const Cross = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 20px;
  margin-top: 5px;

  @media (min-width: 1440px) {
    margin-right: 24px;
    display: none;
  }
`;

const AfterTodo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding-top: 16px;
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
