<template>
  <div class="ms-2 me-auto" style="text-align: left">
    <div v-show="mostrarTitulo">
      {{ posteo.title }}
      <br />
    </div>
    {{ posteo.body }}
  </div>
</template>

<script>
export default {
  name: "CardPosteo",
  props: {
    posteo: {
      type: Object,
    },
    mostrarTitulo: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
