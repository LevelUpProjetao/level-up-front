<template>
  <div
    style="background:white;"
    class="pt-2 pb-10 px-9 "
  >
    <h3 class="mb-2">
      Skills
    </h3>
    <p>Atividade Colaboradores</p>
    <v-row
      no-gutters
      justify="space-between"
      justify-md="center"
    >
      <v-col
        cols="auto"
        md="6"
      >
        <pie-chart
          :data="chartData"
          style="width:100%"
        />
        <v-row class="mt-2">
          <p class="mb-0">
            {{ chartData.datasets[0].data[0] + " " + chartData.labels[0] }}
          </p>
          <p>
            {{ chartData.datasets[0].data[1] + " " + chartData.labels[1] }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PieChart from "../../chart/PieChart";
export default {
  components:{
    PieChart
  },

  data: () => ({
    value:12.5,
    chartData: {
        labels: ["Finalizadas", "Em proguesso"],
        datasets: [
            {
            label: "Data One",
            backgroundColor: ["#F2BE37", "#2BD451"],
            data: [2, 13]
            }
        ]
    }
  }),
  methods:{
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>

</style>
