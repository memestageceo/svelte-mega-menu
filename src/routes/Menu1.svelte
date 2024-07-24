<script lang="ts">
	import { NavPanel } from '$lib/Nav';

	let { index }: { index: number } = $props();

	const menu = {
		title: 'Products',
		subMenu: [
			{
				title: 'Global Payments',
				items: [
					{ title: 'Payments', description: 'Online payments', url: '/payments/online' },
					{ title: 'Payment Links', description: 'No-code payments', url: '/payment-links' },
					{ title: 'Checkout', description: 'Pre-built payment form', url: '/checkout' },
					{ title: 'Elements', description: 'Flexible UI components', url: '/elements' },
					{ title: 'Terminal', description: 'In-person payments', url: '/terminal' },
					{ title: 'Radar', description: 'Fraud prevention', url: '/radar' },
					{
						title: 'Authorization',
						description: 'Acceptance optimizations',
						url: '/authorization'
					}
				]
			},
			{
				title: 'Embedded Payments and Finance',
				items: [{ title: 'Connect', description: 'Payments for platforms', url: '/connect' }]
			},
			{
				title: 'Revenue and Finance Automation',
				items: [
					{ title: 'Billing', description: 'Subscription management', url: '/billing' },
					{
						title: 'Revenue Recognition',
						description: 'Accounting automation',
						url: '/revenue-recognition'
					},
					{ title: 'Tax', description: 'Sales tax & VAT automation', url: '/tax' },
					{ title: 'Invoicing', description: 'Online invoices', url: '/invoicing' },
					{ title: 'Sigma', description: 'Custom reports', url: '/sigma' },
					{ title: 'Data Pipeline', description: 'Data warehouse sync', url: '/data-pipeline' }
				]
			},
			{
				title: 'More',
				items: [
					{
						title: 'Payment Methods',
						description: 'Access to 100+ globally',
						url: '/payment-methods'
					},
					{ title: 'Link', description: 'Accelerated checkout', url: '/link' },
					{
						title: 'Financial Connections',
						description: 'Linked financial account data',
						url: '/financial-connections'
					},
					{ title: 'Identity', description: 'Online identity verification', url: '/identity' },
					{ title: 'Atlas', description: 'Start-up incorporation', url: '/atlas' }
				]
			}
		]
	};
</script>

<NavPanel link="/" label={menu.title} {index}>
	<div class="grid max-w-xl grid-cols-2 gap-5">
		{#each menu.subMenu as { title, items }}
			<div class="text-slate-600">
				<p class="font-semibold text-slate-700">{title}</p>
				{#each items as { title, description, url }}
					<div class="flex flex-col">
						<a href={url} class="nav-link relative m-0 inline-flex flex-col">
							{title}
							<span class="nav-disc mb-1 text-xs">
								{description}
							</span>
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</NavPanel>

<!--  -->
<style>
	.nav-disc {
		opacity: 0;
		pointer-events: none;
		transform: translateY(-50%);
		transition: all 0.2s ease-in-out;
	}
	.nav-link:hover .nav-disc {
		opacity: 100%;
		transform: translateY(0);
	}
</style>
