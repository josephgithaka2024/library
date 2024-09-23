import { ReactNode } from 'react';

export global {
    interface OnlyChildren {
        children: ReactNode;
        styles?: string;
    }
    interface DropdownProps extends OnlyChildren {
        dropdownTitle: string;
        image: string;
    }
    interface DropDownItem {
        dropdownItemTitle: string;
    }
}

export {};
