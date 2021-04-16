import React from 'react';
/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteRounded from '@material-ui/icons/DeleteRounded';

/*components*/
import Sidebar from "./Sidebar.js";
import Dialog from "./Dialog.js";

const useStyles = makeStyles((theme) => ({
    root: {
        root:{
            margin:20,
            width:"40%",
            height:"40%",
        },
      '& > *': {
        margin: 20,
      },
    },
    input: {
      display: 'none',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

  
function MyCanvas() {
    const classes = useStyles();
    const [image, setImage] = React.useState(null);
   
    const [canv,setCanvas]= React.useState(null);
    const [open, setOpen] = React.useState(false);

    const load=(pic)=>{
     setImage(pic);
     
     
      const img = new Image();
      img.crossOrigin = 'anonymous';  
      
      img.src = pic;
      img.onload = () => {
         let old =document.getElementById("canv");
         let td=document.getElementById("canvasHere");

         //remove previous pic
         if(old!=null){
          old.remove();}

        // create Canvas
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id',"canv");

       

        const ctx = canvas.getContext('2d');
       
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        setCanvas(canvas);
        // append canvas

        td.appendChild(canvas);
      };
    }
  

   const download=()=>{
      
              // create a tag
             
              const a = document.createElement('a');
              a.download = 'PhotoEditorImage.png';
              a.href = canv.toDataURL('image/png');
              a.click();
              
           
          }
        

 

    const editBrightness=(value)=>{
        var element=document.getElementById("canv");
            
            element.style.filter= "brightness("+(value+20)+"%)";
            

    }
   
    const editContrast=(value)=>{
    var element=document.getElementById("canv");
    
            element.style.filter= "contrast("+(value+20)+"%)";
          

    }
   
  return (
   <>
      <div>
        
        <input 
        accept="image/*" 
        className={classes.input} 
        id="icon-button-file" type="file" 
        onChange={(e)=>{
         
          load(URL.createObjectURL(e.target.files[0]));
           
        }}
        />
        <label htmlFor="icon-button-file">
        
        <IconButton color="primary" aria-label="upload picture" component="span">
         {image == null?"Start by uploading your picture here  ":"change picture  "} 
         <PhotoCamera />
        </IconButton>

        </label>
        {image != null?<> <Button
                 variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={(e)=>{download()}}
                 >
                  Save
                </Button>
                <Button
                 variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<DeleteRounded/>}
                onClick={(e)=>{setOpen(true)}}
                 >
                  Remove
                </Button>
                <Dialog open={open} close={()=>setOpen(false)} delete={()=>setImage(null)}/>
                </>:<></>}


      </div>
     
      {image != null?
        <table><tr><td>
                  
                     <Sidebar 
                     changeBr={(newBr)=>{editBrightness(newBr)}}
                     changeCon={(newCon)=>{editContrast(newCon);}}
                     />
                 
                 </td><td >
                  <div className={classes.root.root} id="canvasHere"> 

                  </div>
               
            
            </td></tr></table>
       
     :<></>}
    </>
  );
}

export default MyCanvas;
