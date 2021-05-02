import { RecoilRoot } from "recoil";
import "./App.scss";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
    return (
        <div className="App">
          <RecoilRoot>
            <TodoList />
          </RecoilRoot>
        </div>
    );
}

export default App;
