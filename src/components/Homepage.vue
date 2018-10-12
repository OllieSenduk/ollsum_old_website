<template lang="html">
  <section>
      <appHeader></appHeader>
      <appServiceQuote></appServiceQuote>
      <appServices></appServices>
      <appTimeline></appTimeline>
      <appTestimonials></appTestimonials>
    </section>
</template>

<script>
import ServiceQuote from './ServiceQuote'
import Header from './Header'
import Services from './Services'
import Timeline from './Timeline'
import Testimonials from './Testimonials'

export default {
  components: {
    appServiceQuote: ServiceQuote,
    appHeader: Header,
    appServices: Services,
    appTimeline: Timeline,
    appTestimonials: Testimonials
  }
}
</script>

<style lang="scss" scoped>
</style>
