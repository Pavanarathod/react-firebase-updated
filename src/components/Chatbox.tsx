import ChatboxHeader from "./ChatboxHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

type Props = {};

const Chatbox = (props: Props) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col h-full">
        <ChatboxHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default Chatbox;
