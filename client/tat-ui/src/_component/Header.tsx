import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as css from './Header.css';

type Pages = 'archive' | 'review' | 'contact' | 'reservation' | '/';

const Header = () => {
	const [currentPage, setCurrentPage] = useState<Pages>();
	const nav = useNavigate();

	const onClickLogo = () => {
		nav('/');
	};

	const onClickItem = (e: React.MouseEvent) => {
		if (!(e.target instanceof HTMLDivElement)) return;
		nav((e.target as HTMLDivElement).innerText.trim());
	};

	return (
		<header className={css.header} onClick={onClickItem}>
			<span className={css.logo} onClick={onClickLogo}>
				moonwalker tatoo
			</span>
			<section></section>
			{['archive', 'review', 'contact', 'reservation'].map((route) => (
				<div className={currentPage === route ? css.selectedItem : css.item} key={route}>
					{route}
				</div>
			))}
		</header>
	);
};

export default Header;
