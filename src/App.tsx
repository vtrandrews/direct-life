import RoutesRedirect from "./data/routes";
import GlobalStyle from "./ui/styles/global-styles";
import HeaderMenu from "./ui/components/menu/header-menu";
import AsideMenu from "./ui/components/menu/aside-menu";

function App() {
  return (
    <div>
      <GlobalStyle />
      <HeaderMenu />
      <AsideMenu />
      <RoutesRedirect />
    </div>
  );
}

export default App;
