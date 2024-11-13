import { ChatSession, GenerativeModel } from "@google/generative-ai";
import { ChatHistory, creativeModel, model } from "./config";

/*
Generates some text based on the message (prompt) and the model that you want to use
*/
export async function generateText(message: string, model: GenerativeModel) {
  //Attempt the request
  try {
    /**
     * Call the generateContent method of the model with the input message
     * This will make an API call to the Google servers.
     * The result is a Response object which contains the generated text
     */

    //Type your code here

    /**
     * Get the response text from the result Response object
     */

    //Type your code here
    
    /**
     * Return the generated text
     */

    //Type your code here
    
  } catch (e) { //In case an error occurs
    /**
     * If an error occurs, log it to the console
     */
    console.log("Error occurred while fetching", e);
  }
}

/**
 * Generate text based on the given input message and add it to the chat history
 * This function assumes that the message is not empty.
 * If the message is empty, the function does nothing and returns the current chat history.
 * The function takes three parameters:
 * - message: the input message from the user
 * - chatHistory: the current chat history between the user and the bot
 * - chatSession: the chat session object that manages the conversation with the bot
 */
export async function generateTextChat(
  message: string, // The input message from the user
  chatHistory: ChatHistory[], // The current chat history between the user and the bot
  chatSession: ChatSession // The chat session object that manages the conversation with the bot
) {
  // If the message is empty, don't do anything and return the current chat history
  // This is because we don't want to send an empty message to the bot

  //Type your code here

  try {
    // Call the sendMessage method so that we retain history with gemini
    // This will send the message to the bot and wait for a response

    //Type your code here

    // Get the response text from the result Response object

    //Type your code here

    /**
     * Create a new chat history by appending the generated text to the current chat history
     * The new chat history will have two new entries:
     * - A "user" entry with the input message
     * - A "bot" entry with the generated text
     * This is done to keep a record of the conversation history
     */
    const newChatHistory = (prev: ChatHistory[]) => [
      ...prev,
      // Create a new "user" entry with the input message
      { type: "user" as const, message: message },
      // Create a new "bot" entry with the generated text
      { type: "bot" as const, message: text ?? "Something went wrong" },
    ];

    // Update the chat history with the generated text
    // This is done to keep the chat history up to date

    //Type your code here

    // Return the new chat history
    // This is the updated chat history that includes the generated text

    //Type your code here
    
  } catch (e) {
    // If an error occurs, log it to the console
    // This is done to debug any errors that occur during the API call
    console.log("Error occurred while fetching", e);
  }
}

/**
 * Generates text based on the given input message using the creative model.
 * The creative model is the same as the normal model, but with a higher temperature
 * to make the generated text more creative.
 */
export async function generateTextCreative(message: string) {
  try {
    // Call the generateText function, passing the input message and the creative model.
    // This will trigger an API call to generate a response based on the input message.

    //Type your code here

    // Return the generated result from the generateText function.

    //Type your code here
    
  } catch (e) {
    // If an error occurs, log it to the console.
    console.log("Error occurred while fetching", e);
  }
}


/**
 * Generates text based on the given input message using the normal model.
 */
/*export async function generateTextNormal(message: string) {
  try {
    // Call the generateText function, passing the input message and the model.
    // This will trigger an API call to generate a response based on the input message.
    const result = await generateText(message, model);

    // Return the generated result from the generateText function.
    return result;
  } catch (e) {
    // If an error occurs during the API call or processing, log the error to the console.
    console.log("Error occurred while fetching", e);
  }
}*/
