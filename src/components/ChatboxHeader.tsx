import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
type Props = {};

const ChatboxHeader = (props: Props) => {
  return (
    <div className="bg-[#3e3c61] py-5 px-3">
      <div className="flex justify-between">
        <h1 className="text-gray-300 font-bold">Pavan Rathod</h1>
        <EllipsisHorizontalIcon className="h-6 text-white" />
      </div>
    </div>
  );
};

export default ChatboxHeader;
