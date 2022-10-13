import Chatbox from "../components/Chatbox";
import Sidebar from "../components/Sidebar";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};

export default Home;
