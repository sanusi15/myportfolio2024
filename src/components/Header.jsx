/**
 * @copyright 2024 sanusi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState } from "react";
/**
 * components
 */
import Navbar from "./Navbar";
import ButtonMode from "./ButtonMode";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-200/10 dark:from-slate-200 dark:to-slate-500/10">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className="">
          <a href="/" className="logo">
            <img src="/images/logo_sk_blue.svg" width={28} height={28} alt="Sanusi" />
          </a>
        </h1>
        <div className="relative flex items-center gap-4 md:justify-self-center">
          <ButtonMode />
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};
// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   return (
//     <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to zinc-90/0">
//       <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
//         <h1>
//           <a href="/" className="logo">
//             <img src="/images/logo.svg" width={40} height={40} alt="Sanusi" />
//           </a>
//         </h1>
//         <div className="relative md:justify-self-center">
//           <button
//             className="menu-btn md:hidden"
//             onClick={() => setNavOpen((prev) => !prev)}
//           >
//             <span className="material-symbols-rounded">
//               {navOpen ? "close" : "menu"}
//             </span>
//           </button>
//           <Navbar navOpen={navOpen} />
//         </div>
//         <a
//           href="#contact"
//           className="btn btn-secondary max-md:hidden md:justify-self-end"
//         >
//           Contact Me
//         </a>
//       </div>
//     </header>
//   );
// };

export default Header;