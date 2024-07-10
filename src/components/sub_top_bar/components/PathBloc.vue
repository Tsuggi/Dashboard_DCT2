<template>
    <div class="bloc-path">
        <span v-for="(label, index) in breadcrumb[0]" >
            {{ label }}
            <i v-if="!isLast(index)" class="pi pi-chevron-right"></i>
        </span>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {ref, computed } from 'vue'

const route = useRoute()

const breadcrumb = computed(()=>{
    const x = route.path.split('/').slice(1)
    return [x, x.length]
})

const [pathArray, length] = breadcrumb.value;


// const isLast = (index) => index === breadcrumb.length - 1 ? true : false;
const isLast = (index) => {
    if (index == 0) {
        return true
    }
    else if (index === length) {
        console.log('true')
        return true
    }
    else {
        console.log(`index : ${index}`)
        console.log(`bc : ${length}`)

        console.log('faux')
        return false
    }

}


console.log(isLast)

</script>

<style scoped>
.bloc-path {
    width: 100%;
    border: 0.5px solid var(--bleu-pastel);
    border-left-width: 0px;
    color: grey;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 0.5rem;
}
</style>

