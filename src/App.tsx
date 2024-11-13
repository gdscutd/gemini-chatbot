import { Route, Routes } from "react-router-dom";
import ChatBot from "./_root/pages/chatbot";
import Home from "./_root/pages/home";
import JokeGenerator from "./_root/pages/JokeGenerator";
import YourOwnGenerator from "./_root/pages/YourOwnGenerator";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/joke-generator" element={<JokeGenerator />} />
        <Route path="/your-generator" element={<YourOwnGenerator />} />
      </Routes>
    </main>
  );
}

export default App;
