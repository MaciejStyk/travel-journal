export default function Entry(props) {
  return (
    <div className="entry">
      <div className="entry__location">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <span>{props.location}</span>
        <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
      </div>
      <h1 className="entry__title">{props.title}</h1>
      <h3 className="entry__date">
        {props.startDate} - {props.endDate}
      </h3>
      <img src={props.imageUrl} className="entry__image" alt=""></img>
      <p className="entry__description">{props.description}</p>
    </div>
  );
}
