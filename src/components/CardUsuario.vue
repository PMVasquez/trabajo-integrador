<template>
  <div class="sm-2 me-auto" style="text-align: left">
    <div class="fw-bold">
      {{ usuario.name }}
      <router-link :to="`/posteosUsuario/${usuario.id}`" v-show="linkPosteo">
        <span class="badge bg-primary rounded-pill">posteos</span>
      </router-link>
    </div>
    <div v-show="verDetalles">
      E-mail:{{ usuario.email }}
      <br />
      Calle: {{ usuario.address.street }} - Ciudad: {{ usuario.address.city }}
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "CardUsuario",
  props: {
    usuario: {
      type: Object,
    },
    verDetalles: Boolean,
    linkPosteo: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
