import {useSelector} from 'react-redux';
import './styles.css';
const Container = () => {
    const players = useSelector((state) => state.players)

    return (
        <div className='container'>
            {players.map((player, id) => {
                return (
                <div key={id} className='players'>
                    <h4>
                        {player.name + ' ' + player.surname}
                    </h4>
                    <p> 
                        appearances: {player.appearances}
                       
                    </p>
                    <p>
                        goals: {player.goals}
                    </p>
                    <p> 
                        tackle: {player.tackle}
                    </p>
                </div>
                )
                
            })}
        </div>
    )
}

export default Container;