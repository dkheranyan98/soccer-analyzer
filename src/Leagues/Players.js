import { useDispatch } from 'react-redux';
import { setPlayers } from '../store/actions';
import './styles.css';

const Players = ({ players }) => {
   const dispatch = useDispatch();

   const handleComparePlayer = (player) => {
        dispatch(setPlayers(player))
   }

    return (
        <>
          {players.map((player, id) => {
            return (
                <ul key={id} className='listParent'>
                    <li onClick={() => handleComparePlayer(player)}>
                    {player.name + ' ' + player.surname}
                    </li>
                </ul>
            )  
          })}
        </>
      );
}

export default Players;