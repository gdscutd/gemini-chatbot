import { Button } from "@/components/ui/button";
import { useGenerateTextCreative } from "@/lib/react-query/queries";
import { useState } from "react";

const YourOwnGenerator = () => {
  const [joke, setJoke] = useState(
    "Press the button to generate {insert your generator name here}..."
  );

  const { mutateAsync: generateText } = useGenerateTextCreative();

  const handleGenerateJoke = async () => {
    const newJoke = await generateText(
      "Replace this with your own prompt" // Prompt
    );
    console.log(newJoke);
    setJoke(newJoke ?? "Something went wrong");
  };
  return (
    <div className="flex h-screen items-center justify-center w-full flex-col overflow-scroll">
      <h1 className="text-3xl font-bold mb-3 absolute top-5">
        Your Own Generator
      </h1>
      <h3 className="text-6xl font-semibold text-green-500">{joke}</h3>
      <Button className="mt-8" onClick={handleGenerateJoke}>
        Generate
      </Button>
    </div>
  );
};

export default YourOwnGenerator;
