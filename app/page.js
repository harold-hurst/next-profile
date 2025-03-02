// Next.js also provides fonts in the ui component folder
import { inter } from '@/app/ui/fonts';

// Image component provided by next - stops CLS, does lazy loading etc.
// import Image from "next/image";

// style modules means that styles are locally scoped to this component - more performant as styling only needs to be applied to relevant component.
import styles from "./page.module.css";

// home component
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={`{styles.flex_container} mx-auto max-w-screen-xl`}>
        <header>
          <div>

            <h1 className={`${inter.className}`}>
              <a href="/">Harry Hurst</a>
            </h1>

            <h2 className="mt-3"> Front End Developer</h2>

            <p className="mt-4">
              I build accessible, pixel-perfect digital experiences for the web.
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
        <main className={styles.main}>
          <div>
            <p className="mb-4">
              A passionate and driven web developer, competent in modern web
              technologies including popular frameworks and content management
              systems. I thrive on building clean, responsive, and accessible
              front-end content. With an eye for good digital designs and a deep
              understanding of web/browser architecture, I am able to contribute
              both to technical and aesthetic aspects of front-end development.
            </p>
            <p className="mb-4">
              Having worked in the web development team for a large financial
              organisation as well as on my own personal JavaScript projects, I
              have a breadth of competencies and am always looking to further
              expand my skill-base.
            </p>
            <p className="mb-4">
              I adhere to best practices in order to maintain readable, scalable
              and secure code bases. I enjoy working collaboratively as well as
              independently on tasks and constantly keep up to date with new
              digital trends.
            </p>
          </div>
        </main>

        <footer className={styles.footer}>
          {/* <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a> */}
        </footer>
      </div>
    </div>
  );
}
