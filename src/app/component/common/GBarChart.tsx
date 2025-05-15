"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

const GBarChart = () => {
	return (
		<div>
			<Card className="border-none ">
				<CardContent className="w-full">
					<ChartContainer config={chartConfig} className="w-full max-h-[140px]">
						<BarChart accessibilityLayer data={chartData} className="w-full ">
							<CartesianGrid vertical={false} horizontal={false} />
							{/* <XAxis
								dataKey="month"
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								tickFormatter={(value) => value.slice(0, 3)}
							/> */}
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Bar dataKey="desktop" fill="#E11D48" radius={5} />
						</BarChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</div>
	);
};

export default GBarChart;
