import { Route, Routes } from "react-router-dom";
import ChatBot from "./_root/pages/chatbot";
import Home from "./_root/pages/home";
import JokeGenerator from "./_root/pages/JokeGenerator";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/joke-generator" element={<JokeGenerator />} />
      </Routes>
    </main>
  );
}

export default App;
