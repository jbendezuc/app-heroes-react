import { useForm } from "../../hooks/useForm"
import {useNavigate,useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q=''} = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const {searchText,onInputChange,onResetForm} = useForm({
    searchText:q
  })

  const showSearch = (q.length === 0) ? true : false;
  const showError = (q.length>0) && (heroes.length ===0);

  const onSearchSubmit = (event) => {
    event.preventDefault();

     navigate(`?q=${searchText}`);
      

  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              name="searchText"
              onChange={onInputChange} 
              placeholder="Search a Hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
            />

            <button 
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div 
            className="alert alert-primary"
            style={{display: showSearch ? '': 'none'}}
          >
            Search a Hero
          </div>
          <div 
            className="alert alert-danger"
            style={{display: showError ? '' :'none'}}
          >
            There's not Hero {q}
          </div>
          {
            heroes.map((heroe)=>(
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }
        </div>
      </div>

    </>
  )
}


