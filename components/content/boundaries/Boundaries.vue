<template>
  <div ref="mapContainer" class="h-[400px]"></div>
  <div @click="setFilter">Filter</div>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_PUBLIC_KEY

const mapContainer = ref<undefined | HTMLDivElement>()
const map = ref<undefined | mapboxgl.Map>()
const mapLoaded = ref(false)

function setFilter() {
  if (!map.value) return
  map.value.setFilter('intersections-3fztpc', [
    '==',
    'ge2020_constituency',
    'WEST COAST',
  ])
}

const ge2020Layers = ['ge2020-fill', 'ge2020-line']
const ge2025Layers = ['ge2025-fill', 'ge2025-line']
const allLayers = ge2020Layers.concat(ge2025Layers)

onMounted(() => {
  if (!mapContainer.value) return
  map.value = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/greentfrapp/cm8jnvdk6017k01qrfdu5c9mh',
    center: [103.8337, 1.3532],
    zoom: 10,
  })
  map.value.on('load', () => {
    mapLoaded.value = true
    allLayers.forEach((f) => {
      map.value?.setLayoutProperty(f, 'visibility', 'none')
    })
  })
  map.value.on('mousemove', 'all_constituencies', (e) => {
    var f = map.value?.queryRenderedFeatures(e.point)[0]
    ge2020Layers.forEach((l) => {
      map.value?.setLayoutProperty(l, 'visibility', 'visible')
      map.value?.setFilter(l, [
        '==',
        'Name',
        f?.properties?.ge2020_constituency,
      ])
    })
    ge2025Layers.forEach((l) => {
      map.value?.setLayoutProperty(l, 'visibility', 'visible')
      map.value?.setFilter(l, [
        '==',
        'Name',
        f?.properties?.ge2025_constituency,
      ])
    })
  })
})
</script>
