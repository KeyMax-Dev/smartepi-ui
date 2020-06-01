import { TargetAndTransition } from "framer-motion";

export const HeaderIn: TargetAndTransition = {
    // opacity: [0, 1],
    translateY: ['-100%', '0%'],
    transition: {
        delay: 0.1,
        duration: 0.2,
        ease: 'easeOut'
    }
};

export const HeaderOut: TargetAndTransition = {
    // opacity: [1, 0],
    translateY: ['0%', '-100%'],
    transition: {
        duration: 0.2,
        ease: 'easeIn'
    }
};

export const HeaderInitial: any = {
    translateY: '-100%'
};

export const FadeOut: TargetAndTransition = {
    opacity: [1, 0],
    scale: [1, 0.5],
    transition: { duration: .3, ease: 'backIn' }
};

export const FadeIn: TargetAndTransition = {
    opacity: [0, 1],
    scale: [0.5, 1],
    transition: { duration: .3, ease: 'backOut' }
};

export const FadeInitial: any = {
    opacity: 0
};

export const ListItemInitial = { opacity: 0 };

export const ListItemIn = (index = 0) => ({ opacity: 1, transition: { delay: index * .05, duration: 0.2, ease: 'easeOut' } });

export const FingerprintShadowTry = {
    opacity: [0, .6, 0],
    translateY: [0, 10, 0],
    rotate: [(Math.random() * 50 - 25), (Math.random() * 50 - 25)],
    transition: { duration: .7, ease: 'easeInOut' }
};

export const FingerprintBaseTry = {
    scale: [1, .9, 1],
    transition: { duration: .7, ease: 'backInOut' }
};