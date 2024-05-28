<template></template>
<script setup lang="ts">
import { useRouter } from 'vitepress'

import { createSideBar } from '../../utils/createSideBar'

const sideBar = createSideBar()
const firstItemLink = sideBar[0].items[0].link

const router = useRouter()
router.go(firstItemLink)
</script>
<style scoped></style>
