import { useState } from "react";
import "./style/output.css";
import AudioPlayer from "./Components/AudioPlayer";
import { commands } from "./globals";

const App = () => {
  const [command, setCommand] = useState(commands.stop);
  return (
    <div className="h-screen bg-blue-400">
      <AudioPlayer command={command} setCommand={setCommand} />
    </div>
  );
};

export default App;
