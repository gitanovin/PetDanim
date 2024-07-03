import moment from 'jalali-moment';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('moment', moment)
})