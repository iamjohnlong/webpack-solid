import { State, root } from 'solid-js';
import { r } from 'solid-js/dom';

window.r = r;

function App() {
  const state = new State({ name: 'john' });
  const handleInput = ({ target }) => {
    state.set({ name: target.value });
  };
  return (
    <div>
      <input
        value={state.name}
        oninput={handleInput}
      />{ state.name }
    </div>
  );
}

root(() => document.getElementById('root').appendChild(<App />));
