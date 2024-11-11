import React, {useState} from "react";
import cn from "classnames";

import style from "./select.module.scss";

const MySelect: React.FC<{data: string[]}> = ({data}) => {
	const [title, setTitle] = useState(data[0]);
	const [active, setActive] = useState(false);

	const setTitleHandler = (el: string): void => {
		setTitle(el);
		setActive(false);
	};

	return (
		<div className={cn(style.select, active && style.selectActive)}>
			<div
				className={style.selectTitle}
				onClick={() => setActive(true)}>
				{title}
			</div>
			{active && (
				<div className={style.activeTab}>
					<div className={style.activeTabTitle}>{title}</div>
					<div className={style.activeTabItems}>
						{data.map(el => (
							<div
								className={style.option}
								key={el}
								onClick={() => setTitleHandler(el)}>
								{el}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default React.memo(MySelect);
