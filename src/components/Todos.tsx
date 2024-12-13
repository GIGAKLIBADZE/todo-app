const Todos: React.FC = () => {
  return (
    <>
      <input type="text" placeholder="Create a new todo..." />
      <div>
        <div>
          <p>5 items left</p>
          <p>Clear Completed</p>
        </div>
      </div>
      <div>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </>
  );
};

export default Todos;
