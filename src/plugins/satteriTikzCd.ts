import type { MdastPluginDefinition } from "satteri";

export function satteriTikzCdPlugin(): MdastPluginDefinition {
	return {
		name: "cactus-tikz-cd",

		code(node) {
			if (node.lang !== "tikzcd") return;

			node.lang = "tikz";
			node.meta = "tikzcd";
		},
	};
}
