import MessageMessage from "./MessageMessage";

type Props = {};

const Messages = (props: Props) => {
  return (
    <div className="flex-1 bg-pink-50">
      <div>
        <MessageMessage />
      </div>
    </div>
  );
};

export default Messages;
