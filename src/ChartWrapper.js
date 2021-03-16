import { useRef, useEffect, useState } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = () => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new D3Chart(chartArea.current));
    } else {
    //   chart.update();
    }
  }, [chart]);

  return <div className="chart-area" ref={chartArea} />;
};

export default ChartWrapper;
