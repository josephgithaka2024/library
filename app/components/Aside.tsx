import Brand from './Brand';
import Container from './Container';
import Dropdown from './ui/Dropdown';
import DropdownItem from './ui/DropdownItem';

export default function Aside() {
    return (
        <aside className='w-64 h-full p-4 flex flex-col items-start justify-start border-r overflow-y-auto gap-8'>
            <Brand />
            <Container styles='flex flex-col'>
                <Dropdown
                    dropdownTitle='Landing'
                    image='/icons/landing.svg'
                >
                    <DropdownItem dropdownItemTitle='Hero' />
                    <DropdownItem dropdownItemTitle='Services' />
                    <DropdownItem dropdownItemTitle='Features' />
                    <DropdownItem dropdownItemTitle='Testimoninals' />
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
