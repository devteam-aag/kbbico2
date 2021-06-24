<template>
  <div class="p-inputgroup">
    <InputText 
        type="text" 
        class="p-inputtext-lg"  
        placeholder="Enter the 17-digit VIN" />
    <Button label="Go" class="p-button-lg" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
export default {
  components: {
    'InputText': InputText,
    'Button': Button
  },
  mounted() {

  }
}
</script>

<style>

</style>