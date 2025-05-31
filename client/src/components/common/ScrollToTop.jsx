import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; // Adjust this as needed (e.g., header height)
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
};
export default ScrollToTop;
