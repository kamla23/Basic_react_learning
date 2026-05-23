
import './App.css';

function App(){
  const Name = "kamla"
  const age = 18;
  return(
    <div className="app">;No
      <h1>namaste {Name}</h1>
      <p>Eligible to vote ? {age >= 18 ? "yes" : "no"}</p>
      <p>This is basic reac+vite structure of demo.</p>
    </div>
  );
}
export default App;