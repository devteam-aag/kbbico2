import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      vehicle: {

          possibilities: [],
          possibleYears: [],
          possibleMakes: [],
          possibleModels: [],
          possibleTrims: [],
          possibleEngins: [],
          possibleDrivetrains: [],
          possibleTransmisions: [],
          possibleColors: [],
          possibleOptions: [],

          vinNumber: null,
          licencePlateNumber: null,
          year: null,
          make: null,
          model: null,
          trim: null,
          engine: null,
          drivetrain: null,
          transmission: null,
          mileage: null

      }
    },
    mutations: {
      changeVinNumber(state, vinNumber) {
        state.vehicle.vinNumber = vinNumber
      },
      changeYear(state, year) {
        state.vehicle.year = year
      },
      changeMake(state, make) {
        state.vehicle.make = make
      },
      changeModel(state, model) {
        state.vehicle.model = model
      },
      changeTrim(state, trim) {
        state.vehicle.trim = trim
      }
    },
    getters: {
      vinNumber: state => state.vehicle.vinNumber,
      year: state => state.vehicle.year,
      make: state => state.vehicle.make,
      model: state => state.vehicle.model,
      trim: state => state.vehicle.trim
    }
  })