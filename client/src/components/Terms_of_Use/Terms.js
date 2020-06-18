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
		<Typography variant="h4"><b>이용약관</b></Typography>
		<hr />
		<br />
		<div>
			<Typography variant="h6"><b>제1조 (목적)</b></Typography>
			<Typography variant="body1">
			이 약관은 사다드림이 운영하는 인터넷 사이트 및 모바일 애플리케이션에서 제공하는 인터넷 관련 서비스를 이용하는 자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
			</Typography><br />
			<Typography variant="h6"><b>제2조 (용어 정의)</b></Typography>
			<Typography variant="body1">
			1. '사다드림'이란 회사가 컴퓨터 등 정보통신 설비를 이용하여 '서비스' 등을 이용할 수 있도록 설정한 가상의 영업장을 말합니다.
			</Typography>
			<Typography variant="body1">
			2. '사다드림'에서 제공하는 '서비스'에 대한 정의는 다음과 같습니다.
			</Typography>
			<Typography variant="body1">
			국·내외 상품의 유형으로 유형(물건, 티켓 등), 무형(가이드, 투어, 숙박 등) 상품을 C2C로 구매대행을 통해 거래할 수 있도록 중개 역할을 하는 [셀러와 구매자의 C2C 크로스보더 마켓 플랫폼]을 말합니다.
			</Typography>
			<Typography variant="body1">
			3. “이용자”란 ‘사다드림’에 접속하여 본 약관에 따라 ‘사다드림’가 제공하는 서비스를 받는 회원(셀러, 구매자)를 말합니다.
			</Typography>
			<Typography variant="body1">
			4. ‘회원’이라 함은 ‘사다드림’에 개인정보를 제공하여 회원등록을 한 자로서, ‘사다드림’의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 이용할 수 있는 자를 말합니다.
			</Typography>
			<Typography variant="body1">
			5. '셀러'라 함은 '사다드림'에 ‘구매자’가 구매의사를 밝힌 재화 및 용역(이하 '상품'이라 함)을 대신 구매대행을 해줄 의사가 있는 사람으로서 '서비스' 를 이용하는 자를 말합니다.
