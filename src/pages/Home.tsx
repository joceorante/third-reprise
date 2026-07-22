import Hero from "../components/Hero";
import CoverTheory from "../components/CoverTheory";
import Videos from "../components/Videos";
import Music from "../components/Music";
import Merch from "../components/Merch";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoverTheory />
      <Videos />
      <Music />
      <Merch />
      <Contact />
    </main>
  );
}
