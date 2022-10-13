import {
  PaperClipIcon,
  PhotoIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const MessageInput = (props: Props) => {
  return (
    <div className="py-5">
      <div>
        <form className="flex justify-between">
          <input
            type="text"
            placeholder="Type something..."
            className="flex-1 px-5 py-2 border-none focus:outline-none placeholder:text-lg font-semibold placeholder:text-gray-400"
          />
          <div className="flex items-center space-x-3 px-6">
            <label htmlFor="fileOne">
              <PaperClipIcon className="h-7 cursor-pointer" />
            </label>
            <input type="file" hidden id="fileOne" />
            <label htmlFor="fileTwo">
              <PhotoIcon className="h-7 cursor-pointer" />
            </label>
            <input type="file" id="fileTwo" hidden />
            <PaperAirplaneIcon className="h-7 transition-all duration-200 ease-in-out hover:-rotate-45 cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
