import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../reducers/actions/product";
import {useNavigate} from 'react-router-dom'

export default function Post({ product, setCurrentId }) {
  const dispatch = useDispatch();
  const { nombre, marca, referencia, carros, cantidad, precio } = product;
  const navigate= useNavigate()

  const handleDelete = () => {
    dispatch(deletePost(product._id));
  };
  

  const rows = [
    {
      nombre: nombre,
      marca: marca,
      referencia: referencia,
      carros: carros,
      cantidad: cantidad,
      precio: precio,
    },
  ];

  const handleDetails=(e)=>{
    navigate(`/products/${product._id}`)
  }

  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 900 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="right">{row.marca}</TableCell>
                <TableCell align="right">{row.carros}</TableCell>
                <TableCell align="right">{row.referencia}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
                <TableCell align="right">{row.precio}.000</TableCell>
                <button onClick={handleDelete}>Eliminar</button>
                <button onClick={()=> setCurrentId(product._id)}>
                  Editar
                </button>
                <Button color='primary' variant='contained' onClick={handleDetails}>
                  Cotizar
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
