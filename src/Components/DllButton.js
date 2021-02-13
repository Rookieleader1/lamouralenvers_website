import { useState } from "react";
import { dllON, dllOFF } from "../assets/img/buttons";
import axios from "axios";

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <a
      href="https://drive.google.com/drive/folders/1N91p71LQgPLVg29xujOhXlAtc6fMngOV"
      target="_blank"
    >
      <img
        className="h-20"
        src={isLoading ? dllON : dllOFF}
        alt="download button"
      />
    </a>
  );
};

export default DownloadButton;
