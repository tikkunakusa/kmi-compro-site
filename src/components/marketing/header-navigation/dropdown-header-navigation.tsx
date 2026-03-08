import { BookmarkCheck, Bank, Database03, Briefcase01 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const items = [
    {
        title: "Legal Consultant",
        subtitle: "Legal advisory services for corporations and individuals",
        href: "/services#legal",
        Icon: BookmarkCheck,
    },
    {
        title: "Management Consultant",
        subtitle: "Management advisory services to help organizations improvement",
        href: "/services#management",
        Icon: Briefcase01,
    },
    {
        title: "IT Consultant",
        subtitle: "Support for organizations in managing technology-related risks",
        href: "/services#tech",
        Icon: Database03,
    },
    {
        title: "Financial and Accounting Consultant",
        subtitle: "Support on comprehensive financial management and accounting services",
        href: "/services#finance",
        Icon: Bank,
    }
];

export const DropdownMenuSimple = () => {
    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:p-2 md:shadow-lg">
                <ul className="flex flex-col gap-0.5">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
