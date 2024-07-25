<script>
	import { NavBar, NavCta, NavPanel, NavTitle, navData } from '$lib/Nav';
	import NavMenu from '$lib/Nav/NavMenu.svelte';

	import '../app.css';
	import Menu1 from './Menu1.svelte';
	import Menu2 from './Menu2.svelte';

	let { children } = $props();
</script>

<NavBar>
	{#snippet icon()}
		<a href="/">🍻</a>
	{/snippet}

	<NavMenu>
		<Menu1 index={0} />
		<Menu2 index={1} />
		<Menu1 index={2} />
	</NavMenu>

	<NavCta>
		<li><a href="/">📞</a></li>
		<li><a href="/">📲</a></li>
		<li><a href="/">🦆</a></li>
	</NavCta>
</NavBar>

{@render children()}

<style></style>
