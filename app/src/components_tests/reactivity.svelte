<script>
  let counter = 0;
  $: rePaddedCounter = counter.toString().padStart("4", "*");
  let paddedCounter = counter.toString().padStart("4", "*");
  function more() {
    counter++;
  }
  function less() {
    counter--;
  }
</script>

<div class="text-center p-5">
  <button class="btn btn-secondary" on:click={more}> More </button>
  <button class="btn btn-secondary" on:click={less}> Less </button>
  <div class="pt-2 text-left">
    <p class="mb-1 fw-bold">Counter: {counter}</p>
    <p>
      Not reactive padder counter: <span class="fw-bold">{paddedCounter}</span>
    </p>
    <p>Reactive: <span class="fw-bold">{rePaddedCounter}</span></p>
  </div>
</div>

<style>
  p {
    margin-bottom: 0;
  }
</style>
