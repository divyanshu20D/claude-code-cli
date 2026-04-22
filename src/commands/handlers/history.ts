import { Command } from "../types.js";

export const historyCommand: Command = {
  name: "history",
  description: "Show Conversation History",
  execute(context) {
    const { history } = context.session;
    if (history.length === 0) {
      return {
        message: "No Covnersation History yet",
      };
    }

    const formattedHistory = history.map((message, index) => {
      const label = message.role == "user" ? "user" : "assistant";
      return `${index + 1}. ${label}: ${message.content}`;
    });

    return {
      message: formattedHistory.join("\n"),
    };
  },
};
