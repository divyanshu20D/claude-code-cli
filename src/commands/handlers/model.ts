import { providerModels } from "../../core/provider-options.js";
import { setModel } from "../../core/session.js";
import { Command } from "../types.js";

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

    if (!availableModels.includes(nextModel)) {
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
