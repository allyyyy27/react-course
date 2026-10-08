import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [currentView, setCurrentView] = useState<"signup" | "login">("signup");

  return (
    <main className="min-h-screen bg-slate-100">
      {currentView === "signup" ? (
        <Register onSwitchToLogin={() => setCurrentView("login")} />
      ) : (
        <Login onSwitchToSignup={() => setCurrentView("signup")} />
      )}
    </main>
  );
}

export default App;
