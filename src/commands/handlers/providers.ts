import { Command } from "../types.js";

export const providersCommand: Command = {
  name: "providers",
  description: "List all the providers",
  execute() {
    const providers = ["Available Providers", "openai", "gemini"].join("\n");
    return {
      message: `All the providers are ${providers}`,
    };
  },
};
