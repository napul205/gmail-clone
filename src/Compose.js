import React from 'react'
import {IconButton} from '@material-ui/core';
import MinimizeTwoToneIcon from '@mui/icons-material/MinimizeTwoTone';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockClockIcon from '@mui/icons-material/LockClock';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/compose.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
function Compose() {

    const dispatch =useDispatch();
  return (
    <div className='compose'>
        <div className='head'>
            <div className='head_left'>
                   <span>New Message</span>
            </div>
            <div className='head_right'>
                <MinimizeTwoToneIcon/>
                <OpenInFullIcon/>
                <CloseTwoToneIcon onClick={()=>dispatch(closeSendMessage())}/>
            </div>
       
        </div>

        <div className='middle'>
            <div className='compose_bodyform'>
            <input className='to' type='email' placeholder='Recipients'></input>
            <input className='sub' type='text' placeholder='Subject'></input>
            <textarea rows='20' placeholder='Message'></textarea>
            </div>
      
        </div>

        <div className='foot'>
            <div className='compose_footerleft'>
            <button type='submit'> Send <ExpandMoreIcon/></button>
            </div>
            <div className='compose_footerright'>
            
                <FontDownloadIcon/>
            
                <AttachFileIcon/>
           

        
                <InsertLinkIcon/>
      
                <SentimentVerySatisfiedIcon/>
          
                <AddToDriveIcon/>
          
                <InsertPhotoIcon/>
            
            <LockClockIcon/>
         
                <DriveFileRenameOutlineIcon/>
        
                <MoreVertIcon/>
                <DeleteIcon/>
            </div>
          
        </div>
    </div>
  )
}

export default Compose