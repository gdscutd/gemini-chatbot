import { useMutation, useQuery } from "@tanstack/react-query";
import { generateTextCreative, generateTextChat } from "../ai/api";
import { ChatHistory, createChatSession } from "../ai/config";
import { ChatSession } from "@google/generative-ai";

export const useGenerateTextChat = () => {
  return useMutation({
    mutationFn: ({
      message,
      chatHistory,
      chatSession,
    }: {
      message: string;
      chatHistory: ChatHistory[];
      chatSession: ChatSession;
    }) => generateTextChat(message, chatHistory, chatSession),
  });
};

export const useGenerateTextCreative = () => {
  return useMutation({
    mutationFn: (message: string) => generateTextCreative(message),
  });
};

export const useCreateChatSession = () => {
  return useQuery({
    queryKey: ["Create Chat Session"],
    queryFn: () => createChatSession(),
  });
};
