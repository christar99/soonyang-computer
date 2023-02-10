import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

interface LoginBoxProps {
	children: React.ReactNode;
}

function LoginBox({ children }: LoginBoxProps) {
	return (
		<AuthWrap>
			<Link href="/">
				<Image src="/soonyang_logo.png" width={250} height={40} alt="logo" />
			</Link>
			<Container>{children}</Container>
		</AuthWrap>
	);
}

const AuthWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const Container = styled.div`
	width: 500px;
	border: 1px solid #000;
	border-radius: 5px;
	padding: 20px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export default LoginBox;
