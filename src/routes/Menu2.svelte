<script lang="ts">
	import { NavPanel } from '$lib/Nav';

	let { index }: { index: number } = $props();

	const menu = {
		title: 'Solutions',
		subMenu: [
			{
				title: 'By Stage',
				items: [
					{ title: 'Enterprises', url: '/solutions/enterprises' },
					{ title: 'Start-ups', url: '/solutions/startups' }
				]
			},
			{
				title: 'By Business Model',
				items: [
					{ title: 'E-commerce', url: '/solutions/ecommerce' },
					{ title: 'SaaS', url: '/solutions/saas' },
					{ title: 'Platforms', url: '/solutions/platforms' },
					{ title: 'Marketplaces', url: '/solutions/marketplaces' }
				]
			},
			{
				title: 'By Use Case',
				items: [
					{ title: 'Finance automation', url: '/solutions/finance-automation' },
					{ title: 'Embedded finance', url: '/solutions/embedded-finance' },
					{ title: 'Global businesses', url: '/solutions/global-businesses' },
					{ title: 'Crypto', url: '/solutions/crypto' },
					{ title: 'Creator economy', url: '/solutions/creator-economy' }
				]
			}
		]
	};
</script>

<NavPanel link="/" label={menu.title} {index}>
	<div class="flex max-w-xl flex-row flex-wrap gap-5">
		{#each menu.subMenu as { title, items }}
			<div class="text-slate-600">
				<p class="font-semibold text-slate-700">{title}</p>
				{#each items as { title, url }}
					<div class="flex flex-col">
						<a href={url}>
							{title}
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</NavPanel>
