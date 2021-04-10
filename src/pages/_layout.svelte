<!-- routify:options preload="proximity" -->
<script>
  import { TabsTransition } from "@roxi/routify/decorators";
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
  <slot decorator={TabsTransition} />
  <Footer />
</main>
