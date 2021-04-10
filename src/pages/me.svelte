<script>
  import { dataStore, decipher } from "../cipher/store";

  //TODO add pass via # request

  let store;
  const unsub = dataStore.subscribe((storeVal) => {
    store = storeVal;
  });
  let passValue;
  $: decipher(passValue);
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
</svelte:head>

<div>
  <h1 class="text-center mt-2 mb-0">Личное</h1>
  <div class="d-flex p-4 flex-column align-items-center justify-content-center">
    <div class="input-group mb-3 w-75">
      <span class="input-group-text" id="inputText">Пароль</span>
      <input
        type="text"
        class="form-control"
        aria-describedby="inputText"
        bind:value={passValue}
      />
    </div>

    <div id="message">
      {#if store.ok}
        {@html store.message}
      {:else}
        Введите правильный пароль
      {/if}
    </div>

    <div
      id="carouselControls"
      class="carousel slide carouselClass"
      data-bs-ride="carousel"
    >
      <div id="carouselInner" class="carousel-inner">
        {#if store.ok}
          {#each store.srcs as src, index}
            <div class="carousel-item {index === 0 ? 'active' : ''}">
              <img {src} class="d-block w-100 " alt={"picture" + index} />
            </div>
          {/each}
        {/if}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Назад</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Дальше</span>
      </button>
    </div>
  </div>
</div>
