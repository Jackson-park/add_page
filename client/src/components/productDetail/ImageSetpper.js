import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { Grid } from '@material-ui/core';
import Jordan1 from './jordan1.png';
import Jordan2 from './jordan2.png';
import Jordan3 from './jordan3.png';
import Jordan4 from './jordan4.png';
import Jordan5 from './jordan5.png';

const productImage = [
  {imgPath: Jordan1},
  {imgPath: Jordan2},
  {imgPath: Jordan3},
  {imgPath: Jordan4},
  {imgPath: Jordan5},
];

const styles = theme =>({
  div_root: {
    flex:1,
  },
Grid_root: {
    height: 400,
},
  img_image: {
    width: 'auto',
    height: 'auto',
    maxWidth: 400,
    maxHeight: 400,
    overflow: 'hidden',
    display: 'block',
  },
})

class ImageSetpper extends React.Component{
  constructor(props){
		super(props)
		this.state={
      activeStep: 0,
      maxSteps: productImage.length,
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleNext() {
    this.setState({ activeStep: this.state.activeStep + 1});
  }
  handleBack() {
    this.setState({ activeStep: this.state.activeStep - 1});
  }
  render() {
    const {classes} = this.props;
    
    return(
      <div className={classes.div_root}>
        <Grid className={classes.Grid_root}
        container
        justify="center"
        alignItems="center">
          <img className={classes.img_image}
          src={productImage[this.state.activeStep].imgPath}/>
        </Grid>
      <div>
      <MobileStepper
        steps={this.state.maxSteps}
        position="static"
        variant="dots"
        activeStep={this.state.activeStep}
        nextButton={
			<Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.maxSteps - 1}>
			  Next
			  {<KeyboardArrowRight />}
			</Button>
		  }
		  backButton={
			<Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
			  {<KeyboardArrowLeft />}
			  Back
			</Button>
		  }
      />
      </div>
    </div>
    );
  }
}
export default withStyles(styles)(ImageSetpper);