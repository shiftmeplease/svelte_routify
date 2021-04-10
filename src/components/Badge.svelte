<script>
  export let type = "primary";
  export let rounded = false;

  const typoCheck = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  if (typoCheck.indexOf(type) < 0) {
    console.warn(`Unsupported type of Badge:'${type}', changed to 'primary'`);
    type = "primary";
  }
  let customClass = `bg-${type}`;

  switch (type) {
    case "warning":
    case "info":
    case "light":
      customClass += " text-dark";
  }

  if (rounded) {
    customClass += " rounded-pill";
  }
</script>

<h2 class="badge {customClass}"><slot /></h2>
