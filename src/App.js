import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//이것도 가능함
//function App() {
//return (
// <div>
// <Switch>
//  <Route path="/" exact component={MainPageComponent} />
//  <Route path="/product" component={ProductPage} />
//  <Route path="/upload" component={UploadPage} />
// </Switch>
//</div>
// );
//}

//export default App;
