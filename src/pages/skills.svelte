<script>
  import Badge from "../components/Badge.svelte";
</script>

<div>
  <h1 class="text-center mt-2 mb-0">Что же я умею?</h1>
  <div class="text-center py-2 container fs-2">
    <div class="col-sm">
      <Badge type="success">Node.js</Badge>
      <Badge type="success">Понимаю Javascript синтаксис</Badge>
      <Badge type="success">Реверс-инжиниринг JS кода</Badge>
    </div>
    <div class="col-sm">
      <Badge type="secondary">CSS (33%)</Badge>
      <Badge type="secondary">Express (33%)</Badge>
      <Badge type="secondary">Typescript (15%)</Badge>
    </div>
    <div class="col-sm">
      <Badge type="secondary">Bootstrap 5.0 (5%)</Badge>
      <Badge type="secondary">HTML</Badge>
      <Badge type="secondary">HTTP</Badge>
    </div>
  </div>
</div>
