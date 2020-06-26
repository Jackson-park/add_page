import React from 'react';
import { CardMedia, CardActionArea, Card, CardContent, TextField, Button, Paper, Select, Typography, Grid, Divider, Hidden, Link} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import cookie from './cookie.jpg'
import './card.css';

const styles = theme =>({

    Card_Content:{
        width: "80%",
        height:"auto",
        margin: theme.spacing(3),
      },
      Grid_cardmedia:{
        width:250,
        height:230
      },
      div_img: {
        width: theme.spacing(30),
      },
      img_img: {
        width: "100%",
      },
})

class ProductCard extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
        {/* 컨텐츠(상품카드) */}
        <Card>
        <Link href="/detail" underline="none" color="inherit">
            {/* 이미지 그리드 */}
              <CardActionArea>
                <div className={classes.div_img}>
                  <div class="scale">
                  <img class="scale" className={classes.img_img} src={cookie}/>
                  </div>
                  </div>
                  {/* 내용 그리드 */}
              <CardContent>
                <Typography className={classes.Typography_request_country}>{this.props.request_from}</Typography>
                <Typography className={classes.Typography_request_country}>{this.props.request_to}</Typography>
                <Divider></Divider>
                <Typography className={classes.Typography_product_name}>{this.props.product_name}</Typography>
                <Typography className={classes.Typography_product_explain}>{this.props.product_discription}</Typography>
                <Typography className={classes.Typography_product_cost}>&#8361; {this.props.product_price}원</Typography>
                <Typography className={classes.Typography_after_time}>{this.props.product_time_of_enroll}</Typography>
              </CardContent>
              </CardActionArea>
              </Link>
        </Card>
      </div>
    )
  }
}
export default withStyles(styles)(ProductCard);