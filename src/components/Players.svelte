<script>
	// @ts-nocheck

	import { lineup } from '../data/lineup.js';
</script>

<div class="players">
	{#each lineup as player, index}
		<div class="player-wrapper" player={index}>
			<div class="player-name">
				<p>{player[0]}</p>
			</div>
			<!-- <div class="player-music" on:click={() => play("hello")} player-music="{index}"> -->
			<div class="player-music" onclick="play(index)" player-music={index}>
				<audio music={index}>
					<source src="/songs/{player[1]}" />
				</audio>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-play-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-pause-fill player-pause"
					viewBox="0 0 16 16"
				>
					<path
						d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
					/>
				</svg>
			</div>
		</div>
	{/each}
</div>
