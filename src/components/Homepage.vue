<template lang="html">
  <section>
      <appHeader></appHeader>
      <appServiceQuote></appServiceQuote>
      <appServices></appServices>
      <appTimeline></appTimeline>
    </section>
</template>

<script>
import ServiceQuote from './ServiceQuote'
import Header from './Header'
import Services from './Services'
import Timeline from './Timeline'

export default {
  components: {
    appServiceQuote: ServiceQuote,
    appHeader: Header,
    appServices: Services,
    appTimeline: Timeline
  }
}
</script>

<style lang="scss" scoped>
</style>
