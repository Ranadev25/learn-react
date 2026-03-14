import { lazy, Suspense } from "react";
import "./app.css"
import Loading from "./components/loding";
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <section className="main">
        
        <Suspense fallback={<Loading />}>
          <Home/>
        </Suspense>
      </section>
    </>
  );
}

export default App;
