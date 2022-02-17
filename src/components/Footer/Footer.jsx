import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.left}>
				<p>Minimalism Nano</p>
				<p>by</p>
				<p>ericpeweh</p>
			</div>
			<div className={styles.right}>
				<p>2022</p>
			</div>
		</div>
	);
};

export default Footer;
