import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import "./css/sidebar.css"
import Sidebaroptions from './Sidebaroptions'
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReportIcon from '@mui/icons-material/Report';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LabelIcon from '@mui/icons-material/Label';
import SettingsIcon from '@mui/icons-material/Settings';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

  const dispatch =useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon/>} className="compose_btn" onClick={()=>dispatch(openSendMessage())}>
         compose
         </Button>
      <Sidebaroptions Icon={InboxIcon} title="Inbox" number="224" isactive={true}/>
      <Sidebaroptions Icon={StarBorderIcon} title="Starred" number="224"/>
      <Sidebaroptions Icon={AccessTimeIcon} title="Snoozed" number="224"/>
      <Sidebaroptions Icon={SendIcon} title="Sent" number="224"/>
      <Sidebaroptions Icon={InsertDriveFileIcon} title="Drafts" number="224"/>
      <Sidebaroptions Icon={ExpandMoreIcon} title="More" number="224"/>
      <Sidebaroptions Icon={LabelImportantTwoToneIcon} title="Important" number="224"/>
      <Sidebaroptions Icon={ScheduleSendTwoToneIcon} title="Scheduled" number="224"/>
      <Sidebaroptions Icon={MailOutlineIcon} title="All mail" number="224"/>
      <Sidebaroptions Icon={ReportIcon} title="Spam" number="224"/>
      <Sidebaroptions Icon={DeleteOutlineIcon} title="Trash" number="224"/>
      <Sidebaroptions Icon={LabelIcon} title="Categories" number="224"/>
      <hr/>
      <h3 className='sidebarOptions_heading'> Meet </h3>
      <Sidebaroptions Icon={VideocamIcon} title="New Meeting"/>
      <Sidebaroptions Icon={KeyboardIcon} title="Join a Meeting"/>
      </div>
  )
}

export default Sidebar