import { ModuleLink } from './moduleLink';

export interface Module {
    moduleId: number;
    moduleTitle: string;
    routerLink: string;
    faIcon: string;
    viewOrder: number;
    enabled?: boolean;
    description?: string;
    instruction?: string;
    subModules?: ModuleLink[];
}
