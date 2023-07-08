import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import * as method from './slice/slice';
function App() {
  const main = useSelector((state) => state.main);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(method.increment())}
          >
            Increment
          </button>
          <span>{main.value}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(method.decrement())}
          >
            Decrement
          </button>
        </div>
    </div>
  );
}

export default App;
