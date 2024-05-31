// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from 'vitepress/theme-without-fonts' // https://vitepress.dev/zh/guide/extending-default-theme#using-different-fonts
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

import "./style.css";
import ImageViewer from "./components/ImageViewer.vue"
import Subscribe from "./components/Subscribe.vue";
import DocAfter from "./components/DocAfter/Index.vue";

export default {
	...Theme,
	Layout: () => {
		return h(Theme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			"doc-after": () => h(DocAfter),
			"doc-top": () => h(ImageViewer),
			"aside-top": () => h(Subscribe),
		});
	},
};

