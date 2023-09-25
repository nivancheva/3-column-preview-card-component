import "./Card.css";

export default function Card({icon, title, text, color}) {
    return (
        <div className={`card color-${color}`} >
            <div className="content">
                <img src={`images/${icon}`} alt={title}/>
                <h2 className="title">{title}</h2>
                <p>{text}</p>
            </div>
            <button className="button">Learn More</button>
        </div>
    )
}