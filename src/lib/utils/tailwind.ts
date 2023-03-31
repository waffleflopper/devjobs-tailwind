export interface TailwindStyles {
	[key: string]: string;
}

//helper function to transform the object into a big tailwind class list - exported in case you want to use it on it's own w/o style object
export function generateClasses(styles: TailwindStyles): string {
	return Object.keys(styles)
		.map((key) => {
			if (key) {
				if (key === 'base') return `${styles[key]}`;
				return attachPrefixes(key, styles[key]);
			}
		})
		.join(' ');
}

// helper function to attach prefixes to string of classes
function attachPrefixes(prefix: string, classes: string): string {
	const classArray = classes.split(' ');
	let prefixedString = '';
	classArray.forEach((className) => {
		prefixedString += ` ${prefix}:${className}`;
	});

	return prefixedString;
}

export class Style {
	rawStyles: TailwindStyles;
	classes: string;
	constructor(styles: TailwindStyles | string) {
		if (typeof styles === 'string') {
			styles = { base: styles };
		}
		this.rawStyles = styles; // the raw styles object
		this.classes = generateClasses(styles);
	}

	toString(): string {
		//so we don't have to do someStyle.classes but can just reference the object itself
		return this.classes;
	}

	getStyle(name: string): string {
		// incase you just want a specific type (e.g. focus or before)
		return this.rawStyles[name];
	}

	setStyle(name: string, value: string): void {
		// setter, not sure why you would want to do this tho
		this.rawStyles[name] = value;
		this.classes = generateClasses(this.rawStyles);
	}
}
