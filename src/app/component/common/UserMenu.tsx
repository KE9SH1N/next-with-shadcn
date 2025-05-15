"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const UserMenu = () => {
	const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
	const toggleUserMenuArrow = () => {
		setOpenUserMenu(!openUserMenu);
		console.log("clicked");
	};

	console.log(openUserMenu);
	return (
		<DropdownMenu onOpenChange={setOpenUserMenu}>
			<DropdownMenuTrigger asChild>
				<Button variant="user_outline" className="w-[100px]">
					User
					<MdKeyboardArrowUp
						className={` smooth-animation-mid ${
							!openUserMenu ? "rotate-180" : "rotate-0"
						}`}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Billing
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Keyboard shortcuts
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Message</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>More...</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						New Team
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuItem disabled>API</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserMenu;
