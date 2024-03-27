export default defineCachedEventHandler(async () => {
    try {
        console.log("Requesting new recipes...")
        const response = await $fetch('https://api.spoonacular.com/recipes/random', {
            query: {
                limitLicense: true,
                number: 100,
                apiKey: useRuntimeConfig().spoonacular.apiKey
            }
        });
        return response // An array of 100 recipes from spoonacular api.
    } catch (error) {
        console.log(error)
    }
}, { // Cache the response to nitro layer with the following properties
    base: 'recipes',
    getKey: () => 'recipes',
    shouldBypassCache: () => false,
    // 1 day
    maxAge: 24 * 60 * 60 * 1000,
     // 7 days in milliseconds
     staleMaxAge: 7 * 24 * 60 * 60 * 1000,
})