import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavRoute {
	url: string;
	title: string;
}

interface NavLinkProps {
	route: NavRoute;
}

const NavLink = ({ route }: NavLinkProps) => {
	const pathName = usePathname();

	return (
		<Link
			className={`rounded p-1 ${
				pathName === route.url && 'bg-black text-white'
			}`}
			href={route.url}>
			{route.title}
		</Link>
	);
};

export default NavLink;
