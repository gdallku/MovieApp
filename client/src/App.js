import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="moiveName"></input>
        <label>Review</label>
        <input type="text" name="review"></input>
      </div>
    </div>
  );
}

export default App;
