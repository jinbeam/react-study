import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import ImageSearch from "./components/ImageSearch";
import ResponseSpeed from "./components/ResponseSpeed";
import Lottery from "./components/Lottery";
import BaseballGame from "./components/BaseballGame";
import RockScissorPaper from "./components/RockScissorPaper";
import TicTacToe from "./components/TicTacToe";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/to-do-list" component={ToDoList} />
      <Route path="/image-search" component={ImageSearch} />
      <Route path="/response-speed" component={ResponseSpeed} />
      <Route path="/baseball" component={BaseballGame} />
      <Route path="/lottery" component={Lottery} />
      <Route path="/rock-scissor-paper" component={RockScissorPaper} />
      <Route path="/tic-tac-toe" component={TicTacToe} />
    </Switch>
  );
}

export default App;
