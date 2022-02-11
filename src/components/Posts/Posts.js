import { useSelector } from "react-redux";
import Post from "./Post/Post";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


export default function Posts({setCurrentId}) {
  const {products} = useSelector((state) => state.products);
  console.log(products);

  return (
    <>
    <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Carros</TableCell>
              <TableCell align="right">Referencia</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
      {products
        ? products.map((product) => (
            <Post product={product} key={product._id} setCurrentId={setCurrentId} />
          ))
        : "No hay productos"}
    </>
  );
}
