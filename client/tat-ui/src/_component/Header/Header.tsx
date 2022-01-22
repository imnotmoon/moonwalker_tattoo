import * as css from './Header.css';

const Header = () => {
	return (
		<div className={css.header}>
			<div className={css.logo}>moonwalker tatoo</div>
			<div></div>
			<div className={css.item}>archive</div>
			<div className={css.item}>review</div>
			<div className={css.item}>contact</div>
			<div className={css.item}>reservation</div>
		</div>
	);
};

export default Header;
