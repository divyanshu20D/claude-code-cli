import { setModel } from "../../core/session.js";
import { Command } from "../types.js";

const providerModels = {
  openai: ["gpt-5", "gpt-5-mini"],
  gemini: ["gemini-2.5-pro", "gemini-3.1-flash-preview"],
} as const;

export const modelCommand: Command = {
  name: "model",
  description: "Show or switch models",
  execute(context, args) {
    if (args.length === 0) {
      return {
        message: `Current Model is ${context.session.model}`,
      };
    }
    const availableModels = providerModels[context.session.provider];
    const nextModel = args.join(" ");

    if (!availableModels.includes(nextModel as never)) {
      return {
        message: `Unsupported Model for ${context.session.provider}, Available Models ${availableModels.join(" ")}`,
      };
    }

    setModel(context.session, nextModel);

    return {
      message: `Model set to ${context.session.model}`,
    };
  },
};
