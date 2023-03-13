import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Home() {
  const theme = useContext(ThemeContext);

  return <h1>Home</h1>;
}
