import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../../reducers/actions/product";
import { useDispatch, useSelector } from "react-redux";
const initial = {
  nombre: "",
  carros: "",
  referencia: "",
  marca: "",
  cantidad: "",
  precio: "",
};

export default function Form({currentId, setCurrentId}) {
  const dispatch = useDispatch();
  const product = useSelector(state=> currentId ? state.products.products.find(producto=> producto._id === currentId): null)
  const [form, setForm] = useState(initial);
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(()=>{
    if(product)setForm(product)
  },[product])
  
  const clear =()=>{
    setForm(initial)
    setCurrentId(null)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
      if(currentId){
        dispatch(updateProduct(currentId, form))
        clear()
      }
      else{
        dispatch(createProduct({...form, creador: user?.result.name || user?.result.nombre }));
        console.log(form);
        clear()
      }
  };
  return (
    <>
      {currentId ? <h2>Editar Producto</h2>:<h2>Crear Producto</h2> }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre Producto"
          value={form.nombre}
        />
        <input
          type="text"
          name="referencia"
          onChange={handleChange}
          placeholder="Referencia Producto"
          value={form.referencia}
        />
        <input
          type="text"
          name="marca"
          onChange={handleChange}
          placeholder="Marca Producto"
          value={form.marca}
        />
        <input
          type="text"
          name="carros"
          onChange={handleChange}
          placeholder="Carros Aplicacion"
          value={form.carros}
        />
        <input
          type="number"
          name="cantidad"
          onChange={handleChange}
          placeholder="Cantidad"
          value={form.cantidad}
        />
        <input
          type="text"
          name="precio"
          onChange={handleChange}
          placeholder="Precio"
          value={form.precio}
        />
        <input type="submit" value={currentId? 'Editar': 'Añadir'} />
      </form>
    </>
  );
}
