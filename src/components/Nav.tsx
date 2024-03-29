import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
	return (
		<Container>
			<Logo>
				<Link to={routes.HOME}>TEKT</Link>
			</Logo>
			<Button>
				<FiSearch size={24} />
			</Button>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	margin: 0 auto;
	padding: 0 1rem;
	max-width: var(--max-app-width);
	min-width: var(--min-app-width);
	width: 100%;
	height: 52px;
	background-color: var(--color-white);
	border-bottom: 1px solid var(--layout-border-color);
	z-index: 9900;
`;

const Logo = styled.h1`
	font-size: 20px;
	font-weight: 900;
`;

const Button = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 27px;
	height: 27px;
	cursor: pointer;
`;

export default Nav;
