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

/*
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/ui/Header"; // Make sure this matches your exact file path

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        {}
        <Header />

        {}
        <main className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500 text-sm">
          <p>--- End of Header Isolation Preview ---</p>
          <p className="mt-2 text-xs text-slate-600">
            Resize your browser window or open Mobile DevTools to check
            responsiveness!
          </p>
        </main>
      </div>
    </Router>
  );
}
*/
