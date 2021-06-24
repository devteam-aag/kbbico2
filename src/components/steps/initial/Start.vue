<template>
  <div>
      <div class="p-grid">
	      <div class="p-col-12 p-sm-12 p-lg-5  p-xl-offset-1">
		      <div class="box">1</div>
	      </div>
        <div class="p-col-12 p-sm-12 p-xl-5">
		      

          <Card>
              <template #title>
                  <div class="p-text-center">An Official Offer to Buy Your Car</div>
              </template>
              <template #content>
                <TabView :activeIndex="1" class="">
                  <TabPanel header="License Plate">
                    <div class="p-grid">
                      <div class="p-col-10 p-offset-1">
                        <LicensePlateInput />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="Vin Number">
                    <div class="p-grid">
                      <div class="p-col-10 p-offset-1">
                        <VinInput />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="Make/Model">
                    <div class="p-grid">
                      <div class="p-col-10 p-offset-1">
                        <YearMakeModelInputs />
                      </div>
                    </div>
                  </TabPanel>
                </TabView>
              </template>
          </Card>

	      </div>  
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import LicensePlateInput from '../../form/LicensePlateInput'
import VinInput from '../../form/VinInput'
import YearMakeModelInputs from '../../form/YearMakeModelInputs'

export default {
  components: {
    'Card': Card,
    'Button': Button,
    'TabView': TabView,
    'TabPanel': TabPanel,
    'LicensePlateInput': LicensePlateInput,
    'VinInput': VinInput,
    'YearMakeModelInputs': YearMakeModelInputs
  },
  mounted() {

  }
}
</script>

<style>

</style>