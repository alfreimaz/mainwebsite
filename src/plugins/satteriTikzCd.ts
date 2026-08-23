import type { Code, Html } from "mdast";
import type { MdastPluginDefinition } from "satteri";

export function satteriTikzCdPlugin(): MdastPluginDefinition {
	return {
		name: "cactus-tikz-cd",

		code(node: Readonly<Code>): Html | undefined {
			if (node.lang !== "tikzcd") return;

			return {
				type: "html",
				value: `<div class="tikz-diagram"><script type="text/tikz" data-tikzcd data-tex-packages='{"tikz-cd":""}'>${node.value}</script></div>`,
			};
		},
	};
}
