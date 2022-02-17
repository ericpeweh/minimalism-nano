import React, { useEffect, useRef } from "react";
import styles from "./Info.module.scss";
import p1 from "../../assets/img/p-1.jpg";
import p2 from "../../assets/img/p-2.jpg";
import p3 from "../../assets/img/p-3.jpg";
import ScrollText from "../ScrollText/ScrollText";
import { gsapSC } from "../../App";

const Info = () => {
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const img1Ref = useRef(null);
	const img2Ref = useRef(null);
	const img3Ref = useRef(null);
	const c1Ref = useRef(null);
	const c2Ref = useRef(null);
	const c3Ref = useRef(null);
	const quotesRef = useRef(null);
	const authorRef = useRef(null);

	useEffect(() => {
		gsapSC.from(titleRef.current, {
			duration: 1.5,
			autoAlpha: 0,
			yPercent: 100,
			ease: "power4",
			rotate: 3,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 2
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(subtitleRef.current, {
			duration: 1.5,
			autoAlpha: 0,
			yPercent: 300,
			ease: "power4",
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 2
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(img1Ref.current, {
			duration: 3,
			x: -150,
			y: -100,
			rotate: 5,
			start: "top center",
			end: "top 30vh",
			autoAlpha: 0,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 2
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(img2Ref.current, {
			duration: 4,
			x: 250,
			y: 100,
			rotate: 3,
			start: "top 0%",
			end: "top center",
			autoAlpha: 0,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 6
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.fromTo(
			img3Ref.current,
			{
				transformOrigin: "50% 50%",
				y: 250,
				autoAlpha: 0,
				rotate: 2
			},
			{
				transformOrigin: "50% 50%",
				duration: 3,
				delay: 2,
				rotate: 0,
				x: 0,
				y: 0,
				start: "top 0%",
				end: "top center",
				autoAlpha: 1,
				scrollTrigger: {
					trigger: titleRef.current,
					scrub: 3
				}
			}
		);
	}, []);

	useEffect(() => {
		gsapSC.from(c1Ref.current, {
			delay: 6,
			x: 300,
			y: -300,
			scale: 0.2,
			start: "top 0%",
			end: "top center",
			autoAlpha: 0.5,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 3
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c2Ref.current, {
			delay: 2,
			x: -200,
			y: -300,
			scale: 0.1,
			start: "top 0%",
			end: "top center",
			autoAlpha: 0.1,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 3
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(c3Ref.current, {
			delay: 2,
			x: -100,
			y: 300,
			scale: 0,
			start: "top 0%",
			end: "top center",
			autoAlpha: 0.1,
			scrollTrigger: {
				trigger: c1Ref.current,
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(quotesRef.current, {
			delay: 2,
			x: -100,
			y: 300,
			rotate: 6,
			scale: 0,
			color: "#fff",
			start: "top 0%",
			end: "top center",
			autoAlpha: 0.1,
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 4
			}
		});
	}, []);

	useEffect(() => {
		gsapSC.from(authorRef.current, {
			delay: 7,
			rotate: 5,
			x: 400,
			y: 500,
			scale: 2,
			color: "#fff",
			start: "top 0%",
			end: "top center",
			autoAlpha: 0.1,
			scrollTrigger: {
				trigger: c1Ref.current,
				scrub: 4
			}
		});
	}, []);

	return (
		<section className={styles.info}>
			<ScrollText text={"All you need is less, because less is more | Minimalism | "} />
			<div className={styles.infoContainer}>
				<h2 className={styles.infoTitle} ref={titleRef}>
					minimalism = freedom
				</h2>
				<p className={styles.subtitle} ref={subtitleRef}>
					make it better by making it simpler
				</p>
				<div className={styles.imageContainer}>
					<img src={p1} alt="minimalism shot" className={styles.infoImage1} ref={img1Ref} />
					<img src={p2} alt="minimalism shot" className={styles.infoImage2} ref={img2Ref} />
					<img src={p3} alt="minimalism shot" className={styles.infoImage3} ref={img3Ref} />
					<div className={styles.circle1} ref={c1Ref}>
						&nbsp;
					</div>
					<div className={styles.circle2} ref={c2Ref}>
						&nbsp;
					</div>
					<div className={styles.circle3} ref={c3Ref}>
						&nbsp;
					</div>
				</div>
				<p className={styles.quotes} ref={quotesRef}>
					Collect moments not things
					<span className={styles.quotesAuthor} ref={authorRef}>
						- Paulo Coelho
					</span>
				</p>
			</div>
		</section>
	);
};

export default Info;
