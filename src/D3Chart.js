import * as d3 from "d3";

export default function D3Chart(element) {
  const data = [30, 10, 65, 42, 20, 35];
  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  const rects = svg.selectAll("rect").data(data);

  rects
    .enter()
    .append("rect")
    .attr("x", (d, i) => 30 + i * 100)
    .attr("y", 50)
    .attr("height", (d) => d * 10)
    .attr("width", 50)
    .attr("fill", "yellowgreen");
}
