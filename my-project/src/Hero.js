import './App.css';
import misty from './misty.svg'

function Hero() {
  return (
    <div className="h-96 bg-red-100 grid grid-cols-2">
        <div className = "text-8xl content-center">
            Hi, I am Meshane
        </div>
        <div className = "content-center">
            <img className = "h-96" src={misty} alt="misty"/>
        </div>
    </div>
  );
}

export default Hero;
