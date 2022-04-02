import SiteFooter from "./components/site-footer/site-footer";
import SiteHeader from "./components/site-header/site-header";
import SiteMain from "./components/site-main";

function App() {
  return (
    <div className="app">
      <SiteHeader />
      <SiteMain />
      <SiteFooter />
    </div>
  );
}

export default App;
