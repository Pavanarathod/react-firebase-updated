import SearchBar from "./SearchBar";
import SidebarChats from "./SidebarChats";
import SidebarHeader from "./SidebarHeader";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex-[0.3] bg-[#3e3c61] h-full w-full">
      <div>
        <SidebarHeader />
        <div className="">
          <SearchBar />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
