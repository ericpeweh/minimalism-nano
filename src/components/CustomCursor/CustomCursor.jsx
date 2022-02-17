import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.scss";
import { bodyScrollBar } from "../../App";

let mouseCursor;

const CustomCursor = () => {
	const cursorRef = useRef(null);

	useEffect(() => {
		mouseCursor = cursorRef;
	}, [cursorRef]);

	useEffect(() => {
		let offsetY = 0,
			pageY,
			pageX;

		bodyScrollBar.addListener(e => {
			offsetY = e.offset.y;
			cursorRef.current.style.top = pageY + offsetY + "px";
		});

		const mouseMoveHandler = e => {
			pageY = e.pageY;
			pageX = e.pageX;

			cursorRef.current.style.top = pageY + offsetY + "px";
			cursorRef.current.style.left = pageX + "px";
		};

		window.addEventListener("mousemove", mouseMoveHandler);

		const mouseClickHandler = e => {
			cursorRef.current.classList.add("cursor-click");

			setTimeout(() => {
				cursorRef.current.classList.remove("cursor-click");
			}, 500);
		};

		window.addEventListener("click", mouseClickHandler);

		return () => {
			window.removeEventListener("mousemove", mouseMoveHandler);
			window.removeEventListener("click", mouseClickHandler);
		};
	});

	return <div className={styles.cursor} ref={cursorRef}></div>;
};

export { mouseCursor };

export default CustomCursor;
