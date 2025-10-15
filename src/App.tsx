import type { QuizResponse } from "./api/types/externalInterface";
import type { User } from "./api/types/userInterface";
import "./App.css";

function App() {
  type MiniUser = Pick<User, "id" | "username" | "email">;
  const users: MiniUser[] = [
    { id: 1, username: "홍길동", email: "hong@test.com" },
    { id: 2, username: "김철수", email: "kim@test.com" },
    { id: 3, username: "이영희", email: "lee@test.com" },
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
          {user.username} - {user.email}
        </div>
      ))}
    </>
  );
}

export default App;
