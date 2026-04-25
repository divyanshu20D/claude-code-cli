import { ProviderName } from "./session.js";

export const supportedProviders: ProviderName[] = ["openai", "gemini"];

export const providerModels: Record<ProviderName, string[]> = {
  openai: ["gpt-5", "gpt-5-mini"],
  gemini: ["gemini-2.5-pro", "gemini-3.1-flash-preview"],
};

export const getDefaultModel = (provider: ProviderName): string => {
  return providerModels[provider][0];
};
