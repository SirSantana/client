import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LOGOUT } from "../../reducers/types";
import decode from "jwt-decode";

export default function Navbar() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(user);

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <h2>colMotors Productos</h2>
      {user?.result ? (
        <Button component={Link} to="/" onClick={logout}>
          Cerrar Sesion
        </Button>
      ) : (
        <Button component={Link} to="/auth">
          Iniciar Sesion
        </Button>
      )}
      <h2>{user?.result?.nombre || user?.result?.name}</h2>
      {user?.result ? (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar src={user?.result.imageUrl} alt={user?.result.name}>
              {user?.result?.name?.charAt(1)}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              path="/profile"
              component={Link}
              to={`/profile/${user?.result._id}`}
            >
              Perfil
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to={`/myaccount/${user.result._id}`}
            >
              Mi cuenta
            </MenuItem>
          </Menu>
        </div>
      ) : null}
    </>
  );
}
