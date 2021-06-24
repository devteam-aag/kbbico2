<template>
    <div class="p-grid p-fluid">
        <div class="p-col-12">
            <Dropdown 
                v-model="selectedYear" 
                :options="years" 
                optionLabel="displayName" 
                placeholder="Select a year" 
                class="p-inputtext-lg"
                @change="onYearChange($event)" 
            />
        </div>
        <div class="p-col-12">
            <Dropdown 
                v-model="selectedMake" 
                :options="makes" 
                :disabled="selectedYear == null"
                optionLabel="displayName" 
                placeholder="Select a make" 
                class="p-inputtext-lg"
                @change="onMakeChange($event)" 
                :filter="true"
            />
        </div>
        <div class="p-col-12">
            <Dropdown 
                v-model="selectedModel" 
                :options="models" 
                :disabled="selectedMake == null"
                optionLabel="displayName" 
                placeholder="Select a model" 
                class="p-inputtext-lg"
                @change="onModelChange($event)" 
                :filter="true"
            />
        </div>
        <div class="p-col-12">
            <Dropdown 
                v-model="selectedTrim" 
                :options="trims" 
                :disabled="selectedModel == null || selectedTrimIsDisabled"
                optionLabel="displayName" 
                placeholder="Select a trim" 
                class="p-inputtext-lg"
            />
        </div>
        <div class="p-col-12">
            <Button label="Next" class="p-button-lg" :disabled="isButtonDisabled()" @click="onNextClick()" />
        </div>
    </div>  
</template>

<script>
import UrlHelper from '../../utils/UrlHelper'
import axios from 'axios'
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

export default {
  components : {
      'Dropdown': Dropdown,
      'Button': Button
  },
  mounted() {
      axios
        .get(UrlHelper.YearsUrl())
        .then((data) => {
            if (data.data.data) {
                this.years = data.data.data
            }
        })
  },
  methods: {
      isButtonDisabled() {
          return this.selectedYear == null 
            || this.selectedMake == null 
            || this.selectedModel == null
            || this.selectedTrim == null
      },
      onYearChange(event) {
          if (this.selectedYear) {
              axios
                .get(UrlHelper.MakesUrl(this.selectedYear.yearId))
                .then((data) => {
                    if (data.data.data) {
                        this.makes = data.data.data
                    }
                })
          }
      },
      onMakeChange(event) {
            if (this.selectedMake && this.models.length == 0) {
              axios
                .get(UrlHelper.ModelsUrl(this.selectedYear.yearId, this.selectedMake.makeId))
                .then((data) => {
                    if (data.data.data) {
                        this.models = data.data.data
                    }
                })
            }
      },
      onModelChange(event) {
        if (this.selectedModel && this.trims.length == 0) {
           axios
            .get(UrlHelper.TrimsUrl(this.selectedYear.yearId, this.selectedMake.makeId, this.selectedModel.modelId))
            .then((data) => {
                if (data.data.data) {
                    this.trims = data.data.data
                    if (this.trims.length == 1) {
                        this.selectedTrim = this.trims[0]
                        this.selectedTrimIsDisabled = true
                    }
                }
            })
        }
      },
      onNextClick() {
          console.log(this.selectedTrim)
          this.$store.commit('changeYear', this.selectedYear)
          this.$store.commit('changeMake', this.selectedMake)
          this.$store.commit('changeModel', this.selectedModel)
          this.$store.commit('changeTrim', this.selectedTrim)
          alert('store updated')
      }
  },
  data() {
	return {
		selectedYear: null,
        selectedMake: null,
        selectedModel: null,
        selectedTrim: null,
        selectedTrimIsDisabled: false,

        years: [],
        makes: [],
        models: [],
        trims: []
    }
  }
}
</script>

<style>

</style>