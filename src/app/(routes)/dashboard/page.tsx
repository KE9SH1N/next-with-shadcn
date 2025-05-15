import GBarChart from "@/app/component/common/GBarChart";
import GCard from "@/app/component/common/GCard";
import GDotLineChart from "@/app/component/common/GDotLineChart";
import GRadialChart from "@/app/component/common/GRadialChart";
import ContentLayout from "@/components/custom-ui/helper-ui/ContentLayout";

const page = () => {
	return (
		<div className="w-full">
			<ContentLayout title="Dashboard">
				<div className="w-full ct-flex-start gap-x-5">
					<div className="max-w-1/3 flex-grow">
						<GCard
							cardPrimaryTitle="Total Revenue"
							cardSecondaryTitle="$15,231.89"
							cardDescription="+20.1% from last month"
							chart={<GDotLineChart />}
						/>
					</div>
					<div className="max-w-1/3 flex-grow ">
						<GCard
							cardPrimaryTitle="Subscriptions"
							cardSecondaryTitle="+2350"
							cardDescription="+180.1% from last month"
							chart={<GBarChart />}
						/>
					</div>
					<div className="max-w-[1/3] flex-grow ">
						<GCard
							cardPrimaryTitle="Customers"
							cardSecondaryTitle="+1830"
							cardDescription="+20% from last month"
							// cardSecondaryTitleClass="hidden"
							// cardDescriptionClass="hidden"
							chart={<GRadialChart />}
						/>
					</div>
				</div>
			</ContentLayout>
		</div>
	);
};

export default page;
