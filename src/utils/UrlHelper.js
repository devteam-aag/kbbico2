import { kbbApiKey } from '../constants/configurations'
import {     
    kbbApiBaseUrlYears, 
    kbbApiBaseUrlMakes, 
    kbbApiBaseUrlModels, 
    kbbApiBaseUrlTrims, 
    kbbApiBaseUrlVin,
    kbbApiBaseUrlTransmissions,
    kbbApiBaseUrlColors,
    kbbApiBaseUrlEngines,
    kbbApiBaseUrlDrivetrains,
    kbbApiBaseUrlOptions } from '../constants/urls'

class UrlHelper
{
    constructor() {
        this.apiKey = kbbApiKey
        this.baseUrlYears = kbbApiBaseUrlYears
        this.baseUrlMakes = kbbApiBaseUrlMakes
        this.baseUrlModels = kbbApiBaseUrlModels
        this.baseUrlTrims = kbbApiBaseUrlTrims
        this.baseUrlVin = kbbApiBaseUrlVin
        this.baseUrlTransmissions = kbbApiBaseUrlTransmissions
        this.baseUrlColors = kbbApiBaseUrlColors
        this.baseUrlEngines = kbbApiBaseUrlEngines
        this.baseUrlDrivetrains= kbbApiBaseUrlDrivetrains
        this.baseUrlOptions = kbbApiBaseUrlOptions
    }

    YearsUrl() {
        return this.baseUrlYears + '?api_key=' + this.apiKey
    }

    MakesUrl(yearId) {
        return this.baseUrlMakes + '?api_key=' + this.apiKey + '&yearId=' + yearId
    }

    ModelsUrl(yearId, makeId) {
        return this.baseUrlModels + '?api_key=' + this.apiKey + '&yearId=' + yearId + '&makeId=' + makeId
    }

    TrimsUrl(yearId, makeId, modelId) {
        return this.baseUrlTrims + '?api_key=' + this.apiKey + '&yearId=' + yearId + '&makeId=' + makeId + '&modelId=' + modelId
    }

    VinUrl(vinNumber) {
        return this.baseUrlVin  + '/' + vinNumber + '?api_key=' + this.apiKey
    }

    TransmissionsUrl(trimId) {
        return this.baseUrlTransmissions + '?api_key=' + this.apiKey + '&trimId=' + trimId
    }

    ColorsUrl(trimId) {
        return this.baseUrlColors + '?api_key=' + this.apiKey + '&trimId=' + trimId
    }

    EnginesUrl(trimId) {
        return this.baseUrlEngines + '?api_key=' + this.apiKey + '&trimId=' + trimId
    }

    DrivetrainsUrl(trimId) {
        return this.baseUrlDrivetrains + '?api_key=' + this.apiKey + '&trimId=' + trimId
    }

    OptionsUrl(trimId) {
        return this.baseUrlOptions + '?api_key=' + this.apiKey + '&trimId=' + trimId
    }
}

export default new UrlHelper()