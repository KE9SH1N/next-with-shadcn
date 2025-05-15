import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface GCardProps {
	cardPrimaryTitle?: string;
	cardSecondaryTitle?: string;
	cardDescription?: string;
	chartData?: any;
	chart?: React.ReactNode;
	cardHeaderClass?: string;
	cardPrimaryTitleClass?: string;
	cardSecondaryTitleClass?: string;
	cardDescriptionClass?: string;
}

const GCard: React.FC<GCardProps> = ({
	cardPrimaryTitle,
	cardSecondaryTitle,
	cardDescription,
	chartData,
	chart,
	cardHeaderClass,
	cardPrimaryTitleClass,
	cardSecondaryTitleClass,
	cardDescriptionClass,
}) => {
	return (
		<Card className="w-full min-h-[280px]">
			<CardHeader className={`${cardHeaderClass}`}>
				<CardTitle className={`${cardPrimaryTitleClass}`}>
					{cardPrimaryTitle}
				</CardTitle>
				<CardTitle className={`text-3xl ${cardSecondaryTitleClass}`}>
					{cardSecondaryTitle}
				</CardTitle>
				<CardDescription className={`${cardDescriptionClass}`}>
					{cardDescription}
				</CardDescription>
			</CardHeader>
			<CardContent>{chart}</CardContent>
		</Card>
	);
};

export default GCard;
