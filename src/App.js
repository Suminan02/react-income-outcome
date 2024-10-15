import Transection from "./components/transection";
import './App.css';
import FormComponent from "./components/FormComponent";

const design = {color:'red',textAlign:'center',fontSize:'1.5rem'};

const Title=()=><h1 style={design}>โปรแกรมรายรับ-รายจ่าย</h1>;


function App() {
  return (
    <div>
      <Title/>
      <FormComponent/>
      <Transection/>
    </div>
  );
}

export default App;
