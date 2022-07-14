/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare namespace CSS {
	type syntax = `<${
		// Any valid length value
		| 'length'
			// Any valid number value
			| 'number'
			// Any valid percentage value
			| 'percentage'
			// Any valid length or percentage value, or any calc expression combining length and percentage components
			| 'length-percentage'
			// Any valid color value
			| 'color'
			// Any Any valid image value
			| 'image'
			// Any valid url value
			| 'url'
			// Any valid integer value
			| 'integer'
			// Any valid angle value
			| 'angle'
			// Any valid time value
			| 'time'
			// Any valid resolution value
			| 'resolution'
			// Any valid transform function value
			| 'transform-list'
			// Any valid ident value;
			| 'custom-ident'
	}>`;

	interface PropertyDefinition {
		name: string;
		syntax?: syntax;
		inherits: boolean;
		initialValue?: string | number;
	}

	namespace paintWorklet {
		export function addModule(url: URL): void;
	}

	function registerProperty(propertyDefinition: PropertyDefinition): undefined;
}
