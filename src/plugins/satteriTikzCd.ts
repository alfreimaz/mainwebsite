import type { HastPluginDefinition } from "satteri";

export function satteriTikzCdPlugin(): HastPluginDefinition {
	return {
		name: "cactus-tikz-cd",
		element: {
			filter: ["pre"],
			visit(node) {
				const code = node.children[0];

				if (
					code?.type !== "element" ||
					code.tagName !== "code"
				) {
					return;
				}

				const className = code.properties?.className;

				if (
					!Array.isArray(className) ||
					!className.includes("language-tikzcd")
				) {
					return;
				}

				const source = code.children
					.filter((child) => child.type === "text")
					.map((child) => child.value)
					.join("");

				return {
					type: "element",
					tagName: "script",
					properties: {
						type: "text/tikz",
						dataTikzcd: "true",
					},
					children: [
						{
							type: "text",
							value: source,
						},
					],
				};
			},
		},
	};
}