-셀러는 요청 받은 혹은 자신의 마켓에 등록한 물품을 정직하고 신뢰 있게 전달하는 것을 기본으로 하며, 셀러 등록 및 구매요청 지원하기, 마켓 개설을 통해 승인 받은 자를 말합니다. (신청 후 간단한 인증절차가 진행될 수도 있음)
			</Typography>
			<Typography variant="body1">
			6. '구매자'라 함은 '사다드림'에 등록된 '셀러'에게 구매대행을 요청하거나 ‘셀러’가 운영하는 마켓 내 상품을 구매할 의사가 있는 자로 '서비스'를 이용하는 자를 말합니다.
			</Typography>
			<Typography variant="body1">
			7. ‘운영자’라 함은 회사가 제공하는 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 자를 말합니다.
			</Typography>
			<Typography variant="body1">
			8. ‘드림안전거래서비스’라 함은 회사가 구매자의 결제 대금의 보호를 위하여 일정 기간 동안 결제대금을 예치하는 서비스를 말합니다.
			</Typography>
			<Typography variant="body1">
			위 항에서 정의되지 않은 약관상의 용어의 의미는 일반적인 거래 관행에 의합니다.
			</Typography><br />

			<Typography variant="h6"><b>제3조 (약관 등의 명시와 설명 및 개정)</b></Typography>
			<Typography variant="body1">
			1. ‘회사’는 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 대표자 성함, 사업자등록번호, 통신판매업신고번호 연락처(전화, 전자우편, 주소 등) 등을 이용자가 쉽게 알 수 있도록 인터넷 사이트의 초기화면(전면) 및 모바일 애플리케이션에 공지합니다. 다만, 약관의 내용은 이용자가 연결 화면을 통하여 볼 수 있도록 할 수 있습니다.
			</Typography>
			<Typography variant="body1">
			2. ‘회사’는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
			</Typography>
			<Typography variant="body1">
			3. ‘회사’가 약관을 개정할 경우에는 적용 일자 및 개정 사유를 명시하여 현행약관과 함께 홈페이지에 개시하여 적용 일자 7일 이전부터 적용 일자 전날까지 공지합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 홈페이지에 게시합니다.
			</Typography>
			<Typography variant="body1">
			4. '회사'가 약관을 개정할 경우에는 변경된 약관은 적용일 시점부터 그 효력이 발생하며, '이용자'는 약관이 변경된 후에도 본 '서비스'를 계속 이용함으로써 변경 후의 약관에 대해 동의를 한 것으로 간주됩니다.
			</Typography>
			<Typography variant="body1">
			5. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자 보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
			</Typography><br />
			

			<Typography variant="h6"><b>제4조 (서비스의 제공 및 변경)</b></Typography>
			<Typography variant="body1">
			1. ‘회사’가 제공하는 ‘서비스’는 다음과 같습니다.
			</Typography>
			<Typography variant="body1">
			1) 전자상거래 플랫폼 개발 및 운영서비스
			</Typography>
			<Typography variant="body1">
			2) 아이템 정보 검색 서비스 및 마케팅 프로모션 서비스
			</Typography>
			<Typography variant="body1">
			3) ‘재화’ ’무형상품’ 등에 대한 주문/구매대행 중개 등 통신판매 중개 서비스
			</Typography>
			<Typography variant="body1">
			4) 소셜 네트워크 서비스(SNS)
			</Typography>
			<Typography variant="body1">
			2. '회사'가 제공하는 '서비스' 내용을 기술적 사양의 변경 등의 이유로 변경할 경우에는 그 사유를 '이용자'에게 통지하거나, '이용자'가 알아볼 수 있도록 공지사항으로 게시합니다.
			</Typography>
			<Typography variant="body1">
			3. 회사'는 원활하고 편리한 '서비스'를 위한 시스템을 운영 및 관리하며, '이용자' 사이에 성립된 거래 및 '이용자'가 제공하고 등록한 정보에 대해서는 해당 '이용자'가 그에 대한 직접적인 책임을 부담하여야 합니다. 이와 관련해서 '회사'는 어떠한 책임도 지지 않습니다.
			</Typography>
			<Typography variant="body1">
			4. 회사는 “회원”에 대하여 “영화 및 비디오물의 진흥에 관한 법률” 및 “청소년보호법”등에 따른 등급 및 연령 준수를 위해 이용 제한이나 등급별 제한을 할 수 있습니다.
			</Typography><br />

			<Typography variant="h6"><b>제5조 (서비스의 이용 시간 및 중단)</b></Typography>
			<Typography variant="body1">
			1. ‘서비스’의 이용은 ‘회사’의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시 동안을 원칙으로 합니다. 다만, 정기 점검 등의 필요로 “회사”가 정한 날이나 시간은 제외 됩니다. 정기 점검 시간은 서비스 제공 화면에 공지한 바에 따릅니다.
			</Typography>
			<Typography variant="body1">
			2. ‘회사’는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
			</Typography>
			<Typography variant="body1">
			3. ‘회사’은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3 자가 입은 손해에 대하여 배상합니다. 단, ‘회사’는 고의 또는 과실이 없음을 입증하는 경우에는 배상의 책임을 지지 않습니다.
			</Typography>
			<Typography variant="body1">
			4. 사업 종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 ‘회사’는 ‘이용자’에게 통지하거나 ‘이용자’가 알아볼 수 있도록 공지사항으로 게시합니다.
			</Typography><br />

			<Typography variant="h6"><b>제6조 (서비스 이용료)</b></Typography>
			<Typography variant="body1">
			1. ‘회사'는 '사다드림'과 관련된 다양한 관련 '서비스'를 무료로 제공하고, '회사'의 내부 정책에 따라 그에 대한 이용료(서비스 이용료)를 부과할 수 있습니다.
			</Typography><br />

			<Typography variant="h6"><b>제7조 (정보의 제공 및 광고의 게재)</b></Typography>
			<Typography variant="body1">
			1. ‘회사’는 회원이 ‘서비스’ 이용 중 필요하다고 인정되는 다양한 정보를 서비스 내 ‘공지사항’, 서비스 화면, 전자우편 등의 방법으로 회원에게 제공할 수 있습니다. 다만, 회원은 관련법에 따른 거래 관련 정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 위 정보 제공에 대해서 수신 거절을 할 수 있습니다.
			</Typography>
			<Typography variant="body1">
			2. 회사는 ‘서비스’의 운영과 관련하여 회사가 제공하는 서비스의 화면 및 홈페이지 등에 광고를 게재할 수 있습니다
			</Typography><br />

			<Typography variant="h6"><b>제8조 (대리행위의 부인)</b></Typography>
			<Typography variant="body1">
			1. ‘회사’는 효율적인 서비스를 위한 시스템 운영 및 관리 책임만을 부담하며, 재화 또는 용역의 거래와 관련하여 구매자 또는 셀러를 대리하지 아니하고, 회원 사이에 성립된 거래 및 회원이 제공하고 등록한 정보에 대해서는 해당 회원이 그에 대한 모든 책임을 부담하여야 합니다.
			</Typography><br />

			<Typography variant="h6"><b>제9조 (보증의 부인)</b></Typography>
			<Typography variant="body1">
			1. ‘회사’는 회사가 제공하는 시스템을 통하여 이루어지는 구매자와 셀러간의 거래와 관련하여 판매의사 또는 구매의사의 존부 및 진정성, 등록물품의 품질, 완전성, 안정성, 적법성 및 타인의 권리에 대한 비침해성, 구매자 또는 셀러가 입력하는 정보 및 그 정보를 통하여 링크된 URL에 게재된 자료의 진실성 또는 적법성 등 일체에 대하여 보증하지 아니하며, 이와 관련한 일체의 위험과 책임은 해당 회원이 전적으로 부담합니다.
			</Typography><br />

			<Typography variant="h6"><b>제10조 (‘사다드림’ 서비스의 성질과 목적)</b></Typography>
			<Typography variant="body1">
			1. ‘사다드림’은 회사가 회원 각자가 자기 결정에 의하여 회원 상호 간에 상품(유형,무형) 매매 및 배송대행과 구매대행이 이루어질 수 있도록 온라인 플랫폼을 제공하는 것입니다. 회사는 회원으로부터 물품을 대리구매하지 않으며, 단지 회원 간 거래의 안전성 및 신뢰성을 증진시키는 도구를 제공합니다. 회원 간에 성립된 거래와 관련된 책임은 거래당사자인 회원들 스스로가 부담하여야 합니다.
			</Typography><br />
		</div>
		</Container>
    </div>
	);
}
}
export default withStyles(styles)(Terms);