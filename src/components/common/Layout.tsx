import { useRouter } from 'next/router';
import styled from 'styled-components';
import GlobalStyle from 'common/GlobalStyle';
import Navigation from './Navigation';

interface LayoutProps {
	children: React.ReactNode;
}

const authPathname = ['/auth/login', '/auth/findPass', '/auth/signIn'];

function Layout({ children }: LayoutProps) {
	const route = useRouter();
	const { pathname } = route;

	return (
		<>
			<GlobalStyle />
			{!authPathname.includes(pathname) && <Navigation />}
			<LayoutContainer>{children}</LayoutContainer>
		</>
	);
}

const LayoutContainer = styled.div`
	width: 60%;
	height: 100vh;
	padding-top: 70px;
`;

export default Layout;
