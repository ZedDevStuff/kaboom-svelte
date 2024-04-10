import { Store } from './stores.js';
import { k } from './game.js';

export const menuOpen = new Store(false);
export const currentMenu = new Store("none");

export let menuHierachy: Map<string, {previous: string | null, next: string[]}> = new Map([
    ["none", {
        previous: null, 
        next: ["main", "settings"]
    }],
]);

export function closeMenu() {
    menuOpen.set(false);
    k.canvas.focus();
}

export function navigateTo(menu: string) {
    if (menuHierachy.has(menu)) {
        currentMenu.set(menu);
        if(menu === "none") closeMenu();
        else menuOpen.set(true);
    }
}
export function navigateForward() {
    let target = menuHierachy.get(currentMenu.value)?.next[0];
    if(target !== undefined) {
        currentMenu.set(target);
        if(target === "none") closeMenu();
        else menuOpen.set(true);
    } else {
        console.error("No menu to navigate to");
    }
}
export function navigateBack() {
    let target = menuHierachy.get(currentMenu.value)?.previous;
    if(target !== null) {
        currentMenu.set(target!);
        if(target === "none") closeMenu();
        else menuOpen.set(true);
    } else {
        console.error("No menu to navigate to");
    }
}
