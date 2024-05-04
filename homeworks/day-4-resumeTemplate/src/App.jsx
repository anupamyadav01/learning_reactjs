import Icon from "./components/Icon";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <div className=" bg-black">
      <Profile />
      <Work />
      <Skill />
      <Icon />
    </div>
  );
}

export default App;
