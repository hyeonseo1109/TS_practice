import "./App.css";
import type { QuizResponse, User } from "./type";

function App() {
  const users: User[] = [
    { id: 1, name: "홍길동", email: "hong@test.com" },
    { id: 2, name: "김철수", email: "kim@test.com" },
    { id: 3, name: "이영희", email: "lee@test.com" },
  ];

  const response: QuizResponse = {
    success: true,
    data: {
      id: 0,
      question: null,
      options: [],
      answer: null,
    },
  };
  return (
    <>
      <div>{response.data.question}</div>
      <h1>유저 목록</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </>
  );
}

export default App;
