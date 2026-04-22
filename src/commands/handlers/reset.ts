import { resetSessionHistory } from "../../core/session.js";
import { Command } from "../types.js";

export const resetCommand: Command = {
  name: "reset",
  description: "Clear conversation history",
  execute: (context) => {
    resetSessionHistory(context.session);
    return {
      message: "Conversation History cleared.",
    };
  },
};
