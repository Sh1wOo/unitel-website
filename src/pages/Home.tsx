import Hero from "../shared/components/Hero";
import Model from "../shared/components/Model";
import NavBar from "../widgets/Navbar";

export default function HomePage() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Model/>
    </main>
  );
}
