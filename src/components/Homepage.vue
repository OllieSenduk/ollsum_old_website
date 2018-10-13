<template lang="html">
  <section>
      <appServiceQuote></appServiceQuote>
      <appServices></appServices>
      <appTimeline></appTimeline>
      <appTestimonialHeader></appTestimonialHeader>
      <appTestimonials></appTestimonials>
      <appContact></appContact>
    </section>
</template>

<script>
import ServiceQuote from './ServiceQuote'
import Header from './Header'
import Services from './Services'
import Timeline from './Timeline'
import Testimonials from './Testimonials'
import Contact from './Form'
import TestimonialHeader from "./TestimonialHeader";

export default {
  components: {
    appServiceQuote: ServiceQuote,
    appHeader: Header,
    appServices: Services,
    appTimeline: Timeline,
    appTestimonialHeader: TestimonialHeader,
    appTestimonials: Testimonials,
    appContact: Contact
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
