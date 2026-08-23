import { defineMdastPlugin } from "satteri";

export function satteriTikzCdPlugin() {
	return defineMdastPlugin({
		name: "tikz-cd",

		code(node, ctx) {
			if (node.lang !== "tikzcd") {
				return;
			}

			ctx.replaceNode(node, {
				type: "tikzcd",
				data: {
					hName: "script",
					hProperties: {
						type: "text/tikz",
						"data-tikzcd": "true",
					},
					hChildren: [
						{
							type: "text",
							value: node.value,
						},
					],
				},
				children: [],
			});
		},
	});
}
