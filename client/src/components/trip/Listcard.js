import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, Link, Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import south_Korea from './south_korea.jpg';
import { Avatar } from '@material-ui/core';

import FlightIcon from '@material-ui/icons/Flight';
const styles = theme =>({
  Card_root: {
  flex: 1,
  backgroundColor: '#F7E3E4',
	minWidth: theme.spacing(30),
	maxWidth: theme.spacing(30),
	minHeight: theme.spacing(43),
	maxHeight: theme.spacing(43),
	margin: theme.spacing(2),
  },
  Card_media: {
    flex: 1,
    display: 'flex',
    height: theme.spacing(18),
  },
  div_center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    },
  Avatar: {
	  width: theme.spacing(8),
	  height: theme.spacing(8),
  },
  div_body: {
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	marginTop: theme.spacing(2),
  },
  div_traveler: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
})
class Listcard extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      Country_Media: south_Korea,
      traveler: '박재성',
      start_country: '필리핀',
      end_country: '한국',
      start_Date: '2020.5.20',
      end_Date: '2020.6.10',
    }
  }
  render() {
    const {classes} = this.props;
    return(
      <Card className={classes.Card_root}>
      <CardActionArea>
        <Link href="/Travelerdetail" underline="none" color="inherit">
        <CardMedia
          className={classes.Card_media}
          image={this.state.Country_Media}
          title="Country_Media" />
		<div className={classes.div_body}>
		<Avatar alt="박재성" src={null} className={classes.Avatar}></Avatar>
		</div>
    <div className={classes.div_traveler}>
    <Typography variant="h6">{this.state.traveler}</Typography>
    </div>
        <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Typography variant="subtitle1">{this.state.start_country}</Typography>
          <FlightIcon rotate='90' color="primary" />
          <Typography variant="subtitle1">{this.state.end_country}</Typography>
          </Grid>
          <div className={classes.div_center}>
          <Typography variant="caption" color="textPrimary">
            출국: {this.state.start_Date} ~ 귀국: {this.state.end_Date}</Typography>
          </div>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
    );
  }
}
export default withStyles(styles)(Listcard);