<template>
	<div :class="skeletonClasses">
		<div class="shimmer absolute inset-0 bg-gradient-to-l from-white/20 to-white/10 dark:from-slate-400/20 dark:to-slate-400/10" />
		<slot />
	</div>
</template>

<script setup>
defineOptions({
	name: "Skeleton",
});

const props = defineProps({
	type: {
		type: String,
		default: "rectangle",
		validator: (value) => ["rectangle", "circle"].includes(value),
	},
	bgClass: {
		type: String,
		default: "bg-gray-200 dark:bg-slate-300/30",
	},
	cssClass: {
		type: String,
		default: "",
	},
});

const LOADER_CSS_CLASSES = {
	rectangle: "rounded-sm",
	circle: "rounded-full",
};

const skeletonClasses = computed(() => [props.bgClass, props.cssClass || LOADER_CSS_CLASSES[props.type], "relative overflow-hidden z-50"]);
</script>

<style scoped>
.shimmer {
	transform: translateX(-100%);
	animation: shimmer 1.4s ease-in-out infinite;
}

@keyframes shimmer {
	to {
		transform: translateX(100%);
	}
}
</style>
