import logo from './logo.svg';
import './App.css';
import OnChangeInput from './components/OnChangeInput/OnChangeInput';

function App() {
  return (
    <div className="App">
      <p>First Unit test case</p>
      <input type="text" placeholder='Enter your name' id= "name"  name='test' value="Sapna"/>
      <img  title = "AI generated image" src='https://img.freepik.com/free-photo/night-time-scene-with-nature-glacier_23-2151795202.jpg?t=st=1727249495~exp=1727253095~hmac=59fdbfd2f530466c3f5d92801786f50937f2b73d383016dffb5926328e68d71c&w=360'/>
    <OnChangeInput/>
    </div>
  );
}

export default App;
