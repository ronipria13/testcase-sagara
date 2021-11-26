import { BrowserRouter,Switch,Route } from "react-router-dom";
import { Public } from "./routes";
function App() {
  return (
<BrowserRouter>
    <Switch>
        {

        Public.map(({key,path,Components})=>(
            <Route key={key} exact path={path} component={Components} />
        ))

        }
    </Switch>
</BrowserRouter>
  );
}

export default App;
