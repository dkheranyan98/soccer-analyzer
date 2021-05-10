import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeagues, toggleLeagues } from '../store/actions';
import Teams from './Teams';
import './styles.css';

const  Leagues = () => {
  const dispatch = useDispatch()
  const leagues = useSelector((state) => state.leagues)
  const toggle = useSelector((state) => state.toggle)
  useEffect(() => {
    if(!leagues.length) dispatch(getLeagues())
  })

  return (
    <>
      {leagues.map((league, id) => {
        return (
          <ul key={id} className='listParent'>
            <li onClick={() => dispatch(toggleLeagues(league.id))}>
              {league.name}
            </li>
            {
             toggle.includes(league.id) && 
            <li>
              <Teams teams={league.teams} /> 
            </li>
            }
          </ul>
        )  
      })}
    </>
  );
}

export default Leagues;