// Next.js also provides fonts in the ui component folder
import { inter } from '@/app/ui/fonts';

import PointerShadow from './components/pointerShadow';

// Image component provided by next - stops CLS, does lazy loading etc.
// import Image from "next/image";

// Style modules means that styles are locally scoped to this component - more performant as styling only needs to be applied to relevant component.
import pageStyles from "./page.module.css";

// home component
export default function Home() {
  return (
    <div className={pageStyles.page}>
      <PointerShadow />
      <div className="mx-auto max-w-screen-xl">
        <div className={pageStyles.flexContainer}>
          <header className={pageStyles.header}>
            <div>
              <h1 className={`${inter.className}`}>
                <a href="/">Harold Hurst</a>
              </h1>

              <h2 className="mt-3"> Front End Developer</h2>

              <p className="mt-4">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>

              <nav aria-label="">
                <ul className="mt-16 w-max">
                  <li>
                    <a href="/about">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="/experience">
                      <span>Experience</span>
                    </a>
                  </li>
                  <li>
                    <a href="/projects">
                      <span>Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className={pageStyles.main}>
            <div>
              <p className="mb-4">
                A passionate and dedicated developer, skilled in building static
                and dynamic front-end web services. Knowledge and practical
                experience with modern web frameworks and content management
                systems. Competent in all major development languages with a
                deep understanding of web/browser architecture.
              </p>
              <p className="mb-4">
                With an eye for great design, I am able to contribute both to
                technical and aesthetic aspects of front-end development. Having
                worked in the web development team for a large financial
                organisation as well as on my own personal Javascript projects,
                I have a breadth of abilities and am always eager to expand my
                technical knowledge. I am equally comfortable collaborating
                within teams or managing tasks independently to deliver
                high-quality digital experiences to industry standards and web
                best practices.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
