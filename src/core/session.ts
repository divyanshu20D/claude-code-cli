export type ChatMessages = {
    role : "user" | "assistant",
    content : string
}

export type Session = {
    workspacePath : string,
    provider : string,
    model : string,
    history : ChatMessages[],
}

export function createSession(workspacePath : string): Session{
    return {
        workspacePath,
        provider : "openai",
        model : "gpt-5",
        history : []
    }
}

export function resetSessionHistory(session : Session) : void {
    session.history = []
}

export function addUserMessage (session : Session, content : string): void {
    session.history.push({
        role : "user",
        content
    })
}

export function addAssitantMessage (session : Session, content : string){
    session.history.push({
        role : "assistant",
        content
    })
}

