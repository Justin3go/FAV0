// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import Comment from "./components/Comment.vue";

export default {
	...Theme,
	Layout: () => {
		return h(Theme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			"doc-after": () => h(Comment),
		});
	},
	// @ts-ignore
	enhanceApp({ app }) {
		app.component("Comment", Comment);
	},
};

