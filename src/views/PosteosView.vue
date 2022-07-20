<template>
  <div class="container">
    <div class="row">
      <ol class="list-group list-group-numbered">
        <div
          class="col-sm-12"
          v-for="(usuario, index) in usuarios"
          :key="index"
        >
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <CardUsuarioVue
              :usuario="usuario"
              :verDetalles="false"
              :linkPosteo="false"
            />
          </li>
          <PosteosUsuarioVue :userId="usuario.id" />
          <!--<router-link :to="`/posteosUsuario/${usuario.id}`">
            posteos
          </router-link>-->
        </div>
      </ol>
    </div>
  </div>
</template>

<script>
import CardUsuarioVue from "@/components/CardUsuario.vue";
import PosteosUsuarioVue from "./PosteosUsuario.vue";

export default {
  name: "UsuariosView",
  components: { CardUsuarioVue, PosteosUsuarioVue },
  data() {
    return {
      usuarios: [],
    };
  },
  async created() {
    /*const respuesta = await this.$http.get(
        "https://jsonplaceholder.typicode.com/users"
      );*/
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.usuarios = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss" scoped></style>
