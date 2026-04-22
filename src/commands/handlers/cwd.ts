import { Command, CommandContext } from "../types.js";

export const cwdCommand: Command = {
  name: "cwd",
  description: "Show current workspace path",
  execute: (context) => {
    return {
      message: `Current workspace path is ${context.session.workspacePath}`,
    };
  },
};
