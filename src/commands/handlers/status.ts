import { Command } from "../types.js";

export const statusCommand: Command = {
  name: "status",
  description: "Show current session status",
  execute: (context) => {
    const { workspacePath, provider, model, history } = context.session;
    return {
      message: [
        "Session status:",
        `workspace: ${workspacePath}`,
        `provider: ${provider}`,
        `model: ${model}`,
        `history count: ${history.length}`,
      ].join("\n"),
    };
  },
};
