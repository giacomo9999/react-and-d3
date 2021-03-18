import * as d3 from "d3";

export default function D3BarChart(element) {
  const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
  const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
  const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
  const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

  const svg = d3
    .select(element)
    .append("svg")
    .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
    .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
    .append("g")
    .attr("transform", `translate(${MARGIN.LEFT},${MARGIN.TOP})`);

  d3.json(url).then((data) => {
    // y = map range of data to size of canvas SVG
    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.height) * 0.95,
        d3.max(data, (d) => d.height),
      ])
      .range([HEIGHT, 0]);

    // x = map numner of entries in data array to width of canvas SVG
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, WIDTH])
      .padding(0.4);

    const xAxisCall = d3.axisBottom(x);
    svg.append("g").attr("transform", `translate(0,${HEIGHT})`).call(xAxisCall);

    const yAxisCall = d3.axisLeft(y);
    svg.append("g").call(yAxisCall);

    svg
      .append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 40)
      .attr("text-anchor", "middle")
      .text("The World's Tallest Men");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Height In cm");

    console.log("x[(data[0].name) ", data[0].name, x(data[0].name));
    console.log("y(100)", y(100));
    const rects = svg.selectAll("rect").data(data);
    rects
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.height))
      .attr("height", (d) => HEIGHT - y(d.height))
      .attr("width", x.bandwidth)
      .attr("fill", "yellowgreen");
  });
}
