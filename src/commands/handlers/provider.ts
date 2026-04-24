import { ProviderName, setModel, setProvider } from "../../core/session.js";
import { Command } from "../types.js";

const supportedProviders: ProviderName[] = ["openai", "gemini"];

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
      if (
        nextProvider == "openai" &&
        context.session.model.startsWith("gemini")
      ) {
        setModel(context.session, "gpt-5");
      }

      if (
        nextProvider == "gemini" &&
        context.session.model.startsWith("openai")
      ) {
        setModel(context.session, "gemini-3.1-flash-preview");
      }
    }
    return {
      message: `Provider switched to ${context.session.provider}`,
    };
  },
};
