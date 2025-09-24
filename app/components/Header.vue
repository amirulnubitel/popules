<template>
	<header class="bg-white fixed w-full dark:bg-gray-900 border-b dark:border-gray-600 z-50 top-0">
		<nav aria-label="Global" class="mx-auto flex items-center justify-between p-6 lg:px-8 lg:py-5">
			<div class="flex items-center gap-x-12 flex-1">
				<NuxtLink href="/">
					<span class="sr-only">Popules</span>
					<img src="/logo.png" alt="logo" class="h-10 w-auto" />
				</NuxtLink>
				<div class="hidden lg:flex flex-1">
					<div class="relative inline-flex items-center w-full max-w-sm focus-within:max-w-full transition-all duration-300 ease-in-out mr-3">
						<input type="text" placeholder="Search..." class="w-full rounded-full border-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 px-3 py-2 text-base gap-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 pe-11 transition-all duration-300" autocomplete="off" />
						<span class="absolute inset-y-0 end-0 flex items-center pe-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 text-gray-400 dark:text-gray-500 size-6" viewBox="0 0 24 24">
								<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
									<path d="m21 21l-4.34-4.34"></path>
									<circle cx="11" cy="11" r="8"></circle>
								</g>
							</svg>
						</span>
					</div>
				</div>
			</div>
			<div class="flex lg:hidden">
				<button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
					<span class="sr-only">Open main menu</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
						<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex gap-x-2">
				<button type="button" class="items-center rounded-full bg-pink-600 hover:bg-pink-700 text-white size-full px-6 py-2 flex">Post</button>
				<button type="button" class="items-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 size-full p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 text-gray-900 dark:text-gray-100 size-6" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.826A.913.913 0 1 0 12 5a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 12.913a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 19a.913.913 0 1 0 0-1.826A.913.913 0 0 0 12 19m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M5.912 19a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826"
						></path>
					</svg>
				</button>
				<button type="button" class="items-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 size-full p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 text-gray-900 dark:text-gray-100 size-6" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M14.235 19c.865 0 1.322 1.024.745 1.668A4 4 0 0 1 12 22a4 4 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171l.008.043a8.01 8.01 0 0 1 4.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 0 0 1.143 1.847l.167.117l.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063L5 13.924l.001-2.97A8 8 0 0 1 8.822 4.5l.248-.146l.01-.043a3 3 0 0 1 2.562-2.29l.182-.017z"
						></path>
					</svg>
				</button>
				<button type="button" class="items-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 size-full p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 text-gray-900 dark:text-gray-100 size-6" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M18 20a6 6 0 0 0-12 0"></path>
							<circle cx="12" cy="10" r="4"></circle>
							<circle cx="12" cy="12" r="10"></circle>
						</g>
					</svg>
				</button>
			</div>
		</nav>
	</header>
</template>

<script setup>
defineOptions({
	name: "Header",
});
</script>
