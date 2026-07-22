import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverTheory from "./components/CoverTheory";
import Videos from "./components/Videos";
import Music from "./components/Music";
import Merch from "./components/Merch";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-mono text-white">
      <Navbar active="Videos" />
      <main>
        <Hero />
        <CoverTheory />
        <Videos />
        <Music />
        <Merch />
        <Contact />
      </main>
    </div>
  );
}
