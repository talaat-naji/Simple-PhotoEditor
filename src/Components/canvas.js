import React from 'react';
/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
/*reactstrap*/
import { Container, Row, Col } from 'reactstrap';
/*components*/
import Sidebar from "./Sidebar.js";
const useStyles = makeStyles((theme) => ({
    root: {
        root:{
            margin:20,
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
    const [imageProp, setImageProp] = React.useState(null);

   const download=(src)=>{
      
        // var element=document.createElement("a");
        //     var file = new Blob(
        //         [image],
        //         {type:'image/*'}
        //         );
        //     element.href = file;
        //     element.download=imageProp.name;
        //     element.click();
       
            const img = new Image();
            img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
            // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
            img.src = image;
            img.onload = () => {
              // create Canvas
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              // create a tag
              const a = document.createElement('a');
              a.download = 'download.png';
              a.href = canvas.toDataURL('image/png');
              a.click();
            };
          }
        

 

    const editBrightness=(value)=>{
        var element=document.getElementById("editPic");
            var file = new Blob(
                [image],
                {type:'image/*'}
                );
                console.log(file);
            element.style.filter= "brightness("+(value+20)+"%)";
            // setImage(URL.createObjectURL(file));

    }
    const editContrast=(value)=>{
        var element=document.getElementById("editPic");
            var file = new Blob(
                [image],
                {type:'image/*'}
                );
                console.log(file);
            element.style.filter= "contrast("+(value+20)+"%)";
          
            // setImage(URL.createObjectURL(file));

    }
   
  return (
   <>
      <div>
        
        <input 
        accept="image/*" 
        className={classes.input} 
        id="icon-button-file" type="file" 
        onChange={(e)=>{
            setImage(URL.createObjectURL(e.target.files[0]));
            setImageProp(e.target.files[0]);
        }}
        />
        <label htmlFor="icon-button-file">
        
        <IconButton color="primary" aria-label="upload picture" component="span">
         {image == null?"Start by uploading your picture here  ":"change picture  "} 
         <PhotoCamera />
        </IconButton>
        </label>
      </div>
     
      {image != null?
        <table><tr><td>
                  
                     <Sidebar 
                     changeBr={(newBr)=>{console.log("props br"+newBr);editBrightness(newBr)}}
                     changeCon={(newCon)=>{console.log("props br"+newCon);editContrast(newCon);}}/>
                 
                 </td><td>
                  
     
                         <img 
                         className={classes.root}
                         id="editPic"
                         width="100%" 
                         src={image} 
                         alt="Ooops somthing wrong happened :("
                         /> 
                    <br/>
                <Button
                 variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={(e)=>{download(image,imageProp.name)}}
                 >
                  Save
                </Button>
            
            </td></tr></table>
       
     :<></>}
    </>
  );
}

export default MyCanvas;
