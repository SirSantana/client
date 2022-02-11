import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProductById } from "../../reducers/actions/product"
import Button from '@mui/material/Button'

export default function MyAccount(){
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    
    const products = useSelector(state=> user ? state.products.products.filter(producto=> producto.creador === (user.result.nombre || user.result.name)): null)

    console.log(products);
    return(
        <>
        <h2>Mi cuenta</h2>
        <Button variant='contained' color='primary' component={Link} to="/">Regresar</Button>
        <h2>Productos creados </h2>

      {products.length=== 0  ? <h2>Aún no has hecho tu primera cotizacion
          <Button variant="contained" color="primary" component={Link} to ="/">
              Cotiza Aqui!
          </Button></h2>:products.map(product=> 
        <>
        <h2>Producto: {product.nombre}</h2>
        <h3>Marca: {product.marca}</h3>
        <h3>Precio: {product.precio}</h3>
        <h4>Referencia: {product.referencia}</h4>
        <h3>Carros: {product.carros}</h3>
        <br/>
        </>)
      
        }

        </>
    )
}