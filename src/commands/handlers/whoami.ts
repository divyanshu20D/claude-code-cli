import { Command } from "../types.js";

export const whoamiCommand: Command = {
  name: "whoami",
  description: "Show current session identity and provider info",
  execute(context) {
    const { workspacePath, isLoggedIn, authMode, model, provider } =
      context.session;

    return {
      message: [
        "Session info:",
        `workspace: ${workspacePath}`,
        `provider: ${provider}`,
        `model: ${model}`,
        `logged in: ${isLoggedIn ? "yes" : "no"}`,
        `auth mode: ${authMode}`,
      ].join("\n"),
    };
  },
};
