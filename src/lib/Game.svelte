<script lang="ts">
    import { onMount } from "svelte";
    import { menuOpen, currentMenu } from "./menumanager.js";

	let isMenuOpen = false;
	let currentOpenMenu = "";
	export let canvas: HTMLCanvasElement;

	menuOpen.subscribe(value => isMenuOpen = value);
	currentMenu.subscribe(value => currentOpenMenu = value);

    export let startFunction: () => void;
    onMount(() => {
        startFunction();
    });
</script>

<div class="h-screen w-screen relative">
	<canvas id="game" bind:this={canvas}></canvas>
	{#if isMenuOpen}
		<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
			<slot></slot>
		</div>
	{/if}
</div>