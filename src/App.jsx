import { useEffect, useRef } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Articles from "./components/Articles/Articles";
import { useGLTF } from "@react-three/drei";
import Footer from "./components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import CustomCursor from "./components/CustomCursor/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export const gsapSC = gsap;

// Smooth scroll
const scroller = document.body;

Scrollbar.use(OverscrollPlugin);
const bodyScrollBar = Scrollbar.init(scroller, {
	damping: 0.05,
	delegateTo: document,
	alwaysShowTracks: false,
	renderByPixels: true,
	plugins: {
		overscroll: {
			enable: true,
			effect: "glow",
			damping: 0.15,
			maxOverscroll: 150,
			glowColor: "#161414"
		}
	}
});
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(scroller, {
	scrollTop(value) {
		if (arguments.length) {
			bodyScrollBar.scrollTop = value;
		}
		return bodyScrollBar.scrollTop;
	}
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });

const App = () => {
	useGLTF.preload("/models/house/house.glb", true);
	const scrollerRef = useRef(null);

	useEffect(() => {
		ScrollTrigger.refresh();
	}, []);

	return (
		<div ref={scrollerRef}>
			<LoadingScreen />
			<CustomCursor />
			<Navbar />
			<Header />
			<Info />
			<Articles />
			<Footer />
		</div>
	);
};

export { bodyScrollBar };

export default App;
