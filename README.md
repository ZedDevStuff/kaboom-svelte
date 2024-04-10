# kaboom-svelte

This is a small library made to make it easier to use the [kaboom.js](https://kaboomjs.com/) game engine with svelte. The most notable feature is the Menu component and the menu system, which allows you to overlay DOM elements on top of the game canvas while keeping the same size as the game canvas, letterbox included, after setup.

## Installation

Run `npm install kaboom-svelte` to install the library.

## Usage

Wrap your interface in a Menu

```svelte
<!-- MyMenu -->
<script>
    import { Menu, closeMenu } from 'kaboom-svelte';
</script>

<Menu backingResolution={{ width: 1920, height: 1080 }} scale={4}>
    <h1>Hello, world!</h1>
    <button on:clic={closeMenu}>Hi!</button>
</Menu>
```

Setup the manager and start the engine

```svelte
<script lang="ts">
    import { onMount } from "svelte";
    import { MyMenu } from './MyMenu.svelte';
    import { startGame, menuOpen, currentMenu, menuHierarchy } from 'kaboom-svelte';

    let isMenuOpen = false;
    let currentOpenMenu = "";
    export let canvas: HTMLCanvasElement;

    menuOpen.subscribe(value => isMenuOpen = value);
    currentMenu.subscribe(value => currentOpenMenu = value);

    onMount(() => {
        menuHierarchy.set("main", { previous: null, next: []});
        // startGame returns a KaboomCtx and has an optional KaboomOpt parameter. Defaults are
        // global: false,
        // canvas: canvas,
        // width: 1920,
        // height: 1080,
        // letterbox: true 
        startGame(canvas);
    });
</script>

<div class="h-screen w-screen relative">
    <canvas id="game" bind:this={canvas}></canvas>
    {#if isMenuOpen}
        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {#if currentOpenMenu === "main"}
            <MyMenu />
        {/if}
        </div>
    {/if}
</div>
```

