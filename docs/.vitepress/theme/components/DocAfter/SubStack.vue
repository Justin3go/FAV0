<template>
	<div id="custom-substack-embed" align="center"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
	// @ts-ignore
	window.CustomSubstackWidget = {
		substackUrl: "fav0.substack.com",
		placeholder: "example@fav0.com",
		buttonText: "Subscribe",
		theme: "custom",
		colors: {
			primary: "var(--vp-c-brand-1)",
			input: "var(--vp-sidebar-bg-color)",
			email: "var(--vp-c-text)",
			text: "var(--vp-c-bg)",
		},
	};

	// Create a script element for the widget script
	const script = document.createElement("script");
	script.src = "https://substackapi.com/widget.js";
	script.async = true;

	// Append the script to the document body
	document.body.appendChild(script);
});
</script>

<style scoped>
/* Add any component-specific styles here */
#custom-substack-embed {
	width: 100%;
	padding: 60px;
}
</style>
