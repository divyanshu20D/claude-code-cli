export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AuthMode = "none" | "subscription" | "api-key";
export type ProviderName = "openai" | "gemini";

export type Session = {
  workspacePath: string;
  provider: ProviderName;
  model: string;
  history: ChatMessage[];
  isLoggedIn: boolean;
  authMode: AuthMode;
};

export function createSession(workspacePath: string): Session {
  return {
    workspacePath,
    provider: "openai",
    model: "gpt-5",
    history: [],
    isLoggedIn: false,
    authMode: "none",
  };
}

export function resetSessionHistory(session: Session): void {
  session.history = [];
}

export function addUserMessage(session: Session, content: string): void {
  session.history.push({
    role: "user",
    content,
  });
}

export function addAssistantMessage(session: Session, content: string): void {
  session.history.push({
    role: "assistant",
    content,
  });
}

export function setProvider(session: Session, provider: ProviderName) {
  session.provider = provider;
}

export function setModel(session: Session, model: string) {
  session.model = model;
}

export function setLoginState(
  session: Session,
  isLoggedIn: boolean,
  authMode: AuthMode,
): void {
  session.isLoggedIn = isLoggedIn;
  session.authMode = authMode;
}
