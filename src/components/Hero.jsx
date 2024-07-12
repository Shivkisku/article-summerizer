import { logo } from "../assets";
import {
  PROJECT_NAME,
  //PROJECT_GITHUB_LINK,
  HERO_TITLE_LEFT,
  HERO_TITLE_RIGHT,
  HERO_SUBTITLE_LEFT,
  HERO_SUBTITLE_RIGHT,
} from "../constants";

// hero
const Hero = () => {
  return (
    <header className="w-full flex flex justify justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* brand logo */}
        <img

        />

        {/* github */}
        < >
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              
            />
          </svg>
          {/* text */}
        </>
      </nav>

      {/* title */}
      <h1 className="head_text">
        {HERO_TITLE_LEFT} <br className="max-md:hidden" />
        <span className="orange_gradient">{HERO_TITLE_RIGHT}</span>
      </h1>

      {/* subtitle */}
      <h2 className="desc">
        {HERO_SUBTITLE_LEFT}{" "}
        <span className="orange_gradient">{PROJECT_NAME}</span>,{" "}
        {HERO_SUBTITLE_RIGHT}
      </h2>
    </header>
  );
};

export default Hero;
