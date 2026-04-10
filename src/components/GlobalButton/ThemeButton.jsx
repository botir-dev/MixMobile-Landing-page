import SunIcon from "../../Icons/SunIcon";
import MoonIcon from "../../Icons/MoonIcon";

export default function ThemeButton({ onClick, mode }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-900 p-3 rounded-full cursor-pointer fixed bottom-5 right-5 z-999"
    >
      {mode === true ? (
        <SunIcon color={"white"} />
      ) : (
        <MoonIcon color={"white"} />
      )}
    </button>
  );
}
