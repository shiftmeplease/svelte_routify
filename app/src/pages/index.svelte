<!-- routify:options index=1 -->

<script>
  import { metatags } from "@roxi/routify";
  import Badge from "../components/Badge.svelte";
  metatags.title = "shiftmeplease";
  metatags.description = "Trying myself in svelte + routify";
</script>

<h1 class="text-center mt-2 mb-0">О сайте</h1>
<div class="px-4 pt-2">
  <h4 class="text-center">
    Этот сайт делается с целью научиться пользоваться CSS, Bootstrap и
    браузерный JS. Своего рода визитка.
  </h4>
  <p class="text-center mb-0">Сделано при помощи:</p>
  <div class="text-center">
    <Badge type="success">Svelte + Routify</Badge>
    <Badge type="success">Bootstrap 5.0</Badge>
    <Badge type="success">Vercel</Badge>
  </div>
</div>
