<!-- routify:options preload="proximity" -->
<script>
  import Menu from "../components/Menu.svelte";
  import Footer from "../components/Footer.svelte";
  const menu = [
    ["./index", "Home"],
    ["./me", "Me"],
    ["./skills", "Skills"],
    ["./who", "Who"],
    ["./tests", "Svelte Tests"],
  ];
</script>

<main>
  <Menu menuButtons={menu} />
  <slot />
  <Footer />
</main>
