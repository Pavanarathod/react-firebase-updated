import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const SidebarChats = (props: Props) => {
  return (
    <div className="px-3 py-4 hover:bg-[#2f2d52] cursor-pointer">
      <div className="flex items-center space-x-2 text-white">
        <UserCircleIcon className="h-7 text-white" />
        {/* user info */}
        <div>
          <span>pavan rathod.</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarChats;
