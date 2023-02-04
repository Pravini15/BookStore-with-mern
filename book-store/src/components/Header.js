import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Typography, Tab } from "@mui/material";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{ backgroundColor:'#232F3D'}} position="sticky">
           <Toolbar> 
            <NavLink to="/" style={{color:'white'}}>
            <Typography>
                <AutoStoriesOutlinedIcon/>
            </Typography>
            </NavLink>
            <Tabs 
                 sx = {{ml:'auto'}}
                 textColor='inherit' 
                 indicatorColor="primary" 
                 value={value} onChange={(e,val)=>setValue(val)}
                 >
                 <Tab LinkComponent={NavLink} to="/add" label='Add product'/>
                 <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                 <Tab LinkComponent={NavLink} to="/aboutus" label='About Us'/>
            </Tabs>
           </Toolbar>
        </AppBar>   
    </div>
  )
}

export default Header;
