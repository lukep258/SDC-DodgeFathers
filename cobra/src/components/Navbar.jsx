import globoGymGolf from '../assets/globo-gym-golf.png'


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        
                        <img src={globoGymGolf} alt="logo" className="w-48" />
                    </a>
                </div>
            </div>
            <div className="navbar-center custom-navbar font-titillium font-semibold">
                <a className="text-base text-black mx-2 cursor-pointer">Clubs</a>
                <a className="text-base text-black mx-2 cursor-pointer">Accessories</a>
                <a className="text-base text-black mx-2 cursor-pointer">Arccos Caddie</a>
                <a className="text-base text-black mx-2 cursor-pointer">Custom Fitting</a>
                <a className="text-base text-black mx-2 cursor-pointer">On Tour</a>
                <a className="text-base text-black mx-2 cursor-pointer">Sale</a>
            </div>
            <div className="navbar-end">
                <button className="scale-hover mx-2">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="scale-hover mx-2">
                    <span className="material-symbols-outlined">person</span>
                </button>
                <button className="scale-hover mx-2">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </button>
            </div>
        </div>
        
    )
}


