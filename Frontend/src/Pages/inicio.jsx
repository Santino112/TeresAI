import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, Divider, Stack, Link, TextField } from "@mui/material";
import axios from 'axios';

function Inicio() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <Typography>Estoy en el inicio</Typography>
            <Button onClick={handleLogin}>Login</Button>
        </>
    );
};

export default Inicio;