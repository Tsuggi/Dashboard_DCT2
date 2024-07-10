<template>
    <div class="container">
        <canvas ref="chartTonnage"></canvas>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps({
  dataTonnage: Object
})

const chartTonnage = ref(null)

onMounted(() => {
    const ctx = chartTonnage.value.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: props.dataTonnage,
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Tonnage 2023'
                }
            },
            transitions: {
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                        y: {
                            to: 0
                        }
                    }
                }
            }
        }
    });
});
</script>

<style scoped>
.container {
    width: 100%;
    background-color: white;
}
</style>