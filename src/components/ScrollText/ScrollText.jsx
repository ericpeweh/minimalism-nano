import React, { useEffect, useRef } from "react";
import styles from "./ScrollText.module.scss";
import { gsapSC } from "../../App";

const ScrollText = ({ text }) => {
	const scrollTextRef = useRef(null);

	useEffect(() => {
		gsapSC.fromTo(
			scrollTextRef.current,
			{
				autoAlpha: 0,
				y: 50
			},
			{
				autoAlpha: 1,
				y: 0,
				scrollTrigger: {
					trigger: scrollTextRef.current,
					start: "top bottom",
					once: true
				},
				duration: 1.5
			}
		);
	}, []);

	return (
		<div className={styles.movingTextContainer} ref={scrollTextRef}>
			<div className={styles.movingText}>
				<span>{text}</span>
			</div>
			<div className={`${styles.movingText} ${styles.movingText2}`}>
				<span>{text}</span>
			</div>
		</div>
	);
};

export default ScrollText;
