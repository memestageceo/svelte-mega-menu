<script>
	import { Accordion, AccordionItem } from '$lib/Accordion';
	import { faqs } from '$lib/faqs.js';
	import { Nav } from '$lib/Nav';
</script>

<div class="container mx-auto mt-10 max-w-3xl">
	<Accordion>
		{#each faqs as { question, answer }, index}
			<AccordionItem {index} open={index === 0}>
				{#snippet summary({ defaultStyles })}
					<h3 class={defaultStyles}>{question}</h3>
				{/snippet}
				{#snippet description()}
					<p>{answer}</p>
				{/snippet}
			</AccordionItem>
		{/each}
	</Accordion>
</div>
