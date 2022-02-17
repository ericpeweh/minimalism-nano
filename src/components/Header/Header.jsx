import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { gsapSC } from "../../App";

const Header = () => {
	const minimalismTextRef = useRef(null);
	const nanoTextRef = useRef(null);

	useEffect(() => {
		gsapSC.fromTo(
			minimalismTextRef.current,
			{
				scale: 1,
				y: 0,
				autoAlpha: 1
			},
			{
				scale: 0.3,
				autoAlpha: 0,
				y: 100,
				scrollTrigger: {
					trigger: minimalismTextRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 3
				},
				duration: 4
			}
		);
	}, []);

	useEffect(() => {
		gsapSC.fromTo(
			nanoTextRef.current,
			{
				scale: 1,
				autoAlpha: 1
			},
			{
				scale: 1.3,
				autoAlpha: 0,
				scrollTrigger: {
					trigger: nanoTextRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 2
				},
				duration: 8
			}
		);
	}, []);

	return (
		<div className={styles.header}>
			<div className={styles.contentContainer}>
				<h1 className={styles.title} ref={minimalismTextRef}>
					MINIMALISM
				</h1>
				<p className={styles.subtitle} ref={nanoTextRef}>
					AT NANO LEVEL
				</p>
			</div>
		</div>
	);
};

export default Header;
