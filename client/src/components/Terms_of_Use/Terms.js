import React from 'react';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Typography } from '@material-ui/core';
const styles = theme =>({
	div_root: {
    flex: 1,
	display: 'flex',
	marginTop: theme.spacing(5),
},
})
//이용약관
class Terms extends React.Component{

	render() {
    const {classes}= this.props;
    return(
	<div className={classes.div_root}>
		<CssBaseline />
		<Container>
		<Typography variant="h4">이용약관</Typography>
		<hr />
		<br />
		<div>
			<Typography variant="h6">제1조 (목적)</Typography>
			<Typography variant="body1">
			이 약관은 사다드림이 운영하는 인터넷 사이트 및 모바일 애플리케이션에서 제공하는 인터넷 관련 서비스를 이용하는 자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
			</Typography><br />
			<Typography variant="h6">제2조 (용어 정의)</Typography>
			<Typography variant="body1">
			'사다드림'이란 회사가 컴퓨터 등 정보통신 설비를 이용하여 '서비스' 등을 이용할 수 있도록 설정한 가상의 영업장을 말합니다.
			</Typography>
			<Typography variant="body1">
			'사다드림'에서 제공하는 '서비스'에 대한 정의는 다음과 같습니다.
			</Typography>
			<Typography variant="body1">
			국·내외 상품의 유형으로 유형(물건, 티켓 등), 무형(가이드, 투어, 숙박 등) 상품을 C2C로 구매대행을 통해 거래할 수 있도록 중개 역할을 하는 [셀러와 구매자의 C2C 크로스보더 마켓 플랫폼]을 말합니다.
			</Typography>
		</div>
		</Container>
    </div>
	);
}
}
export default withStyles(styles)(Terms);