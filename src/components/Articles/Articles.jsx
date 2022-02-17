import React, { useRef, useEffect, useState } from "react";
import styles from "./Articles.module.scss";
import ScrollText from "../ScrollText/ScrollText";

import ar1 from "../../assets/img/article1.jpg";
import ar2 from "../../assets/img/article2.jpg";
import ar3 from "../../assets/img/article3.jpg";
import ar4 from "../../assets/img/article4.jpg";
import ar5 from "../../assets/img/article5.jpg";
import { gsapSC } from "../../App";
import ArticleModal from "../ArticleModal/ArticleModal";

import articles from "../../utils/articles";
import { mouseCursor } from "../CustomCursor/CustomCursor";

const Articles = () => {
	const [isModalOpen, setIsModalOpen] = useState("init");
	const [selected, setSelected] = useState("");
	const [articleImage, setArticleImage] = useState("");
	const [articleTitle, setArticleTitle] = useState("");
	const [articleContent, setArticleContent] = useState("");

	const openModalHandler = (id, img, title, content) => {
		setIsModalOpen(true);
		setSelected(id);
		setArticleImage(img);
		setArticleTitle(title);
		setArticleContent(content);
	};

	const closeModalHandler = () => {
		setIsModalOpen(false);
		setSelected("");
	};

	const titleRef = useRef(null);
	const ac1Ref = useRef(null);
	const ac2Ref = useRef(null);
	const ac3Ref = useRef(null);
	const ac4Ref = useRef(null);
	const ac5Ref = useRef(null);

	const a1Ref = useRef(null);
	const a2Ref = useRef(null);
	const a3Ref = useRef(null);
	const a4Ref = useRef(null);
	const a5Ref = useRef(null);

	const c1Ref = useRef(null);
	const c2Ref = useRef(null);
	const c3Ref = useRef(null);
	const c4Ref = useRef(null);

	useEffect(() => {
		gsapSC.from(titleRef.current, {
			autoAlpha: 0,
			scale: 1.1,
			y: -100,
			rotate: 3,
			scrollTrigger: {
				duration: 2,
				trigger: titleRef.current,
				scrub: 2
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(a1Ref.current, {
			y: 400,
			x: 200,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 2
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(a2Ref.current, {
			x: 400,
			y: -200,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(a3Ref.current, {
			y: -200,
			x: -400,
			autoAlpha: 0,
			duration: 4,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 3
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(a4Ref.current, {
			y: -400,
			x: 300,
			autoAlpha: 0,
			duration: 4,
			scrollTrigger: {
				trigger: a2Ref.current,
				scrub: 3
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(a5Ref.current, {
			y: 400,
			x: 300,
			autoAlpha: 0,
			duration: 6,
			scrollTrigger: {
				trigger: a3Ref.current,
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c1Ref.current, {
			y: -400,
			x: 300,
			scale: 0.4,
			autoAlpha: 0,
			duration: 6,
			scrollTrigger: {
				trigger: titleRef.current,
				start: "-=20% 20%",
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c2Ref.current, {
			y: -100,
			x: 400,
			scale: 0.5,
			autoAlpha: 0,
			duration: 6,
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top 30%",
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c3Ref.current, {
			y: 400,
			x: -100,
			scale: 0.5,
			autoAlpha: 0,
			duration: 4,
			scrollTrigger: {
				trigger: c1Ref.current,
				start: "top 30%",
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c4Ref.current, {
			scale: 0,
			autoAlpha: 0,
			duration: 4,
			scrollTrigger: {
				trigger: c1Ref.current,
				start: "top 30%",
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		const articlesRef = [ac1Ref, ac2Ref, ac3Ref, ac4Ref, ac5Ref];

		const articleMouseOver = e => {
			mouseCursor.current.classList.add("article-grow");
		};
		const articleMouseLeave = e => {
			mouseCursor.current.classList.remove("article-grow");
		};

		articlesRef.forEach(article => {
			article.current.addEventListener("mouseover", articleMouseOver);
		});
		articlesRef.forEach(article => {
			article.current.addEventListener("mouseleave", articleMouseLeave);
		});

		return () => {
			articlesRef.forEach(article => {
				article.current.removeEventListener("mouseover", articleMouseOver);
			});
		};
	}, [ac1Ref, ac2Ref, ac3Ref, ac4Ref, ac5Ref]);

	return (
		<div className={styles.articles}>
			<ArticleModal
				isModalOpen={isModalOpen}
				onClose={closeModalHandler}
				image={articleImage}
				title={articleTitle}
				content={articleContent}
			/>
			<ScrollText text={"from zero to one hundred, back to zero to one thousand"} />
			<h2 className={styles.title} ref={titleRef}>
				Articles
			</h2>
			<div className={styles.circle1} ref={c1Ref}>
				&nbsp;
			</div>
			<div className={styles.circle2} ref={c2Ref}>
				&nbsp;
			</div>
			<div className={styles.circle3} ref={c3Ref}>
				&nbsp;
			</div>
			<div className={styles.circle4} ref={c4Ref}>
				&nbsp;
			</div>
			<div className={styles.articlesContainer}>
				<div
					className={`${styles.article} ${styles.article1} ${
						selected === "a1" ? styles.selected : ""
					}`}
					onClick={() => openModalHandler("a1", ar1, articles[0].title, articles[0].content)}
					ref={ac1Ref}
				>
					<img src={ar1} alt="article thumbnail" className={styles.articleImage} ref={a1Ref} />
					<h3 className={`${styles.articleTitle} ${selected === "a1" ? styles.selected : ""}`}>
						Minimalist Lifestyle.
					</h3>
					<div className={`${styles.backdrop} ${selected === "a1" ? styles.selected : ""}`}></div>
				</div>

				<div
					className={`${styles.article} ${styles.article2} ${
						selected === "a2" ? styles.selected : ""
					}`}
					onClick={() => openModalHandler("a2", ar3, articles[1].title, articles[1].content)}
					ref={ac2Ref}
				>
					<img src={ar3} alt="article thumbnail" className={styles.articleImage} ref={a2Ref} />
					<h3 className={`${styles.articleTitle} ${selected === "a2" ? styles.selected : ""}`}>
						Something great doesn't always take shape.
					</h3>
					<div className={`${styles.backdrop} ${selected === "a2" ? styles.selected : ""}`}></div>
				</div>

				<div
					className={`${styles.article} ${styles.article3} ${
						selected === "a3" ? styles.selected : ""
					}`}
					onClick={() => openModalHandler("a3", ar2, articles[2].title, articles[2].content)}
					ref={ac3Ref}
				>
					<img src={ar2} alt="article thumbnail" className={styles.articleImage} ref={a3Ref} />
					<h3 className={`${styles.articleTitle} ${selected === "a3" ? styles.selected : ""}`}>
						Cozy & simple.
					</h3>
					<div className={`${styles.backdrop} ${selected === "a3" ? styles.selected : ""}`}></div>
				</div>

				<div
					className={`${styles.article} ${styles.article4} ${
						selected === "a4" ? styles.selected : ""
					}`}
					onClick={() => openModalHandler("a4", ar4, articles[3].title, articles[3].content)}
					ref={ac4Ref}
				>
					<img src={ar4} alt="article thumbnail" className={styles.articleImage} ref={a4Ref} />
					<h3 className={`${styles.articleTitle} ${selected === "a4" ? styles.selected : ""}`}>
						Best things in life aren't a things.
					</h3>
					<div className={`${styles.backdrop} ${selected === "a4" ? styles.selected : ""}`}></div>
				</div>

				<div
					className={`${styles.article} ${styles.article5} ${
						selected === "a5" ? styles.selected : ""
					}`}
					onClick={() => openModalHandler("a5", ar5, articles[4].title, articles[4].content)}
					ref={ac5Ref}
				>
					<img src={ar5} alt="article thumbnail" className={styles.articleImage} ref={a5Ref} />
					<h3 className={`${styles.articleTitle} ${selected === "a5" ? styles.selected : ""}`}>
						Enjoy, life is not a race.
					</h3>
					<div className={`${styles.backdrop} ${selected === "a5" ? styles.selected : ""}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Articles;
