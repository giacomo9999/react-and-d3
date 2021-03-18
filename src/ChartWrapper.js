import { useRef, useEffect, useState } from "react";
import D3BarChart from "./D3BarChart";

const ChartWrapper = () => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new D3BarChart(chartArea.current));
    } else {
    //   chart.update();
    }
  }, [chart]);

  return <div className="chart-area" ref={chartArea} />;
};

export default ChartWrapper;
