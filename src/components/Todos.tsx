import styled, { css } from "styled-components";
import { useState } from "react";

interface Itodo {
  id: number;
  task: string;
  mark: boolean;
}

const Todos: React.FC<{ theme: boolean }> = ({ theme }) => {
  const [todo, setTodo] = useState<Itodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [allColor, setAllColor] = useState<boolean>(true);
  const [activeColor, setActiveColor] = useState<boolean>(false);
  const [completedColor, setCompletedColor] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");

  return (
    <>
      <InputContainer $theme={theme}>
        <Mark $theme={theme}></Mark>
        <Input
          $theme={theme}
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

      <TodoContainer $theme={theme}>
        {todo.length < 1 ? (
          <NoTodos $theme={theme}>No todos yet</NoTodos>
        ) : (
          todo
            .filter((item) => {
              if (filter === "All") {
                return true;
              } else if (filter === "Active") {
                return item.mark === false;
              } else {
                return item.mark === true;
              }
            })
            .map((each, index) => (
              <EachTodo
                $theme={theme}
                $mark={each.mark}
                key={each.id}
                style={{
                  borderTopLeftRadius: index === 0 ? "5px" : "",
                  borderTopRightRadius: index === 0 ? "5px" : "",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Mark
                    $theme={theme}
                    $mark={each.mark}
                    onClick={() => {
                      const modifiedTodo = [...todo];
                      const findIndex = todo.findIndex((item) => item === each);
                      modifiedTodo[findIndex].mark =
                        !modifiedTodo[findIndex].mark;
                      setTodo(modifiedTodo);
                    }}
                  ></Mark>
                  <EachTodoText $theme={theme} $mark={each.mark}>
                    {each.task}
                  </EachTodoText>
                </div>
                <div>
                  <Cross
                    src="/images/icon-cross.svg"
                    alt="Cross"
                    onClick={() => {
                      each.task = "delete";
                      const filtered = todo.filter(
                        (td) => td.task !== "delete"
                      );
                      setTodo(filtered);
                    }}
                  />
                </div>
              </EachTodo>
            ))
        )}
        <AfterTodo $theme={theme}>
          <Info $theme={theme}>
            {todo.length > 1
              ? `${todo.length} items left`
              : `${todo.length} item left`}
          </Info>
          <FilterDesktop>
            <FilterTexts
              $theme={theme}
              $allColor={allColor}
              onClick={() => {
                setFilter("All");
                if (allColor === false) {
                  setAllColor(true);
                  setActiveColor(false);
                  setCompletedColor(false);
                }
              }}
            >
              All
            </FilterTexts>
            <FilterTexts
              $theme={theme}
              $activeColor={activeColor}
              onClick={() => {
                setFilter("Active");
                if (activeColor === false) {
                  setActiveColor(true);
                  setCompletedColor(false);
                  setAllColor(false);
                }
              }}
            >
              Active
            </FilterTexts>
            <FilterTexts
              $theme={theme}
              $completedColor={completedColor}
              onClick={() => {
                setFilter("Completed");
                if (completedColor === false) {
                  setCompletedColor(true);
                  setActiveColor(false);
                  setAllColor(false);
                }
              }}
            >
              Completed
            </FilterTexts>
          </FilterDesktop>
          <Info
            $theme={theme}
            onClick={() => {
              const filtered = todo.filter((td) => td.mark !== true);
              setTodo(filtered);
            }}
          >
            Clear Completed
          </Info>
        </AfterTodo>
      </TodoContainer>

      <FilterMobile $theme={theme}>
        <FilterTexts
          $theme={theme}
          $allColor={allColor}
          onClick={() => {
            setFilter("All");
            if (allColor === false) {
              setAllColor(true);
              setActiveColor(false);
              setCompletedColor(false);
            }
          }}
        >
          All
        </FilterTexts>
        <FilterTexts
          $theme={theme}
          $activeColor={activeColor}
          onClick={() => {
            setFilter("Active");
            if (activeColor === false) {
              setActiveColor(true);
              setCompletedColor(false);
              setAllColor(false);
            }
          }}
        >
          Active
        </FilterTexts>
        <FilterTexts
          $theme={theme}
          $completedColor={completedColor}
          onClick={() => {
            setFilter("Completed");
            if (completedColor === false) {
              setCompletedColor(true);
              setActiveColor(false);
              setAllColor(false);
            }
          }}
        >
          Completed
        </FilterTexts>
      </FilterMobile>
    </>
  );
};

const InputContainer = styled.div<{ $theme: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 327px;
  height: 48px;
  border-radius: 5px;
  background-color: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};
  box-shadow: ${({ $theme }) =>
    $theme
      ? "0 35px 50px -15px rgba(194, 195, 214, 0.5)"
      : "0 35px 50px -15px rgba(0, 0, 0, 0.5)"};
  margin-top: 40px;

  @media (min-width: 1440px) {
    width: 540px;
    height: 64px;
    gap: 24px;
    margin-top: 51px;
  }
`;

const Mark = styled.div<{ $mark?: boolean; $theme: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};
  border: ${({ $theme }) =>
    $theme ? "1px solid #e3e4f1" : "1px solid #393a4b"};
  margin-left: 20px;

  ${({ $mark }) =>
    $mark
      ? css`
          background-image: url("/images/icon-check.svg");
          background-image: url("/images/icon-check.svg"),
            linear-gradient(135deg, #5df, #c058f3);
          background-repeat: no-repeat;
          background-position: center;
          border: none;
        `
      : css`
          &:hover {
            border: 1px solid;
            border-image-source: linear-gradient(135deg, #5df, #c058f3)
            border-image-slice: 1;
          }
        `}

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-left: 24px;
  }
`;

const Input = styled.input<{ $theme: boolean }>`
  font-family: "Josefin Sans", sans-serif !important;
  width: 80%;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  text-align: left;
  color: ${({ $theme }) => ($theme ? "#9495a5" : "#767992")};
  border: none;
  outline: none;
  caret-color: #3a7cfd;
  background: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};

  &:focus {
    color: #393a4b;
    color: ${({ $theme }) => ($theme ? "#393a4b" : "#c8cbe7")};
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: -0.25px;
  }
`;

const TodoContainer = styled.div<{ $theme: boolean }>`
  border-radius: 5px;
  background-color: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};
  box-shadow: ${({ $theme }) =>
    $theme
      ? "0 35px 50px -15px rgba(194, 195, 214, 0.5)"
      : "0 35px 50px -15px rgba(0, 0, 0, 0.5)"};
  padding-bottom: 20px;
  margin-top: 16px;

  @media (min-width: 1440px) {
    padding-bottom: 16px;
    margin-top: 24px;
  }
`;

const NoTodos = styled.p<{ $theme: boolean }>`
  font-size: 25px;
  font-weight: bold;
  color: ${({ $theme }) => ($theme ? "#9495a5" : "#5b5e7e")};
  text-align: center;
  padding-top: 16px;
  margin-bottom: 30px;
`;

const EachTodo = styled.div<{ $mark: boolean; $theme: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border-bottom: ${({ $theme }) =>
    $theme ? "1px solid #e3e4f1" : "1px solid #393a4b"};
  cursor: pointer;

  &:hover {
    & > div > img {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    height: 64px;
  }
`;

const EachTodoText = styled.p<{ $mark: boolean; $theme: boolean }>`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;

  ${({ $mark, $theme }) => {
    if (!$mark && $theme) {
      return css`
        color: #494c6b;
      `;
    } else if ($mark && $theme) {
      return css`
        color: #d1d2da;
      `;
    } else if (!$mark && !$theme) {
      return css`
        color: #c8cbe7;
      `;
    } else if ($mark && !$theme) {
      return css`
        color: #4d5067;
      `;
    }
  }};
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
    width: 18px;
    height: 18px;
    margin-right: 24px;
    display: none;
  }
`;

const AfterTodo = styled.div<{ $theme: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};
  padding-top: 16px;
`;

const Info = styled.p<{ $theme: boolean }>`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  color: ${({ $theme }) => ($theme ? "#9495a5" : "#5b5e7e")};
  margin: 0;
  background-color: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};

  &:last-child:hover {
    /* color: #494c6b; */
    color: ${({ $theme }) => ($theme ? "#494c6b" : "#e3e4f1")};
  }

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
    cursor: pointer;
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

const FilterMobile = styled.div<{ $theme: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18.5px;
  width: 327px;
  height: 48px;
  border-radius: 5px;
  background-color: ${({ $theme }) => ($theme ? "#ffffff" : "#25273d")};
  box-shadow: ${({ $theme }) =>
    $theme
      ? "0 35px 50px -15px rgba(194, 195, 214, 0.5)"
      : "0 35px 50px -15px rgba(0, 0, 0, 0.5)"};
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

const FilterTexts = styled.p<{
  $activeColor?: boolean;
  $completedColor?: boolean;
  $allColor?: boolean;
  $theme: boolean;
}>`
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.19px;
  ${({ $activeColor, $completedColor, $allColor, $theme }) => {
    if ($activeColor || $completedColor || $allColor) {
      return css`
        color: #3a7cfd;
      `;
    } else if ($theme) {
      return css`
        color: #9495a5;
      `;
    } else if (!$theme) {
      return css`
        color: #5b5e7e;
      `;
    }
  }}
  cursor: pointer;

  &:hover {
    color: ${({ $theme }) => ($theme ? "#494c6b" : "#e3e4f1")};
  }
`;

export default Todos;
