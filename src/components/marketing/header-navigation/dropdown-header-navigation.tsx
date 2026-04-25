import { BookmarkCheck, Bank, Database03, Briefcase01 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { useTranslations } from 'next-intl';

export const DropdownMenuSimple = () => {
    const t = useTranslations();
    const items = [
        {
            title: t("Header.Services.Legal.Title"),
            subtitle: t("Header.Services.Legal.Subtitle"),
            href: "/services#legal",
            Icon: BookmarkCheck,
        },
        {
            title: t("Header.Services.Management.Title"),
            subtitle: t("Header.Services.Management.Subtitle"),
            href: "/services#management",
            Icon: Briefcase01,
        },
        {
            title: t("Header.Services.IT.Title"),
            subtitle: t("Header.Services.IT.Subtitle"),
            href: "/services#tech",
            Icon: Database03,
        },
        {
            title: t("Header.Services.Financial.Title"),
            subtitle: t("Header.Services.Financial.Subtitle"),
            href: "/services#finance",
            Icon: Bank,
        }
    ];
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
