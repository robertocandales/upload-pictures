import './App.css';
import ShowImg from './pages/ShowImg';
import { Divider } from 'antd';

function App() {
  return (
    <div className='App'>
      <Divider>Upload an image and modify styles</Divider>
      <ShowImg />
    </div>
  );
}

export default App;
