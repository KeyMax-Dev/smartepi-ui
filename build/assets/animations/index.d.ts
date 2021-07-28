import { TargetAndTransition } from 'framer-motion';
declare const Animations: {
    HeaderIn: TargetAndTransition;
    HeaderOut: TargetAndTransition;
    HeaderInitial: any;
    FadeOut: TargetAndTransition;
    FadeIn: TargetAndTransition;
    FadeInitial: any;
    ListItemInitial: {
        opacity: number;
    };
    ListItemIn: (index?: number) => {
        opacity: number;
        transition: {
            delay: number;
            duration: number;
            ease: string;
        };
    };
    FingerprintShadowTry: {
        opacity: number[];
        translateY: number[];
        rotate: number[];
        transition: {
            duration: number;
            ease: string;
        };
    };
    FingerprintBaseTry: {
        scale: number[];
        transition: {
            duration: number;
            ease: string;
        };
    };
};
export default Animations;
