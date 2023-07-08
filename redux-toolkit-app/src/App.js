import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";
function App() {
  return (
    <div className="App">
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
