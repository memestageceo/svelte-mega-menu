<script>
	import { NavBar, NavCta, NavPanel, NavTitle } from '$lib/Nav';
	import NavMenu from '$lib/Nav/NavMenu.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<!--  
	<Nav>
		{@render icon()}
		<NavPanel>
			
	</NavPanel>
	
	<NavCta>
		<NavCtaLink></NavCtaLink>
	</NavCta>
</Nav>
-->

<NavBar>
	{#snippet icon()}
		<a href="/">🍻</a>
	{/snippet}

	<NavMenu>
		{#each new Array(4) as _, index}
			<NavPanel link="/" label="link-{index}" {index}>
				{#each new Array(8) as _, i}
					<li>hello {index}-{i}</li>
				{/each}
			</NavPanel>
		{/each}
	</NavMenu>

	<NavCta>
		<li><a href="/">📞</a></li>
		<li><a href="/">📲</a></li>
		<li><a href="/">🦆</a></li>
	</NavCta>
</NavBar>

{@render children()}

<style></style>
