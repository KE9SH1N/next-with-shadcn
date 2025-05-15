"use client";
import ThemeToggle from "@/components/custom-ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const LoginForm = () => {
	const router = useRouter();
	const [togglePasswordVisibility, setTogglePasswordVisibility] =
		useState<boolean>(false);

	const togglePassVisibility = () => {
		setTogglePasswordVisibility(!togglePasswordVisibility);
	};

	const handleForgetPassword = () => {
		router.push("/register");
	};
	return (
		<Card className="w-[500px]">
			<CardHeader>
				<div className="ct-flex-between">
					<CardTitle>Sign In</CardTitle>
					<div className="flex flex-1 items-center justify-end">
						<ThemeToggle />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Username</Label>
							<Input id="name" placeholder="Type your Username" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Input
									id="password"
									type={togglePasswordVisibility ? "password" : "text"}
									placeholder="Type your Password"
									className="pr-10"
								/>
								{togglePasswordVisibility ? (
									<IoEyeOffOutline
										onClick={togglePassVisibility}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-muted-foreground cursor-pointer"
									/>
								) : (
									<IoEyeOutline
										onClick={togglePassVisibility}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-muted-foreground cursor-pointer"
									/>
								)}
							</div>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="ct-flex-center flex-col gap-y-4">
				<CardDescription
					onClick={handleForgetPassword}
					className="cursor-pointer text-blue-400"
				>
					Forget Your Passowrd ?
				</CardDescription>
				<Button className="w-[200px]">Sign In</Button>
			</CardFooter>
		</Card>
	);
};

export default LoginForm;
