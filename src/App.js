import logo from "./logo.svg";
import "./App.css";
import Tabela from "./components/Tabela";
import AddMember from "./components/AddMember";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Membr list</h2>
          <AddMember />
        </div>
      </div>
    </div>
  );
}
export default App;
