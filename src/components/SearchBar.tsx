import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col space-y-5">
        <div className="py-3 border-b border-gray-600">
          <input
            type="text"
            placeholder="Search user"
            className="w-full bg-transparent border-none focus:outline-none px-5 text-white"
          />
        </div>
        {/* USERS */}
        <div className="px-3 py-4 hover:bg-[#2f2d52] cursor-pointer">
          <div className="flex items-center space-x-2 text-white">
            <UserCircleIcon className="h-7 text-white" />
            {/* user info */}
            <div>
              <span>pavan rathod.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
