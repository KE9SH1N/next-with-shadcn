import ContentLayout from "@/components/custom-ui/helper-ui/ContentLayout";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
} from "@/components/ui/tooltip";

const page = () => {
	// const {
	// 	isOpen,
	// 	isHover,
	// 	toggleOpen,
	// 	setIsOpen,
	// 	setIsHover,
	// 	getOpenState,
	// 	settings,
	// 	setSettings,
	// } = useSidebar();
	return (
		<ContentLayout title="Dashboard">
			<TooltipProvider>
				<div className="flex gap-6 mt-6">
					<Tooltip>
						<p>Hello</p>
						<TooltipContent>
							<p>When hovering on the sidebar in mini state, it will open</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipContent>
							<p>Hide sidebar</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</TooltipProvider>
		</ContentLayout>
	);
};

export default page;
