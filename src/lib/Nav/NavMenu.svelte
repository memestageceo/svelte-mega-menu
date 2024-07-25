<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { getNavContext, setNavContext } from './NavState.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
	/*
	function createState<T>(val: T) {
		let value = $state(val);

		return {
			get value() {
				return value;
			},
			set value(val) {
				value = val;
			}
		};
	}

	let hovering = createState<number | null>(null);
	let popoverLeft = createState<number>(0);
	let popoverHeight = createState<number>(0);
	let refs = createState<HTMLElement[]>([]);

	setContext('hovering', hovering);
	setContext('popoverLeft', popoverLeft);
	setContext('popoverHeight', popoverHeight);
	setContext('refs', refs);
	*/

	setNavContext<number | null>('hovering', null);
	setNavContext<number>('popoverLeft', 0);
	setNavContext<number>('popoverHeight', 0);
	setNavContext<HTMLElement[]>('refs', []);

	let hovering = getNavContext<{ value: number | null }>('hovering');

	function closePanels() {
		hovering.value = null;
	}
</script>

<nav
	class="relative flex h-full flex-grow flex-row flex-nowrap items-center gap-5"
	onmouseleave={closePanels}
>
	{@render children()}
</nav>
