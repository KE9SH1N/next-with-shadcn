import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import { UserMenu } from "@/app/component/UserMenu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex items-center justify-between px-4 py-2">
					<div className="flex items-center gap-2">
						<img src="/logo.svg" alt="Logo" className="w-6 h-6" />
						<span className="font-semibold text-lg">Acme Inc</span>
					</div>

					{/* Collapse button (optional) */}
					<button className="p-1 rounded hover:bg-muted">
						<svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24">
							<path
								d="M4 6h16M4 12h16M4 18h16"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					</button>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<UserMenu />
			</SidebarFooter>
		</Sidebar>
	);
}
