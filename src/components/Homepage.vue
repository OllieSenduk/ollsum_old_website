<template lang="html">
  <section>
      <appHeader></appHeader>
      <appServiceQuote></appServiceQuote>
      <appServices></appServices>
      <appTimeline></appTimeline>
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

export default {
  components: {
    appServiceQuote: ServiceQuote,
    appHeader: Header,
    appServices: Services,
    appTimeline: Timeline,
    appTestimonials: Testimonials,
    appContact: Contact
  }
}
</script>

<style lang="scss" scoped>
</style>
