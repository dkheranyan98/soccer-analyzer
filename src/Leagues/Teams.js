import { useSelector, useDispatch } from 'react-redux';
import { toggleLeagues } from '../store/actions';
import Players from './Players';
import './styles.css';

const Teams = ({ teams }) => {

    const dispatch = useDispatch()
    const toggle = useSelector((state) => state.toggle)
    return (
        <>
          {teams.map((team, id) => {
            return (
              <ul key={id} className='listParent'>
                <li onClick={() => dispatch(toggleLeagues(team.id))}>
                  {team.name}
                </li>
                {
                 toggle.includes(team.id) && 
                <li>
                  <Players players={team.players} /> 
                </li>
                }
              </ul>
            )  
          })}
        </>
      );
}

export default Teams;