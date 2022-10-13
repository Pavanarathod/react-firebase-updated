import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const SidebarHeader = (props: Props) => {
  return (
    <div className="bg-[#2f2d52]">
      <div className="flex items-center justify-between px-3 py-5 sticky top-0 text-white">
        <h3 className="text-xl font-semibold">Lama Chat</h3>
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="h-7 text-white" />
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
