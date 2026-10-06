import { useEffect, useState } from "react";
import "./App.css";

// Step 1: Define the API response type
interface User {
  id: number;
  name: string;
}

function App() {
  // Step 2: Pass the type generic to useState
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <>
      <div>
        <h1>Users List - Ally</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
