/// <reference types="vite/client" />
declare namespace CSS {
	type syntax = `<${string}>`;
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
