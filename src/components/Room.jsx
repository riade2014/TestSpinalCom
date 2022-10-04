import React, {useState, useEffect} from 'react'

const Room = ({room}) => {
    const [status, setStatus] = useState("");

    useEffect(() => {//on recupere une pièce correspondant à un étage
        fetch(`https://api-developers.spinalcom.com/api/v1/room/${room.dynamicId}/control_endpoint_list`)
        .then(res => res.json())
        .then(data => {
            if(data && data.length > 0) {//on verifie que le tableau contient des données
                let search = true
                for (const item of data) {//on parcourt les étages
                    if(item.endpoints) {
                        for (const endpoint of item.endpoints) {//on parcourt les pieces
                            if(endpoint.type === "Occupation") {
                                setStatus(endpoint.currentValue ? "TRUE" : "FALSE")
                                search = false;
                                break;
                            } else {
                                continue;
                            }
                        }
                        if(!search) {
                            break;
                        }
                    } else {
                        continue;
                    }
                }
                if(search) setStatus("UNDEFINED")
            } else {
                setStatus("UNDEFINED")
            }
        }).catch(console.error)
    }, [room.dynamicId]);

  return (
    <li>
        <p>
            {room.name} 
            <span> {status}</span>
        </p>
    </li>
  )
}

export default Room