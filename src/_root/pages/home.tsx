import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center w-full">
      <Button
        className="bg-blue-600 hover:bg-blue-900"
        onClick={() => navigate("/chatbot")}
      >
        ChatBot
      </Button>
      <Button
        className="bg-orange-600 hover:bg-orange-900 mx-3"
        onClick={() => navigate("/joke-generator")}
      >
        Joke Generator
      </Button>
      <Button
        className="bg-green-600 hover:bg-green-900"
        onClick={() => navigate("/your-generator")}
      >
        Your Own Generator
      </Button>
    </div>
  );
};

export default Home;
