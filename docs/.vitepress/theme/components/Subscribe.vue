<template>
	<t-button v-if="isEN" theme="default" variant="dashed" style="margin-bottom: 10px" @click="handleClick">
		<template #icon><NotificationIcon /></template>
		Subscribe
	</t-button>
	<t-popup v-else placement="right" show-arrow destroy-on-close>
		<template #content>
			<div class="img-container">
				<img src="https://oss.justin3go.com/Justin3goWXGZH_QR.png" alt="" />
			</div>
		</template>
		<t-button theme="default" variant="dashed" style="margin-bottom: 10px">
			<template #icon><NotificationIcon /></template>
			订阅本周刊（公众号）
		</t-button>
	</t-popup>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { NotificationIcon } from "tdesign-icons-vue-next";

const route = useRoute();
const isEN = computed(() => route.path.startsWith("/en"));

function handleClick() {
	document.getElementById('custom-substack-embed')!.scrollIntoView({
		block: 'center',
    behavior: 'smooth'
});
}
</script>
<style scoped>
.img-container {
	height: 105px;
	width: 100px;
}

img {
	height: 100px;
	border-radius: 5px;
	margin-top: 5px;
}
</style>
