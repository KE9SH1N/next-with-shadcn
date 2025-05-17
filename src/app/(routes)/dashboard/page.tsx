import GBarChart from "@/app/component/common/GBarChart";
import GCard from "@/app/component/common/GCard";
import GDotLineChart from "@/app/component/common/GDotLineChart";
import GRadialChart from "@/app/component/common/GRadialChart";
import ProfileList from "@/app/component/dashboard/ProfileList";
import ContentLayout from "@/components/custom-ui/helper-ui/ContentLayout";
import DataTable from "./DataTable";
import MonthlyRevenueList from "./MonthlyRevenueList";

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
				<div className="w-full ct-flex-start gap-x-5 my-5">
					<div className="w-[30%] flex flex-col gap-y-2">
						<div className="max-w-[1/3] flex-grow ">
							<GCard
								cardHeaderClass="py-3"
								cardPrimaryTitle="Top Seller"
								cardPrimaryTitleClass="text-4xl"
								cardDescription="Perfomance is the key to success!"
								// cardSecondaryTitleClass="hidden"
								// cardDescriptionClass="hidden"
								chart={<ProfileList />}
							/>
						</div>

						<div className="max-w-[1/3] flex-grow ">
							<GCard
								cardClass="min-h-[245px]"
								cardHeaderClass="py-3"
								cardPrimaryTitle="Last 3 Month Revenue"
								cardPrimaryTitleClass="text-2xl"
								// cardSecondaryTitleClass="hidden"
								// cardDescriptionClass="hidden"
								chart={<MonthlyRevenueList />}
							/>
						</div>
					</div>
					<div className="max-w-[1/3] flex-grow ">
						<GCard
							cardClass="min-h-[600px]"
							cardHeaderClass="py-3"
							cardPrimaryTitle="Top Products"
							cardPrimaryTitleClass="text-4xl"
							// cardSecondaryTitleClass="hidden"
							// cardDescriptionClass="hidden"
							chart={<DataTable />}
						/>
					</div>
				</div>
			</ContentLayout>
		</div>
	);
};

export default page;
