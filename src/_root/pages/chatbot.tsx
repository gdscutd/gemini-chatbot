import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { ChatHistory } from "@/lib/ai/config";
import {
  useCreateChatSession,
  useGenerateTextChat,
} from "@/lib/react-query/queries";
import { ThreeDots } from "react-loader-spinner";

export const ChatBot = () => {
  // State to manage user input
  const [userInput, setUserInput] = useState("");
  // State to manage chat history
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);

  const { data: chatSession } = useCreateChatSession();

  // Hook to handle sending messages and tracking pending state
  const { mutateAsync: sendMessage, isPending: isMessagePending } =
    useGenerateTextChat();

  /**
   * Handles sending a message.
   * If the user input is not empty, it updates the chat history with the user's message,
   * sends the message to the API, and updates the chat history with the response.
   */
  const handleSendMessage = async () => {
    if (!userInput) return;
    setChatHistory((prev) => [...prev, { type: "user", message: userInput }]);
    const response = await sendMessage({
      message: userInput,
      chatHistory,
      chatSession: chatSession!,
    });
    setChatHistory(response || []);
    setUserInput("");
  };

  return (
    <div className="flex h-screen items-center justify-center w-full flex-col overflow-scroll">
      <h1 className="text-3xl font-bold mb-3">ChatBot</h1>
      <div className="h-[80%] items-center justify-center w-[80%]">
        {/* Main chat container */}
        <MainContainer>
          {/* Chat container which contains the message list and the input field */}
          <ChatContainer>
            {/* Message list which displays all the messages in the chat */}
            <MessageList>
              {/* Map over the chat history and create a message component for each entry */}
              {chatHistory.map((elt, i) => (
                <Message
                  key={i}
                  model={{
                    message: elt.message,
                    sentTime: "just now",
                    sender: elt.type,
                    direction: elt.type === "user" ? "outgoing" : "incoming",
                  }}
                />
              ))}
              {/* Display a spinner if the message is being sent */}
              {isMessagePending && <ThreeDots color="#0b4f9d" />}
            </MessageList>
            {/* Input field for the user to type a message */}
            <MessageInput
              placeholder="Type message here"
              value={userInput}
              onChange={(e) => setUserInput(e)}
              onSend={handleSendMessage}
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatBot;
