import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import SellIcon from '@mui/icons-material/Sell';
import PeopleIcon from '@mui/icons-material/People';
import "./css/emaillist.css"


function Emailtype() {
  return (
    <div className='emailtype'>
        <div className='emailtype_options emailtype_options--active'>
            <InboxOutlinedIcon/>
            <p>Primary</p>
        </div>
        <div className='emailtype_options '>
            <SellIcon/>
            <p>Promotions</p>
        </div>
        <div className='emailtype_options '>
            <PeopleIcon/>
            <p>Social</p>
        </div>
    </div>
  )
}

export default Emailtype