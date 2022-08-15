import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path={"/welcome"}>
            <Welcome />
          </Route>
          <Route path={"/products"} exact>
            <Products />
          </Route>
          <Route path={"/products/:productId"}>
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
