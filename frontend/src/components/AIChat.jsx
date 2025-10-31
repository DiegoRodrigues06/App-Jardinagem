import { Bubble } from "@typebot.io/react";

export default function AIChat() {
  return (
    <Bubble
      typebot="open-ai-assistant-chat-c7sdlr9"
      apiHost="https://viewer.typebot.io"
      theme={{
        button: { backgroundColor: "#248a38c2" }, 
        chatWindow: {
          backgroundColor: "#429163ff", 
          textColor: "#ffffff",     
          inputBackgroundColor: "#1b1b1b", 
          inputTextColor: "#fff",     
          userBubbleColor: "#2d2d2d", 
          botBubbleColor: "#181818",  // sas bomba não funciona nenhuma kkkkkkkkkk
        }
      }}
    />
  );
}
