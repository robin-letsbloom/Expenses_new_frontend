
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from "./components/table";
import Header from "./components/header";
import Core from './components/core';

function App() {
  return (
    <>
    <div style={{backgroundColor:"#ffcccc"}}>
    <div>
    <Header />
</div>
<div>
  <Core/>
</div>

<div>
    
    <Tables/>
</div>

</div>


</>
  );
}

export default App;
