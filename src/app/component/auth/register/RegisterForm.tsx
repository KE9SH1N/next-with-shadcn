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

const RegisterForm = () => {
	const router = useRouter();
	const [togglePasswordVisibility, setTogglePasswordVisibility] =
		useState<boolean>(false);
	const [toggleConfirmPasswordVisibility, setToggleConfirmPasswordVisibility] =
		useState<boolean>(false);

	const togglePassVisibility = () => {
		setTogglePasswordVisibility(!togglePasswordVisibility);
	};
	const toggleConfirmPassVisibility = () => {
		setToggleConfirmPasswordVisibility(!toggleConfirmPasswordVisibility);
	};
	const handleCancelRegistration = () => {
		router.push("/login");
	};
	return (
		<Card className="w-[500px]">
			<CardHeader>
				<div className="ct-flex-between">
					<div>
						<CardTitle>Create Account</CardTitle>
						<CardDescription>Crate your account by one-click.</CardDescription>
					</div>

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

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="confirm_password">Confirm Password</Label>
							<div className="relative">
								<Input
									id="confirm_password"
									type={toggleConfirmPasswordVisibility ? "password" : "text"}
									placeholder="Confirm your Password"
									className="pr-10"
								/>
								{toggleConfirmPasswordVisibility ? (
									<IoEyeOffOutline
										onClick={toggleConfirmPassVisibility}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-muted-foreground cursor-pointer"
									/>
								) : (
									<IoEyeOutline
										onClick={toggleConfirmPassVisibility}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-muted-foreground cursor-pointer"
									/>
								)}
							</div>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="ct_outline" onClick={handleCancelRegistration}>
					Cancel
				</Button>
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	);
};

export default RegisterForm;
