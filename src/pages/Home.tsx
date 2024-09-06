import Hero from "../shared/components/Hero";
import Model from "../shared/components/Model";
import NavBar from "../shared/components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Model/>
    </main>
  );
}
