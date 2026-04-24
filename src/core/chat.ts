import { CommandResults } from "../commands/types.js";
import { addAssistantMessage, addUserMessage, Session } from "./session.js";

export function handleChatMessage(
  session: Session,
  input: string,
): CommandResults {
  addUserMessage(session, input);
  const reply = `You said ${input}`;
  addAssistantMessage(session, reply);
  return {
    message: reply,
  };
}
