

// Style modules means that styles are locally scoped to this component - more performant as styling only needs to be applied to relevant component.
import pageStyles from "../page.module.css";

// home component
export default function Home() {
  return (
    <div className={pageStyles.page}>
      <div className="mx-auto max-w-screen-xl">
        <div className={pageStyles.flexContainer}>

          <main className={pageStyles.main}>
about
          </main>
        </div>
      </div>
    </div>
  );
}
