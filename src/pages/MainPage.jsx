import MainComponent from "../components/MainComponent";
import { IoIosArrowForward } from "react-icons/io";

const MainPage = () => {
  return (
    <>
      <MainComponent />
      <IoIosArrowForward style={{ color: "blue", fontSize: "30px" }} />
    </>
  );
};

export default MainPage;
