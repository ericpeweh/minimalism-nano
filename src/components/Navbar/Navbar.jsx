/* eslint-disable no-restricted-globals */
import React, { useRef, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logoDark from "../../assets/img/logo-dark.png";
import logoLight from "../../assets/img/logo-light.png";
import { gsapSC } from "../../App";
import { bodyScrollBar } from "../../App";

const Navbar = () => {
	const navbarRef = useRef(null);
	const logoLightRef = useRef(null);
	const logoDarkRef = useRef(null);

	useEffect(() => {
		bodyScrollBar.addListener(status => {
			const offset = status.offset || 0;

			navbarRef.current.style.top = offset.y + "px";
		});
	}, []);

	useEffect(() => {
		gsapSC.fromTo(
			logoLightRef.current,
			{
				autoAlpha: 1
			},
			{
				autoAlpha: 0,
				scrollTrigger: {
					trigger: navbarRef.current,
					start: "600 0%",
					end: "bottom bottom",
					scrub: 1
				},
				duration: 2
			}
		);
	}, []);

	useEffect(() => {
		gsapSC.fromTo(
			logoDarkRef.current,
			{
				autoAlpha: 0
			},
			{
				autoAlpha: 1,
				scrollTrigger: {
					trigger: navbarRef.current,
					start: "600 0%",
					end: "bottom bottom",
					scrub: 1
				},
				duration: 2
			}
		);
	}, []);

	useEffect(() => {
		gsapSC.fromTo(
			navbarRef.current,
			{
				backgroundColor: "transparent",
				boxShadow: "none"
			},
			{
				backgroundColor: "#dddddd",
				boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.155)",
				scrollTrigger: {
					trigger: navbarRef.current,
					start: "600 0%",
					end: "bottom bottom",
					scrub: 1
				},
				duration: 2
			}
		);
	}, []);

	return (
		<nav className={styles.navbar} ref={navbarRef}>
			<img src={logoLight} alt="minimmalism nano logo" height={55} ref={logoLightRef} />
			<img src={logoDark} alt="minimmalism nano logo" height={55} ref={logoDarkRef} />
		</nav>
	);
};

export default Navbar;
