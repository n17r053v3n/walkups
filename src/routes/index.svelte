<script>
	import Upload from '../components/Upload.svelte';
	import Players from '../components/Players.svelte';
	import ComingSoon from '../components/basic/ComingSoon.svelte';
    import MusicPlayer from '../components/MusicPlayer.svelte';
	export let cmsn = false;
	function handleCloseCMSN() {
		cmsn = false;
		console.log('closed');
	}
	function handleOpenCMSN() {
		cmsn = true;
		console.log('opened');
	}
</script>

{#if cmsn}
	<ComingSoon on:closeCMSN={handleCloseCMSN} />
{/if}
<main>
	<div class="top">
		<Players />
		<Upload on:openCMSN={handleOpenCMSN} />
	</div>
    <div class="bottom">
        <MusicPlayer/>
    </div>
</main>
