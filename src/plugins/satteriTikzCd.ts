import type { Code, Html } from "mdast";
import type { MdastPluginDefinition } from "satteri";

export function satteriTikzCdPlugin(): MdastPluginDefinition {
	return {
		name: "cactus-tikz-cd",

		code(node: Readonly<Code>): Html | undefined {
			if (node.lang !== "tikzcd") return;

			return {
				type: "html",
				value: `<script type="text/tikz" data-tikzcd>${node.value}</script>`,
			};
		},
	};
}
