import React, { useEffect, useRef } from "react";
import styles from "./ArticleModal.module.scss";
import { bodyScrollBar, gsapSC } from "../../App";

const ArticleModal = ({ isModalOpen, onClose, image, title, content }) => {
	const modalRef = useRef(null);
	const backdropRef = useRef(null);

	useEffect(() => {
		bodyScrollBar.addListener(status => {
			const offset = status.offset;

			backdropRef.current.style.top = offset.y + "px";
		});
	}, []);

	useEffect(() => {
		const escKeyHandler = e => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isModalOpen) {
			window.addEventListener("keydown", escKeyHandler);
		}

		return () => {
			window.removeEventListener("keydown", escKeyHandler);
		};
	}, [isModalOpen, onClose]);

	useEffect(() => {
		if (isModalOpen !== "init") {
			if (isModalOpen) {
				gsapSC.fromTo(
					modalRef.current,
					{
						scale: 0,
						autoAlpha: 0,
						// rotate: 10,
						visibility: "hidden"
					},
					{
						autoAlpha: 1,
						scale: 1,
						rotate: 0,
						visibility: "visible"
					}
				);

				gsapSC.fromTo(
					backdropRef.current,
					{
						autoAlpha: 0,
						visibility: "hidden"
					},
					{
						autoAlpha: 1,
						visibility: "visible"
					}
				);
			} else {
				gsapSC.fromTo(
					modalRef.current,
					{
						autoAlpha: 1,
						scale: 1,
						rotate: 0
					},
					{
						autoAlpha: 0,
						scale: 0
						// rotate: 10
					}
				);

				gsapSC.to(backdropRef.current, {
					autoAlpha: 0
				});
			}
		}
	}, [isModalOpen]);

	return (
		<div className={styles.backdrop} ref={backdropRef}>
			<div className={styles.articleModal} ref={modalRef}>
				<div className={styles.articleImage} style={{ backgroundImage: `url(${image})` }}></div>
				<div className={styles.articleContent}>
					<h3 data-title={title}>{title}</h3>
					<p>{content}</p>
				</div>
				<div className={styles.closeButton} onClick={onClose}>
					x
				</div>
			</div>
		</div>
	);
};

export default ArticleModal;
