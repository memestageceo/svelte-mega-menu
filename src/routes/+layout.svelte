<script>
	import { NavBar, NavCta } from '$lib/Nav';
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

	<NavCta>
		<li><a href="/">📞</a></li>
		<li><a href="/">📲</a></li>
		<li><a href="/">🦆</a></li>
	</NavCta>
</NavBar>

{@render children()}

<style></style>
