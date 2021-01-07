import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

// 懒加载页面
const Test01SetState = lazy(() => import("./pages/Test01SetState"));
const Test02LazyLoad = lazy(() => import("./pages/Test02LazyLoad"));
const Test03Hooks = lazy(() => import("./pages/Test03Hooks"));
const Test04Fragment = lazy(() => import("./pages/Test04Fragment"));
const Test05Context = lazy(() => import("./pages/Test05Context"));
const Test06Optimize = lazy(() => import("./pages/Test06Optimize"));
const Test07RenderProps = lazy(() => import("./pages/Test07RenderProps"));
const Test08ErrorBoundary = lazy(() => import("./pages/Test08ErrorBoundary"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="nav">
            <ul>
              <li>
                <Link to="/test01">setState</Link>
              </li>
              <li>
                <Link to="/test02">LazyLoad</Link>
              </li>
              <li>
                <Link to="/test03">Hooks</Link>
              </li>
              <li>
                <Link to="/test04">Fragment</Link>
              </li>
              <li>
                <Link to="/test05">Context</Link>
              </li>
              <li>
                <Link to="/test06">Optimize</Link>
              </li>
              <li>
                <Link to="/test07">RenderProps</Link>
              </li>
              <li>
                <Link to="/test08">ErrorBoundary</Link>
              </li>
            </ul>
          </div>
        </header>
        <div style={{ marginTop: "30px" }}>
          <hr />
          <Suspense fallback={<h2>加载中...</h2>}>
            <Route path="/test01" component={Test01SetState} />
            <Route path="/test02" component={Test02LazyLoad} />
            <Route path="/test03" component={Test03Hooks} />
            <Route path="/test04" component={Test04Fragment} />
            <Route path="/test05" component={Test05Context} />
            <Route path="/test06" component={Test06Optimize} />
            <Route path="/test07" component={Test07RenderProps} />
            <Route path="/test08" component={Test08ErrorBoundary} />
            <Redirect to="/test01" />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
