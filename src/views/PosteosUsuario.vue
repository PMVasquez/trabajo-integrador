<template>
  <div class="container">
    <div class="row">
      <ol class="list-group list-group-numbered">
        <div class="col-sm-12" v-for="(posteo, index) in posteos" :key="index">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto" style="text-align: left">
              <div class="text-uppercase" style="text-align: left">
                {{ posteo.title }}
                <span
                  class="badge bg-primary rounded-pill"
                  @click="mostrarOcultarPosteo(posteo.id)"
                >
                  Ver
                </span>
              </div>
              <span v-if="verPosteo & (idSel == posteo.id)">
                <CardPosteo :posteo="posteo" :mostrarTitulo="false" />
              </span>
            </div>
          </li>
        </div>
      </ol>
    </div>
  </div>
</template>

<script>
import CardPosteo from "@/components/CardPosteo.vue";
export default {
  name: "PosteosUsuario",
  components: { CardPosteo },
  props: ["userId"],
  data() {
    return {
      posteos: [],
      verPosteo: false,
      idSel: 0,
    };
  },
  async created() {
    this.$http
      .get(
        "https://jsonplaceholder.typicode.com/users/" +
          `${this.userId}` +
          "/posts"
      )
      .then((response) => {
        this.posteos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    mostrarOcultarPosteo(idPosteo) {
      if (idPosteo != this.idSel) {
        this.verPosteo = true;
        this.idSel = idPosteo;
      } else {
        if (this.verPosteo) {
          this.verPosteo = false;
          this.idSel = 0;
        } else {
          this.verPosteo = true;
          this.idSel = idPosteo;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
