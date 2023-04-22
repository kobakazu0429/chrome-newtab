import bg from "./bg.jpeg";
import { Clock } from "./components/clock";

export function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, width: "100%", height: "100%" }}
    >
      <div
        style={{
          display: "flex",
          placeContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Clock />
      </div>
    </div>
  );
}
