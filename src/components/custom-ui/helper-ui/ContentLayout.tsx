import React from "react";
import Navbar from "./Navbar";
interface ContentLayoutProps {
	title?: string;
	children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ title, children }) => {
	return (
		<div>
			<Navbar title={title} />
			<div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
		</div>
	);
};

export default ContentLayout;
