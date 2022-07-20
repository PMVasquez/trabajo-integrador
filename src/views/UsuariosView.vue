<template>
  <div class="container">
    <div class="row">
      <ol class="list-group list-group-numbered">
        <div class="col-sm-4" v-for="(usuario, index) in usuarios" :key="index">
          <li class="list-group-item">
            <CardUsuarioVue
              :usuario="usuario"
              :verDetalles="true"
              :linkPosteo="true"
            />
          </li>
        </div>
      </ol>
    </div>
  </div>
</template>

<script>
import CardUsuarioVue from "@/components/CardUsuario.vue";

export default {
  name: "UsuariosView",
  components: { CardUsuarioVue },
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
