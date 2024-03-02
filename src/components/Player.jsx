import { useState } from "react"

export default function Player ({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    
    const [isEditing, setIsEditing] = useState(false)
    
    function handleEdit () {
        setIsEditing(true)
    }
    function handleSave () {
        setIsEditing(false)

    }

    function handleChange (event) {
        setPlayerName(event.target.value)
    }
 
    return (
        <li>
          <span className="player">
            {!isEditing ? <span className = "player-name">{playerName}</span> : <input type="text" required value = {playerName} onChange={handleChange}></input>}
            <span className="player-symbol">{symbol}</span>
          </span>
          {isEditing ? <button onClick={handleSave}>Save</button> : <button onClick={handleEdit}>Edit</button>}
        </li>
    )
}