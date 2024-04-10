<script lang="ts">
    import { onMount } from "svelte";

    let div: HTMLDivElement;

    export let ratio = 16/9;
    export let backingResolution = { width: 1920, height: 1080 };
    export let scale: number = 1;

    backingResolution.width *= 1 / scale;
    backingResolution.width = Math.floor(backingResolution.width);
    backingResolution.height *= 1 / scale;
    backingResolution.height = Math.floor(backingResolution.height);

    onMount(() => {
        div.style.width = backingResolution.width + "px";
        div.style.height = backingResolution.height + "px";
        window.addEventListener("resize", (e) => {
            handleResize()
        });
        handleResize();
    });
    function handleResize() {
        let computedScale = computeScale();
        div.style.transform = `scale(${computedScale})`;
    }
    function shouldBeWidthOrHeight(size: {width: number, height: number}, aspect: number): "width" | "height" {
        let width = size.width;
        let height = size.height;
        let shouldBe = width / aspect;
        if(shouldBe > height) {
            return "height";
        } else {
            return "width";
        }
    }
    function computeScale() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let computedScale = Math.min((width / backingResolution.width), height / backingResolution.height);
        return computedScale;
    }
</script>

<div style="aspect-ratio: {ratio};" bind:this={div}>
    <slot />
</div>