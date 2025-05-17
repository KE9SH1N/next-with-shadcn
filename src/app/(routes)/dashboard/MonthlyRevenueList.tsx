import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const productData = [
	{
		sl: "001",
		month: "January",
		totalRevenue: "$250.00",
	},
	{
		sl: "002",
		month: "February",
		totalRevenue: "$320.00",
	},
	{
		sl: "003",
		month: "March",
		totalRevenue: "$410.00",
	},
];

const MonthlyRevenueList = () => {
	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">SL</TableHead>
						<TableHead>Month</TableHead>
						<TableHead className="text-right">Revenue</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{productData.map((item) => (
						<TableRow key={item.sl}>
							<TableCell className="font-medium">{item.sl}</TableCell>
							<TableCell>{item.month}</TableCell>
							<TableCell className="text-right">{item.totalRevenue}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default MonthlyRevenueList;
