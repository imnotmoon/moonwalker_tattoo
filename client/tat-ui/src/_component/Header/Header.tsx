import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as css from './Header.css';

const Header = () => {
	const nav = useNavigate();

	const onClickItem = (e: React.MouseEvent) => {
		if (!(e.target instanceof HTMLDivElement)) return;
		const itemName = (e.target as HTMLDivElement).innerText.trim();
		nav(itemName);
	};

	return (
		<header className={css.header} onClick={onClickItem}>
			<div className={css.logo}>moonwalker tatoo</div>
			<div></div>
			<div className={css.item}>archive</div>
			<div className={css.item}>review</div>
			<div className={css.item}>contact</div>
			<div className={css.item}>reservation</div>
		</header>
	);
};

export default Header;
