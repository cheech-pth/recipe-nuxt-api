<script setup>
  const { data } = await useFetch('/api/recipe', {
    transform: (_data) => _data.recipes, // Return the data.recipes.recipes. Handles that extra key layer.
  })
</script>

<template>
  <div class="CContainer">
    <singleRecipe :recipes="data" /> 
  </div>
</template>

<style scoped>

</style>
