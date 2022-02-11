import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../reducers/actions/product";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";


const initial = {cotizante: "", precio: ""}
export default function Postdetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, products } = useSelector((state) => state.products);
  const { id } = useParams();
  const [comment, setComment] = useState(false);
  const [form, setForm] = useState(initial)

  console.log(product);

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  }

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  if (!products) return null;

  return (
    <>
      <Button component={Link} variant="contained" color="primary" to="/">
        Regresar
      </Button>
      <h2>Postdetails</h2>
      <h2>Producto: {product.nombre || product.name}</h2>
      <br />
      <h4>Marca: {product.marca}</h4>
      <br />
      <h3>Carros: {product.carros}</h3>
      <br />

      <h4>Cantidad: {product.cantidad}</h4>
      <br />

      <h4>Referencia: {product.referencia}</h4>
      <br />

      <h3>Precio: {product.precio}</h3>
      <br />

      <h4>Date: {product.date}</h4>

      {comment ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="total"
            placeholder="Total, recuerda que colMotors se queda con el 10% de comision"
            onChange={handleChange}
          />
          <input type="submit" value="Envia tu cotizacion"/>
        </form>
      ) : null}

      <Button
        color="primary"
        variant="contained"
        onClick={() => (comment ? setComment(false) : setComment(true))}
      >
        {comment ? null: 'Quieres cotizar?'}
      </Button>
    </>
  );
}
