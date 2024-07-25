<script lang="ts">
	let {
		size = '24',
		currentColor = '#fffff',
		class: className = '',
		strokeWidth = 2,
		fill = 'none'
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	{fill}
	stroke={currentColor}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={`lucide lucide-triangle ${className}`}
	><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg
>
