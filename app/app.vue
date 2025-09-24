<template>
	<NuxtLoadingIndicator :duration="10000" :height="4" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
const { hook } = useNuxtApp();
const loading = useState("loading", () => true);

hook("page:start", () => {
	loading.value = true;
});
hook("page:finish", () => {
	loading.value = false;
});
</script>
