import kaboom from "kaboom";
import { type KaboomCtx, type KaboomOpt } from "kaboom";

export let k: KaboomCtx;

export function startGame(canvas: HTMLCanvasElement, options?: KaboomOpt): KaboomCtx {
    window.addEventListener("keydown", (e) => {
        if(e.key === "F1") {
            e.preventDefault();
        }
    });
    k = kaboom(options ?? {
        global: false,
        canvas: canvas,
        width: 1920,
        height: 1080,
        letterbox: true,
    });
    k.scene("menus", () => {});
    k.go("menus");
    return k
}