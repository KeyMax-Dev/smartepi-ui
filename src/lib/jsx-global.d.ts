/// <reference types="react" />

// Global namespace JSX for backward compatibility with older code
// In React 19 with new JSX transform, prefer using React.ReactElement or letting TypeScript infer types
declare global {
	namespace JSX {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		type Element = React.ReactElement<any, any> | null;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		type ElementClass = React.Component<any>;
		interface ElementAttributesProperty {
			props: {};
		}
		interface ElementChildrenAttribute {
			children: {};
		}
		type LibraryManagedAttributes<C, P> = React.LibraryManagedAttributes<C, P>;
		interface IntrinsicAttributes extends React.Attributes {}
		interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

		type IntrinsicElements = {
			[K in keyof React.JSX.IntrinsicElements]: React.JSX.IntrinsicElements[K];
		};
	}
}

export {};
