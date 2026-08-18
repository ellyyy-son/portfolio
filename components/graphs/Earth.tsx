import Plot from "react-plotly.js";

export default function Earth() {
  return (
    <Plot
      data={[
        {
          type: "choropleth",
          locationmode: "country names",
          locations: ["United States", "Philippines", "Japan", "France"],
          z: [100, 80, 90, 70],
          text: ["USA", "PH", "JP", "FR"],
          colorscale: "Viridis",
          autocolorscale: false,
        },
      ]}
      layout={{
        title: "World Map Example",
        geo: {
          projection: { type: "natural earth" },
          showframe: false,
          showcoastlines: true,
        },
        margin: { t: 50, l: 0, r: 0, b: 0 },
      }}
      style={{ width: "100%", height: "500px" }}
      config={{ responsive: true }}
    />
  );
}
