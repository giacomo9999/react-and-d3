import * as d3 from "d3";

export default function D3Chart(element) {
  const url = "https://udemy-react-d3.firebaseio.com/ages.json";
  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  d3.json(url).then((agesData) => {
    console.log(agesData);
    const rects = svg.selectAll("rect").data(agesData);
    rects
      .enter()
      .append("rect")
      .attr("x", (d, i) => 30 + i * 100)
      .attr("y", 50)
      .attr("height", (d) => d.age * 20)
      .attr("width", 50)
      .attr("fill", "yellowgreen");
  });
}
