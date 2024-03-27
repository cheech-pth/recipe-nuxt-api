<script setup>
  // Defining the props, passed in by /app.vue
  const { recipes } = defineProps({
    recipes: {
      type: Object,
      required: true,
    }
  })
  
  // console.log(toRaw(recipes))
  const n = useRandomInt()
  // console.log(n.value)
</script>

<template>
  <section>
    <img
      src="/images/image-omelette.jpeg"
      alt="Generic omelette"
    >
    <h1>{{ recipes[n].title }}</h1>
    <p>{{ recipes[n].summary }}</p>
    <ul class="CCrow">
      <!-- Generating a list of ingredients -->
      <li
        v-for="(ingred) in recipes[n].extendedIngredients"
        :key="ingred.id"
      >
        <!-- Print the name and quantity, and fix the shit grammar -->
        {{ ingred.originalName.charAt(0).toUpperCase() + ingred.originalName.slice(1) }} 
        <!-- Massive bullshit to format the whitespace in the (quantity) -->
        ({{ ingred.measures.metric.amount.toString().length > 3 ? ingred.measures.metric.amount.toFixed(2) : ingred.measures.metric.amount }}{{ ingred.measures.metric.unitShort ? ' ' + ingred.measures.metric.unitShort : '' }})
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 40px;
}
.active {
  padding: 50px;
  background: green;
}
.CCrow {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
}
.CCrow > li {
  padding: 5px;
  background: rgb(145, 145, 145);
  border-radius: 5px;
  color: white;
}
.CClabels {
  border-radius: 2px 5px;
  padding: 2px 5px;
  font-weight: bold;
  color: white;
}
</style>