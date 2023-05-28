function HorizontalGraph(props) {
	const data = props.data;
	const w = 400, h = 400;
	const barHeight = 30;
	const x0 = 100, y0 = h / (data.length + 1);

	const bar = data.map((data) => {
		const x1 = 0, x2 = data.len;
		const y1 = 0, y2 = barHeight;

		return [x1, y1, x2, y2];
	});
	console.log(bar);

	return (
		<svg width={w} height={h}>
			{
				data.map((data, index) => {
					const t = "translate(" + x0 + "," + (y0 * (index + 1) - barHeight / 2) + ")";
					return (
						<g transform={t} key={index}>
							<text x="-15" y={barHeight / 2} textAnchor="end" dominantBaseline="cemtral">{data.label}</text>
							<line x1="-10" y1={barHeight / 2} x2="0" y2={barHeight / 2} stroke="black"></line>
							<path stroke="black" fill={data.color} d={data.path}></path>
							<rect x={bar[index][0]} y={bar[index][1]} width={bar[index][2]} height={bar[index][3]} fill={data.color}></rect>
						</g>
					);
				})
			}
			<line x1={x0} y1="0" x2={x0} y2={h} stroke="black"></line>
		</svg>
	);
}

function VerticalGraph(props){
	const data = props.data;
	const w = 400, h = 400;
	const barWidth = 30;

	const bar = data.map((data) => {
		const x1 = 0;
		const y1 = data.len;
		const x2 = barWidth;
		const y2 = data.len;

		return [x1, y1, x2, y2];
	});
	console.log(bar);

}


function App() {
	const barData = [
		{ len: 250, label: "A", color: "orange" },
		{ len: 200, label: "B", color: "purple" },
		{ len: 150, label: "C", color: "pink" }
	];

	return (
		<div>
			<HorizontalGraph data={barData} />
			<VerticalGraph data={barData} />
			<h1>Hello world!</h1>
		</div>
	);
}

export default App;
