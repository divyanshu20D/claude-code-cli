import {
  getDefaultModel,
  supportedProviders,
} from "../../core/provider-options.js";
import { ProviderName, setModel, setProvider } from "../../core/session.js";
import { Command } from "../types.js";

export const providerCommand: Command = {
  name: "provider",
  description: "Show or switch provider",
  execute(context, args) {
    if (args.length === 0) {
      return {
        message: `Current provider is ${context.session.provider}`,
      };
    }

    const nextProvider = args[0].toLowerCase() as ProviderName;

    if (!supportedProviders.includes(nextProvider)) {
      return {
        message: `Unsupported provider: ${args[0]}. Available: ${supportedProviders.join(", ")}`,
      };
    }
    const previousProvider = context.session.provider;
    setProvider(context.session, nextProvider);

    if (previousProvider !== nextProvider) {
      setModel(context.session, getDefaultModel(nextProvider));
    }
    return {
      message: `Provider switched to ${context.session.provider}`,
    };
  },
};
