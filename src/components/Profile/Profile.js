import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Profile(){
    const {id} = useParams()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user);
    console.log(id);



    return(
        <>
        <Button color="primary" component={Link} to="/"variant="contained" >Regresar</Button>

        <h2>Perfil</h2>
        <h2>Nombre: {user?.result?.name}</h2>
        <h2>Correo: {user?.result?.email}</h2>
        <h2>Tipo de cuenta:</h2>{user?.result.roles.length === 0 ? <h2>Comprador</h2>: <h2>Vendedor</h2>}
        
        <Button color="primary" variant="contained">Editar informacion</Button>
        </>
    )
}