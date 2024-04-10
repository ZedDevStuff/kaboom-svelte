import Menu from "./Menu.svelte";
import Game from "./Game.svelte";
import { startGame, k } from "./game.js";
import { menuHierachy, navigateBack, navigateForward, navigateTo, menuOpen, closeMenu, currentMenu } from "./menumanager.js";
import { Store } from "./stores.js";

export { Menu, startGame, k, menuHierachy, navigateBack, navigateForward, navigateTo, menuOpen, closeMenu, currentMenu, Store, Game };