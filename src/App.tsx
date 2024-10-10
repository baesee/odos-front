import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>내 리액트 앱</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    카운트: {count}
                </button>
            </div>
        </div>
    );
}

export default App;
