import React from 'react';
/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 200,
      margin:20,
    },
  });
  
  
  
  
  
function Sidebar(props) {
    const classes = useStyles();
    const [brightness, setBrightness] = React.useState(50);
    
    const [contrast, setContrast] = React.useState(50);

    const handleChangeBrightness = (event, newValue) => {
        setBrightness(newValue);
        props.changeBr(newValue);
        
      };

      const handleChangeContrast = (event, newValue) => {
        setContrast(newValue);
        props.changeCon(newValue);
      };

  return (
   <>
         <div className={classes.root}>
         
    <Typography id="continuous-slider" gutterBottom>
        Brightness
    </Typography>
         <Slider 
         value={brightness} 
         onChange={handleChangeBrightness}
         aria-labelledby="continuous-slider"
         />
    {/* <Typography id="continuous-slider" gutterBottom>
        Saturation
    </Typography>
         <Slider 
         value={saturation} 
         onChange={handleChangeSaturation}
         aria-labelledby="continuous-slider"
         /> */}
    <Typography id="continuous-slider" gutterBottom>
        Contrast
    </Typography>
         <Slider 
         value={contrast} 
         onChange={handleChangeContrast}
         aria-labelledby="continuous-slider"
         />
     
    </div>
  
    </>
  );
}

export default Sidebar;
