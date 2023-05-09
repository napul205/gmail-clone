import React from 'react'
import "./css/emaillist.css"
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function EmailListSetting() {
  return (
    <div className='emaillist_settings'>
        <div className='emaillist_settingsLeft'>
        <IconButton>
            <CheckBoxOutlineBlankIcon/>
        </IconButton>
        <IconButton>
            <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
            <RefreshIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
        </div>
        <div className='emaillist_settingRight'>
            <p>
                1-50 of 2,624
            </p>
            <IconButton>
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton>
                <KeyboardArrowRightIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default EmailListSetting