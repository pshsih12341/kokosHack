import React from "react";

import style from "./header.module.scss";
import {Link} from "react-router-dom";
import {TextInput} from "@gravity-ui/uikit";

import logo from "@/assets/svg/logo.svg";

const Header: React.FC = () => {
	return (
		<header className={style.hedaer}>
			<div className={style.headerTop}>
				<Link
					to={"/"}
					className={style.logo}>
					<img
						alt='logo'
						src={logo}
					/>
					<p>{`Футбольный Клуб\n“Кококс Групп”`}</p>
				</Link>
				<div className={style.headerTopRight}>
					<Link
						to={"/cart"}
						className={style.headerCart}>
						<img
							alt='cart'
							src='/src/widgets/layout/svg/shopping-cart.svg'
						/>
						<p className={style.headerCartp}>Корзина</p>
					</Link>
					<Link to={"/profile"}>
						<img
							alt='profile'
							className={style.headerImg}
						/>
					</Link>
				</div>
			</div>
			<div className={style.headerBot}>
				<nav className={style.headerNav}>
					<Link
						to={"/team"}
						className={style.headerNavLink}>
						Команда
					</Link>
					<span className={style.borderSpan} />
					<Link
						to={"/plays"}
						className={style.headerNavLink}>
						Матчи
					</Link>
					<span className={style.borderSpan} />
					<Link
						to={"/info"}
						className={style.headerNavLink}>
						О клубе
					</Link>
					<span className={style.borderSpan} />
					<Link
						to={"/market"}
						className={style.headerNavLink}>
						Магазин
					</Link>
					<span className={style.borderSpan} />
					<Link
						to={"/cards"}
						className={style.headerNavLink}>
						Карточки
					</Link>
					<span className={style.borderSpan} />
					<Link
						to={"/conntacts"}
						className={style.headerNavLink}>
						Контакты
					</Link>
				</nav>
				<TextInput
					size='l'
					className={style.input}
				/>
			</div>
		</header>
	);
};

export default React.memo(Header);
