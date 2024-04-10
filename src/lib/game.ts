import kaboom from "kaboom";
import { type KaboomCtx } from "kaboom";

export let k: KaboomCtx;

export const defaultOptions = {
    global: false,
    width: 1920,
    height: 1080,
    letterbox: true,
}
export function setupKaboom(k: KaboomCtx) {
    window.addEventListener("keydown", (e) => {
        if(e.key === "F1") {
            e.preventDefault();
        }
    });
    k.scene("menus", () => {});
    k.go("menus");
}