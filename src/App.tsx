import { useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Static-host preview builds (no server-side SPA fallback) set
// VITE_HASH_ROUTER=1 to route via the URL fragment instead of pathname.
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter;
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

/**
 * Scrolls to the element named by the URL hash after route changes (so nav
 * links like "/#tour" work from any page), or back to the top on a plain
 * route change.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered.
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ink font-mono text-white">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
