import react from "react";
import ReorderIcon from '@material-ui/icons/Reorder';
import {IconButton,Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@mui/icons-material/Tune';
import "./css/header.css";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import logo from './image/avtar.jpg'
const Header = ()=>{
    return(
    <div className="header">
        <div className="header_left">
            <IconButton>
                <ReorderIcon></ReorderIcon>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Logo"/>
        </div>
        <div className="header_middle">
            <div className="search_mail">
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
            <input type="text" placeholder="Search in mail"/>
            <IconButton>
                <TuneIcon></TuneIcon>
            </IconButton>
            </div>
        </div>
        <div className="header_right">
        <IconButton>
                <HelpOutlineIcon></HelpOutlineIcon>
            </IconButton>
            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>
            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>
            <Avatar src={logo}></Avatar>
            </div>
    </div>
    )
}

export default Header