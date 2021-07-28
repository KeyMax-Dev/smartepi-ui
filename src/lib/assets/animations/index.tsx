import { TargetAndTransition } from 'framer-motion';

const HeaderIn: TargetAndTransition = {
	translateY: ['-100%', '0%'],
	transition: {
		delay: 0.1,
		duration: 0.2,
		ease: 'easeOut',
	},
};

const HeaderOut: TargetAndTransition = {
	translateY: ['0%', '-100%'],
	transition: {
		duration: 0.2,
		ease: 'easeIn',
	},
};

const HeaderInitial: any = {
	translateY: '-100%',
};

const FadeOut: TargetAndTransition = {
	opacity: [1, 0],
	scale: [1, 0.5],
	transition: { duration: 0.3, ease: 'backIn' },
};

const FadeIn: TargetAndTransition = {
	opacity: [0, 1],
	scale: [0.5, 1],
	transition: { duration: 0.3, ease: 'backOut' },
};

const FadeInitial: any = {
	opacity: 0,
};

const ListItemInitial = { opacity: 0 };

const ListItemIn = (index = 0) => ({
	opacity: 1,
	transition: { delay: index * 0.05, duration: 0.2, ease: 'easeOut' },
});

const FingerprintShadowTry = {
	opacity: [0, 0.6, 0],
	translateY: [0, 10, 0],
	rotate: [Math.random() * 50 - 25, Math.random() * 50 - 25],
	transition: { duration: 0.7, ease: 'easeInOut' },
};

const FingerprintBaseTry = {
	scale: [1, 0.9, 1],
	transition: { duration: 0.7, ease: 'backInOut' },
};

const Animations = {
	HeaderIn,
	HeaderOut,
	HeaderInitial,
	FadeOut,
	FadeIn,
	FadeInitial,
	ListItemInitial,
	ListItemIn,
	FingerprintShadowTry,
	FingerprintBaseTry,
};

export default Animations;
