import Modal from "react-modal";
import { Headset } from "../assets/icons";

const customStyle = {
  overlay: {
    zIndex: 100,
  },
  content: {
    height: "50%",
    margin: "auto",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const StartModal = ({ modalIsOpen, setModalIsOpen }) => (
  <Modal isOpen={modalIsOpen} style={customStyle}>
    <Headset size={150} color={"#000"} />
    <p className="font-medium text-center">
      Pour une experience optimale, pensez à mettre votre casque.
    </p>
    <input
      type="button"
      className="bg-blue-500 rounded p-3 text-white w-full font-medium"
      onClick={() => setModalIsOpen(false)}
      value="C'est fait !"
    />
  </Modal>
);

Modal.setAppElement("#root");

export default StartModal;
