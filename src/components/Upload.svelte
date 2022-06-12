
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>
<div class="buttons">
	<div class="upload upload-songs" on:click={() => dispatch('openCMSN')}>
		<p>Upload songs directory</p>
	</div>
	<div class="upload upload-lineup" on:click={() => dispatch('openCMSN')}>
		<p>Upload lineup</p>
	</div>
</div>
