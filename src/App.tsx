import Hero from "./shared/components/Hero";
import Highlights from "./shared/components/Highlights";
import NavBar from "./shared/components/Navbar";

export default function App() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
    </main>
  );
}
