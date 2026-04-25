import { providerModels } from "../../core/provider-options.js";
import { Command } from "../types.js";

export const modelsCommand: Command = {
  name: "models",
  description: "List all the models",
  execute(context) {
    const models = providerModels[context.session.provider];
    return {
      message: [`Available models:`, ...models].join("\n"),
    };
  },
};
