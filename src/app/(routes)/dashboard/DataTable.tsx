import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const productData = [
	{
		sl: "001",
		productName: "Product 1",
		totalAmount: "$250.00",
		qty: 12,
		paymentMethod: "Credit Card",
	},
	{
		sl: "002",
		productName: "Product 2",
		totalAmount: "$150.00",
		qty: 85,
		paymentMethod: "PayPal",
	},
	{
		sl: "003",
		productName: "Product 3",
		totalAmount: "$350.00",
		qty: 45,
		paymentMethod: "Bank Transfer",
	},
	{
		sl: "004",
		productName: "Product 4",
		totalAmount: "$450.00",
		qty: 121,
		paymentMethod: "Credit Card",
	},
	{
		sl: "005",
		productName: "Product 5",
		totalAmount: "$550.00",
		qty: 55,
		paymentMethod: "PayPal",
	},
	{
		sl: "006",
		productName: "Product 6",
		totalAmount: "$200.00",
		qty: 67,
		paymentMethod: "Bank Transfer",
	},
	{
		sl: "007",
		productName: "Product 7",
		totalAmount: "$300.00",
		qty: 99,
		paymentMethod: "Credit Card",
	},
	{
		sl: "008",
		productName: "Product 8",
		totalAmount: "$550.00",
		qty: 55,
		paymentMethod: "PayPal",
	},
	{
		sl: "009",
		productName: "Product 9",
		totalAmount: "$200.00",
		qty: 67,
		paymentMethod: "Bank Transfer",
	},
	{
		sl: "010",
		productName: "Product 10",
		totalAmount: "$300.00",
		qty: 99,
		paymentMethod: "Credit Card",
	},
];

const DataTable = () => {
	return (
		<div>
			<Table>
				<TableCaption>Based on your last 30 days sells</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">SL</TableHead>
						<TableHead>Product Name</TableHead>
						<TableHead>Qty</TableHead>
						<TableHead className="text-right">Revenue</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{productData.map((item) => (
						<TableRow key={item.sl}>
							<TableCell className="font-medium">{item.sl}</TableCell>
							<TableCell>{item.productName}</TableCell>
							<TableCell>{item.qty}</TableCell>
							<TableCell className="text-right">{item.totalAmount}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
};

export default DataTable;
