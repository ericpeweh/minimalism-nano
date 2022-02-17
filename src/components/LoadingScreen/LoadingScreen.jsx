import React, { useEffect, useRef } from "react";
import styles from "./LoadingScreen.module.scss";
import { bodyScrollBar, gsapSC } from "../../App";

const LoadingScreen = () => {
	const loadingRef = useRef(null);
	const pRef = useRef(null);

	useEffect(() => {
		bodyScrollBar.addListener(status => {
			const offset = status.offset;

			loadingRef.current.style.top = offset.y + "px";
		});
	}, []);

	useEffect(() => {
		gsapSC.to(loadingRef.current, {
			y: "100%",
			delay: 3,
			duration: 1,
			ease: "Power2.easeOut"
		});

		gsapSC.to(pRef.current, {
			delay: 2,
			duration: 1,
			ease: "Power2.easeOut",
			backgroundColor: "#333333"
		});

		gsapSC.to(pRef.current, {
			border: "2px solid #333333",
			delay: 1
		});

		gsapSC.to(loadingRef.current, {
			display: "none",
			delay: 4
		});
	}, []);

	return (
		<div className={styles.loadingScreen} ref={loadingRef}>
			<p ref={pRef}>Minimalism Nano</p>
		</div>
	);
};

export default LoadingScreen;
