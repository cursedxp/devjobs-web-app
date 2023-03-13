import { useContext } from "react";
import { ThemeContext } from "../context/context";
import Header from "../components/header/Header";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <main>
      <Header></Header>
      <h1>Home</h1>
    </main>
  );
}
