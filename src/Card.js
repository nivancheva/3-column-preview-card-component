import "./Card.css";

export default function Card({icon, title, text, color}) {
    return (
        <div className={`card color-${color}`} >
            <img src={`images/${icon}`} alt={title}/>
            <h2 className="title">{title}</h2>
            <p>{text}</p>
            <button className="button">Learn More</button>
        </div>
    )
}