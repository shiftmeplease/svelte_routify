<script>
  import { isActive, url } from "@roxi/routify";

  let navToggle = false;
  function toggleMenu() {
    navToggle = !navToggle;
  }
  export let menuButtons;

  if (!menuButtons || menuButtons.length <= 0) {
    throw new Error("Menu buttons are undefined");
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<div class="topnav" class:responsive={navToggle}>
  {#each menuButtons as [path, name]}
    <a href={$url(path)} class:active={$isActive(path)}>
      {name}
    </a>
  {/each}

  <!-- svelte-ignore a11y-missing-attribute  -->
  <a class="icon" on:click={toggleMenu}>
    <i class="fa fa-bars" />
  </a>
</div>

<style>
  .topnav {
    overflow: hidden;
    background-color: #333;
  }

  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: #4caf50;
    color: white;
  }

  .topnav .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
</style>
