import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { RiShoppingCartLine } from 'react-icons/ri';

const loginToggle = [
	{ name: '로그인', location: 'login' },
	{ name: '비밀번호찾기', location: 'findPass' },
	{ name: '간편회원가입', location: 'signIn' }
];

function Navigation() {
	const [toggleOn, setToggleOn] = useState<boolean>(false);
	const router = useRouter();
	const { pathname } = router;

	useEffect(() => {
		setToggleOn(false);
	}, [pathname]);
    
	return (
		<NavigationWrap>
			<Container>
				<MenuContainer>
					<MenuButton>
						<GiHamburgerMenu />
					</MenuButton>
					<Image
						src="/soonyang_logo.png"
						width={200}
						height={35}
						alt="순양로고"
						className="soonyang_logo"
					/>
				</MenuContainer>
				<InputContainer>
					<SearchInput placeholder="찾고싶은 상품을 검색해보세요!" />
					<AiOutlineSearch />
				</InputContainer>
				<InfoContainer>
					<BsPerson onClick={() => setToggleOn(!toggleOn)} />
					<RiShoppingCartLine />
					{toggleOn && (
						<MyPageToggle>
							{loginToggle.map((menu, index) => {
								return (
									<Link href={`/auth/${menu.location}`} key={index}>
										<LoginMenu>{menu.name}</LoginMenu>
									</Link>
								);
							})}
						</MyPageToggle>
					)}
				</InfoContainer>
			</Container>
		</NavigationWrap>
	);
}

const NavigationWrap = styled.div`
	width: 100vw;
	position: fixed;
	z-index: 100;
`;

const Container = styled.div`
	width: 100%;
	height: 80px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.soonyang_logo {
		:hover {
			cursor: pointer;
		}
	}
`;

const MenuContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const MenuButton = styled.div`
	display: inline-block;
	padding: 5px;

	svg {
		width: 40px;
		height: 40px;
	}

	:hover {
		cursor: pointer;
		background-color: #91a3ca;
	}
`;

const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	svg {
		width: 20px;
		height: 20px;
		position: absolute;
		left: 10px;
	}
`;

const SearchInput = styled.input`
	width: 500px;
	height: 40px;
	font-size: 1.5rem;
	padding: 10px;
	padding-left: 40px;
	border-radius: 5px;
`;

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-right: 20px;
	position: relative;

	svg {
		width: 35px;
		height: 35px;

		:hover {
			cursor: pointer;
		}
	}
`;

const MyPageToggle = styled.div`
	width: 120px;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 45px;
	left: -40px;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const LoginMenu = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 0;

	:hover {
		cursor: pointer;
		color: #91a3ca;
		text-decoration: underline;
	}
`;

export default Navigation;
