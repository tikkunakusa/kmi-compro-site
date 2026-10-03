import { ServiceItem, defaultServices, getServiceIcon } from "@/utils/services-data";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { useLocale } from 'next-intl';

interface DropdownMenuSimpleProps {
    services?: ServiceItem[];
}

export const DropdownMenuSimple = ({ services }: DropdownMenuSimpleProps) => {
    const locale = useLocale();
    const serviceList = services && services.length > 0 ? services : defaultServices(locale);

    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:p-2 md:shadow-lg">
                <ul className="flex flex-col gap-0.5">
                    {serviceList.map((service) => {
                        const Icon = getServiceIcon(service.icon);
                        return (
                            <li key={service.id || service.slug}>
                                <NavMenuItemLink
                                    icon={Icon}
                                    title={service.title}
                                    subtitle={service.subtitle}
                                    href={`/services#${service.slug}`}
                                />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
