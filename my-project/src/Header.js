import './App.css';

function Header() {
  return (
    <div className="h-14 bg-blue-200 grid grid-cols-2">
        <div className="text-3xl space-x-4 p-3 text-left content-center">
            Meshane
        </div>
        <div className="text-3xl space-x-4 p-3 text-right content-center">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
        </div>
    </div>
  );
}

export default Header;
