
import './App.css';
import Card from './components/cards/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { data } from "./helper/data"

function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='cardItem'>
      {data.map(({id, desc, image, title}) => 
      
<Card key={id} desc={desc} img={image} title={title} />
)}
      </div>
    <Footer/>
    </div>
  );
}

export default App;
