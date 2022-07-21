<template>
  <div class="ms-2 me-auto" style="text-align: left">
    <div class="fw-bold">
      {{ usuario.name }}
      <router-link :to="`/posteosUsuario/${usuario.id}`" v-show="linkPosteo">
        <span
          class="bi bi-file-text"
          title="Posteos"
          @click="setUsuario(usuario.name)"
        >
        </span>
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
import { mapMutations } from "vuex";

export default {
  name: "CardUsuario",
  props: {
    usuario: {
      type: Object,
    },
    verDetalles: Boolean,
    linkPosteo: Boolean,
  },
  methods: {
    ...mapMutations(["setUsuario"]),
  },
};
</script>

<style lang="scss" scoped></style>
