import "../NavBar/NavBar.css"

export function NavBar({setView}) {
    return (
        <div className="nav-container">
            <button onClick={() => setView('dashboard')} className="button">Dashboard</button>
            <button onClick={() => setView('product')} className="button">Search</button>
            <button onClick={() => setView('login')} className="button">Login</button>
            <button onClick={() => setView('subscribe')} className="button">Subscribe</button>
        </div>
    );
}