import "../TopBar/TopBar.css"

export function TopBar({name}) {
    return (
        <div className="top-container">
            <p className="name-application">MoneyFlow Monitor</p>
            <p className="username">{name}</p>
        </div>
    );
}