import { TargetAndTransition } from "framer-motion";
export declare const HeaderIn: TargetAndTransition;
export declare const HeaderOut: TargetAndTransition;
export declare const HeaderInitial: any;
export declare const FadeOut: TargetAndTransition;
export declare const FadeIn: TargetAndTransition;
export declare const FadeInitial: any;
export declare const ListItemInitial: {
    opacity: number;
};
export declare const ListItemIn: (index?: number) => {
    opacity: number;
    transition: {
        delay: number;
        duration: number;
        ease: string;
    };
};
export declare const FingerprintShadowTry: {
    opacity: number[];
    translateY: number[];
    rotate: number[];
    transition: {
        duration: number;
        ease: string;
    };
};
export declare const FingerprintBaseTry: {
    scale: number[];
    transition: {
        duration: number;
        ease: string;
    };
};
