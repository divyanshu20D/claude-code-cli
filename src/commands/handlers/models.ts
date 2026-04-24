import { ProviderName } from "../../core/session.js";
import { Command } from "../types.js";

const providerModels: Record<ProviderName, string[]> = {
  openai: ["gpt-5", "gpt-5-mini"],
  gemini: ["gemini-3-flash-preview", "gemini-3.1-pro"],
};

export const modelsCommand: Command = {
  name: "models",
  description: "List all the models",
  execute(context) {
    const models = providerModels[context.session.provider];
    return {
      message: [`Avalable Models`, ...models].join("\n"),
    };
  },
};
