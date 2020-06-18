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
//개인정보처리방침
class Privacy_Policy extends React.Component{

	render() {
    const {classes}= this.props;
    return(
	<div className={classes.div_root}>
		<CssBaseline />
		<Container>
		<Typography variant="h4"><b>사다드림 개인정보처리방침</b></Typography>
		<hr />
		<br />
		<div>
			<Typography variant="body1">
			사다드림은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법, 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하겠습니다.
			</Typography><br />
			<Typography variant="h6"><b>개인정보 활용처</b></Typography>
			<Typography variant="body1">
			당근마켓은 아래와 같은 활용 목적을 가지고 사용자 개인정보를 수집합니다.
			</Typography><br />
			<Typography variant="body1">
			1. 서비스의 기본 기능이나 특화된 기능을 제공
			</Typography>
			<Typography variant="body1">
			2. 개별적 공지 필요시
			</Typography>
			<Typography variant="body1">
			3. 서비스 이용과 관련하여 문의나 분쟁의 해결
			</Typography>
			<Typography variant="body1">
			4. 유료서비스 이용 시 컨텐츠 등의 전송이나 배송∙요금 정산
			</Typography>
			<Typography variant="body1">
			5. 맞춤형 서비스 제공
			</Typography>
			<Typography variant="body1">
			6. 인구통계학적 특성에 따른 서비스 제공
			</Typography>
			<Typography variant="body1">
			7. 각종 이벤트나 광고성 정보의 제공
			</Typography>
			<Typography variant="body1">
			8. 법령 등에 규정된 의무의 이행
			</Typography>
			<Typography variant="body1">
			9. 법령이나 이용약관에 반하여 여러분에게 피해를 줄 수 있는 잘못된 이용행위의 방지
			</Typography><br />

			<Typography variant="h6"><b>수집하는 개인정보</b></Typography>
			<Typography variant="body1">
			1. 휴대폰 번호
			</Typography>
			<Typography variant="body1">
			2. 거래 계좌번호
			</Typography>
			<Typography variant="body1">
			3. 앱 내 채팅 기능을 사용한 채팅 내용
			</Typography>
			<Typography variant="body1">
			4. 이용자 이름
			</Typography>
			<Typography variant="body1">
			5. 프로필 사진
			</Typography>
			<Typography variant="body1">
			6. 사진(메타정보 포함)
			</Typography>
			<Typography variant="body1">
			7. 신용카드 정보, 통신사 정보, 상품권 번호 등 결제에 필요한 정보(유료 서비스 이용시)
			</Typography><br />
			
			<Typography variant="h6"><b>개인정보를 수집하는 방법</b></Typography>
			<Typography variant="body1">
			당근마켓은 다음과 같은 방법을 통해 개인정보를 수집합니다.
			</Typography><br />
			<Typography variant="body1">
			1. 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우
			</Typography>
			<Typography variant="body1">
			2. 거래 과정에서 사용자가 채팅방에 입력하는 휴대번호, 계좌번호
			</Typography>
			<Typography variant="body1">
			3. 제휴 서비스 또는 단체 등으로부터 개인정보를 제공받은 경우
			</Typography>
			<Typography variant="body1">
			4. 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등온·오프라인에서 진행되는 이벤트/행사 등 참여
			</Typography><br />

			<Typography variant="h6"><b>서비스 이용 과정에서 이용자로부터 수집하는 개인정보</b></Typography>
			<Typography variant="body1">
			PC웹, 모바일 웹/앱 이용 과정에서 단말기정보(OS, 화면사이즈, 디바이스 아이디), IP주소, 쿠키, 방문일시의 정보가 자동으로 생성되어 수집될 수 있습니다.
			</Typography><br />

			<Typography variant="h6"><b>개인정보 공유 및 제공</b></Typography>
			<Typography variant="body1">
			당근마켓은 사용자가 서비스 이용과정 등에서 따로 동의하는 경우나 법령에 규정된 경우를 제외하고는 사용자 개인정보를 위에서 말씀 드린 목적 범위를 초과하여 이용하거나 제3자에게 제공 또는 공유하지 않습니다.
			</Typography><br />
		</div>
		</Container>
    </div>
	);
}
}
export default withStyles(styles)(Privacy_Policy);