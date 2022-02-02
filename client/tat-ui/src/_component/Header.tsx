import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as css from './Header.css';

type Pages = 'about' | 'archive' | 'review' | 'contact' | '/';

const Header = () => {
	const [currentPage, setCurrentPage] = useState<Pages>();
	const nav = useNavigate();

	const onClickLogo = () => {
		nav('/');
	};

	const onClickItem = (e: React.MouseEvent) => {
		if (!(e.target instanceof HTMLDivElement)) return;
		const route = (e.target as HTMLDivElement).innerText.trim() as Pages;
		setCurrentPage(route);
		nav(route);
	};

	return (
		<header className={css.header} onClick={onClickItem}>
			<span className={css.logo} onClick={onClickLogo}>
				moonwalker tattoo
			</span>
			<section></section>
			{['about', 'archive', 'review', 'contact'].map((route) => (
				<div className={currentPage === route ? css.selectedItem : css.item} key={route}>
					{route}
				</div>
			))}
		</header>
	);
};

export default Header;
