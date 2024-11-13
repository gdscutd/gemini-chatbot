import { Button } from "@/components/ui/button";
import { useGenerateTextCreative } from "@/lib/react-query/queries";
import { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("Press the button to generate a joke...");

  const { mutateAsync: generateJoke } = useGenerateTextCreative();

  const handleGenerateJoke = async () => {
    const newJoke = await generateJoke(
      "tell me a joke and make sure to make it as unique as possible" // Prompt
    );
    console.log(newJoke);
    setJoke(newJoke ?? "Something went wrong");
  };
  return (
    <div className="flex h-screen items-center justify-center w-full flex-col overflow-scroll">
      <h1 className="text-3xl font-bold mb-3 absolute top-5">Joke Generator</h1>
      <h3 className="text-6xl font-semibold text-orange-500">{joke}</h3>
      <Button className="mt-8" onClick={handleGenerateJoke}>
        Generate
      </Button>
    </div>
  );
};

export default JokeGenerator;
