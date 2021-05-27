import * as d3 from 'd3'
const canvas = d3.select('#canvas')
console.log('hola')
d3.json(
  'https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json',
).then((data) => {
  const width = 700
  const height = 500
  const margin = { top: 50, left: 50, bottom: 50, right: 50 }
  const iwidth = width - margin.left - margin.right
  const iheight = height - margin.top - margin.bottom

  const svg = canvas.append('svg')
  svg.attr('width', width)
  svg.attr('height', height)

  const g = svg
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  let maxEpisodes = parseFloat(data[0].episodes)
  let maxSeasons = parseFloat(data[0].seasons)

  console.log(maxEpisodes + ': ' + maxSeasons)
})
