import Brand from './Brand';
import Container from './Container';
import Dropdown from './ui/Dropdown';
import DropdownItem from './ui/DropdownItem';

export default function Aside() {
    return (
        <aside className='w-60 h-full p-4 py-0 flex flex-col items-start justify-start border-r overflow-y-auto gap-8'>
            <Brand />
            <Container styles='flex flex-col'>
                <Dropdown
                    dropdownTitle='Landing'
                    image='/icons/landing.svg'
                >
                    <DropdownItem dropdownItemTitle='Home' />
                    <DropdownItem dropdownItemTitle='Features' />
                    <DropdownItem dropdownItemTitle='Work' />
                    <DropdownItem dropdownItemTitle='Docs' />
                </Dropdown>
                <Dropdown
                    dropdownTitle='Authentication'
                    image='/icons/auth.svg'
                >
                    <DropdownItem dropdownItemTitle='Login' />
                    <DropdownItem dropdownItemTitle='Register' />
                    <DropdownItem dropdownItemTitle='Reset' />
                    <DropdownItem dropdownItemTitle='Support' />
                </Dropdown>
                <Dropdown
                    dropdownTitle='Landing'
                    image='/icons/landing.svg'
                >
                    <DropdownItem dropdownItemTitle='Home' />
                    <DropdownItem dropdownItemTitle='Features' />
                    <DropdownItem dropdownItemTitle='Work' />
                    <DropdownItem dropdownItemTitle='Docs' />
                </Dropdown>
                <Dropdown
                    dropdownTitle='Authentication'
                    image='/icons/auth.svg'
                >
                    <DropdownItem dropdownItemTitle='Login' />
                    <DropdownItem dropdownItemTitle='Register' />
                    <DropdownItem dropdownItemTitle='Reset' />
                    <DropdownItem dropdownItemTitle='Support' />
                </Dropdown>
            </Container>
        </aside>
    );
}
