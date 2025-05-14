"use client";
import { produce } from "immer";
import { useCallback, useState } from "react";

type SidebarSettings = { disabled: boolean; isHoverOpen: boolean };

export function useSidebar() {
	const [isOpen, setIsOpen] = useState(true);
	const [isHover, setIsHover] = useState(false);
	const [settings, setSettingsState] = useState<SidebarSettings>({
		disabled: false,
		isHoverOpen: false,
	});

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const getOpenState = useCallback(() => {
		return isOpen || (settings.isHoverOpen && isHover);
	}, [isOpen, isHover, settings]);

	const setSettings = useCallback((newSettings: Partial<SidebarSettings>) => {
		setSettingsState((prev) =>
			produce(prev, (draft) => {
				Object.assign(draft, newSettings);
			})
		);
	}, []);

	return {
		isOpen,
		isHover,
		settings,
		toggleOpen,
		setIsOpen,
		setIsHover,
		getOpenState,
		setSettings,
	};
}
