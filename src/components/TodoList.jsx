export default function TodoList() {
  let toDos = ["Gym killing", "Work killing", "Run!!!"];

  return (
    <ul className="main">
      {toDos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex}>
            {todo}
          </li>
        );
      })}
    </ul>
  );
}
