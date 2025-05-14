import React from "react";
import AdminPanelLayout from "../layouts/AdminPanelLayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return <AdminPanelLayout>{children}</AdminPanelLayout>;
};

export default MainLayout;
