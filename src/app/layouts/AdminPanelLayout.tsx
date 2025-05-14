"use client";
import Footer from "@/components/custom-ui/helper-ui/Footer";
import Sidebar from "@/components/custom-ui/Sidebar";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";

const AdminPanelLayout = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [isHover, setIsHover] = useState(false);
	const [settings, setSettings] = useState({
		disabled: false,
		isHoverOpen: false,
	});

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const getOpenState = useCallback(() => {
		return isOpen || (settings.isHoverOpen && isHover);
	}, [isOpen, isHover, settings]);
	return (
		<>
			<Sidebar
				isOpen={isOpen}
				isHover={isHover}
				settings={settings}
				toggleOpen={toggleOpen}
				setIsHover={setIsHover}
				getOpenState={getOpenState}
			/>
			<main
				className={cn(
					"min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
					!settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
				)}
			>
				{children}
			</main>
			<footer
				className={cn(
					"transition-[margin-left] ease-in-out duration-300",
					!settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
				)}
			>
				<Footer />
			</footer>
		</>
	);
};

export default AdminPanelLayout;
