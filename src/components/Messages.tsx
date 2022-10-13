import MessageMessage from "./MessageMessage";

type Props = {};

const Messages = (props: Props) => {
  return (
    <div className="flex-1 bg-[#ddddf7] overflow-y-scroll w-full h-full">
      <div className="px-5 py-3 flex flex-col space-y-10">
        <MessageMessage sender={true} />
        <MessageMessage sender={false} />
        <MessageMessage sender={true} />
        <MessageMessage sender={false} />
      </div>
    </div>
  );
};

export default Messages;
