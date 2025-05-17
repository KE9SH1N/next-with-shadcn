import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";
const members = [
	{
		name: "Sofia Davis",
		email: "m@example.com",
		role: "Owner",
		amount: "599",
	},
	{
		name: "Jackson Lee",
		email: "p@example.com",
		role: "Member",
		amount: "499",
	},
	{
		name: "Isabella Nguyen",
		email: "i@example.com",
		role: "Member",
		amount: "399",
	},
	{
		name: "Mr. John Wick",
		email: "i@example.com",
		role: "Member",
		amount: "350",
	},
];

const ProfileList = () => {
	return (
		<div className="space-y-4 my-5">
			{members.map((member) => (
				<div key={member.email} className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<Avatar>
							<AvatarImage src="" alt={member.name} />
							<AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<div>
							<p className="font-medium leading-none">{member.name}</p>
							<p className="text-sm text-muted-foreground">{member.email}</p>
						</div>
					</div>
					<CardTitle>{member?.amount}.00</CardTitle>
				</div>
			))}
		</div>
	);
};

export default ProfileList;
