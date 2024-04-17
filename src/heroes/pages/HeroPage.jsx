import { Navigate,useParams,useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const navigate = useNavigate();
  
  const { id} = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  const onNavigateBack = () =>{
        navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__jello">
          <img 
            src={`../heroesImg/${id}.jpg`} 
            alt={hero.superhero}
            className="img-thumbnail" 
          />
      </div>

      <div className="col-8 animate__animated animate__bounceIn">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
              <li className="list-group-item"><b>first appearance:</b>{hero.first_appearance}</li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
      </div>
    </div>
  )
}


