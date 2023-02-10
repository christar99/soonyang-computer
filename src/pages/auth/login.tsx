import React from 'react';
import LoginBox from 'components/LoginBox';
import styled from 'styled-components';
import Link from 'next/link';

function login() {
	return (
		<LoginBox>
			<InputBox type="email" placeholder="아이디(이메일)" />
			<InputBox type="password" placeholder="비밀번호" />
			<LoginButton>로그인</LoginButton>
			<SubGroup>
				<Link href="/auth/signIn">회원가입</Link> |&nbsp;
				<Link href="/auth/findPass">비밀번호찾기</Link>
			</SubGroup>
		</LoginBox>
	);
}

const InputBox = styled.input`
	width: 400px;
	height: 40px;
	padding: 0 10px;
	font-size: 1.5rem;
`;

const LoginButton = styled.div`
	width: 150px;
	display: flex;
	justify-content: center;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 1.8rem;
	font-weight: 700;
	color: #fff;
	background-color: #5878bb;

	:hover {
		cursor: pointer;
	}
`;

const SubGroup = styled.div`
	display: flex;
	gap: 20px;

	a {
		font-size: 1.5rem;
		text-decoration: underline;
	}
`;

export default login;
