<script>
	import { bind, prevent_default } from 'svelte/internal';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	import { slide } from 'svelte/transition';

</script>

<div class="coming-soon" in:slide out:slide on:scroll={() => prevent_default}>
	<p>This content is under construction and coming soon!</p>
	<button class="close" on:click={() => dispatch('closeCMSN')}>Close</button>
</div>