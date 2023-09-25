export default function Card({icon, title, text}) {
    return (
        <div className="container">
            <img src={`images/${icon}`} alt={title}/>
            <h2 className="title">{title}</h2>
            <p>{text}</p>
            <button className="button">Learn More</button>
        </div>
    )
}