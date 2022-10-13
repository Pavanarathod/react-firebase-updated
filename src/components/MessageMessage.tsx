import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface Props {
  sender: boolean;
}

const MessageMessage = ({ sender }: Props) => {
  // const [sender, setSender] = useState(false);

  return (
    <div
      className={clsx(
        "flex w-full",
        sender ? "justify-start items-start" : "items-end justify-end"
      )}
    >
      {sender ? (
        <div className="flex space-x-5 max-w-[70%]">
          <div className="flex flex-col items-center space-y-1">
            <UserCircleIcon className="h-8 w-8" />
            <p className="text-sm text-gray-500">just now</p>
          </div>
          <div className="flex-1">
            <p className="px-3 py-4 bg-white rounded-b-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              consequuntur? Lorem ipsum dolor sit amet consectetur, adipisicing
              !
            </p>
          </div>
        </div>
      ) : (
        <div className="flex  space-x-5 max-w-[70%]">
          <div className="flex-1">
            <p className="px-3 py-4 bg-blue-500 text-white rounded-b-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              consequuntur? Lorem ipsum dolor sit amet consectetur, adipisicing
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <UserCircleIcon className="h-8 w-8" />
            <p className="text-sm text-gray-500">just now</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageMessage;
