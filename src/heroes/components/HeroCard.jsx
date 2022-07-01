import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
     superhero,
      publisher,
       alter_ego,
        first_appearance,
         characters
        }) => {

            const heroImageUrl = `/asssets/heroes/${id}.jpg`;
            const charactersByHero = (alter_ego !== characters) && (<p>{characters}</p>);

  return (
   <div className="col animate__animated animate__fadeIn">
        <div className="card">
        <div className="row no-gutters"></div>
    <div className="col-4 ">
        <img src={heroImageUrl} className="card-img" alt={superhero} />
    </div>
    <div className="col-8">
<div className="card-body">

    <h5 className="card-title">{superhero}</h5>

  
    {
      charactersByHero
    }

    <p className="card-text">
        <small className="text-muted">
            {first_appearance}
        </small>
    </p>

    <Link to={`/hero/${id}`}>
    Más info
    </Link>
 
</div>
    </div>
        </div>
   </div>
  )
}
