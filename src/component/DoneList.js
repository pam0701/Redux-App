import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
