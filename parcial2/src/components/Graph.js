import * as d3 from 'd3'
function Graph() {
  const canvas = d3.select('#canvas')
  //console.log('hola')
  d3.json(
    'https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json',
  ).then((data) => {
    const width = 700
    const height = 500
    const margin = { top: 50, left: 60, bottom: 50, right: 50 }
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

    data.forEach((d) => {
      if (parseFloat(d.episodes) > maxEpisodes)
        maxEpisodes = parseFloat(d.episodes)
      if (parseFloat(d.seasons) > maxSeasons) maxSeasons = parseFloat(d.seasons)
    })

    const x = d3.scaleLinear().domain([0, maxEpisodes]).range([0, iwidth])
    const y = d3.scaleLinear().domain([0, maxSeasons]).range([iheight, 0])

    const circles = g.selectAll('circle').data(data)
    //Crea los circulos
    circles
      .enter()
      .append('circle')
      .attr('cx', (d) => x(parseFloat(d.episodes)))
      .attr('cy', (d) => y(parseFloat(d.seasons)))
      .attr('r', 7)
      .style('fill', 'orange')

    //Crea el eje x
    g.append('g')
      .classed('x--axis', true)
      .call(d3.axisBottom(x))
      .attr('transform', `translate(0,${iheight})`)
    //label eje x
    g.append('text')
      .attr('text-anchor', 'end')
      .attr('x', iwidth)
      .attr('y', iheight)
      .text('Episodes')

    //Crea el eje y
    g.append('g').classed('y--axis', true).call(d3.axisLeft(y))

    //label eje y
    g.append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('x', -20)
      .attr('y', -15)
      .text('Seasons')

    //Crea los labels de las series

    data.forEach((d) => {
      g.append('text')
        .attr('text-anchor', 'end')
        .attr(
          'x',
          d.name.includes('Bang')
            ? x(parseFloat(d.episodes)) - 80
            : x(parseFloat(d.episodes)) + 120,
        )
        .attr('y', y(parseFloat(d.seasons)))
        .text(d.name)
    })
    //console.log(maxEpisodes + ': ' + maxSeasons)
  })
}
export default Graph
