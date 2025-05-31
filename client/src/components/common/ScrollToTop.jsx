import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component ensures a smooth scroll to top or to an in-page anchor when navigating between routes or hashes.
const ScrollToTop = () => {
  // Extract the current pathname and hash from the URL
  const { pathname, hash } = useLocation();

  // When the pathname changes (i.e., route navigation), scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  }, [pathname]);

  // When there's a hash in the URL (e.g., /about#therapist-name), scroll to the target element
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", ""); // Remove '#' to get the element ID

      // Delay execution slightly to ensure the element is rendered into the DOM
      setTimeout(() => {
        const el = document.getElementById(id); // Get the DOM element with the matching ID
        if (el) {
          const yOffset = -80; // Optional: adjust to offset fixed headers
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          // Smooth scroll to the calculated position
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100); // 100ms delay ensures layout has updated
    }
  }, [hash]);
};

export default ScrollToTop;