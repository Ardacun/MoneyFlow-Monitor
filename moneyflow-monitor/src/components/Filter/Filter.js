import "./Filter.css";

export function Filter() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className="filter-container">
            <form onSubmit={handleSubmit} className="form-container">
                <label>Type</label>
                <input type="checkbox"></input>
                <label>Actions</label>
                <input type="checkbox"></input>
                <label>Crypto</label>
                <input type="checkbox"></input>
                <label>ETFs</label>
                <label>Time</label>
                <input type="checkbox"></input>
                <label>1d</label>
                <input type="checkbox"></input>
                <label>7d</label>
                <input type="checkbox"></input>
                <label>1m</label>
                <input type="checkbox"></input>
                <label>1y</label>
                <input type="checkbox"></input>
                <label>All</label>
                <input type="submit"></input>
            </form>
        </div>
    );
}