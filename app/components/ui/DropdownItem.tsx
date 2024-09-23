export default function DropdownItem({ dropdownItemTitle }: DropDownItem) {
    return (
        <div className='flex flex-row p-3 px-0 ml-6 pl-3 hover:bg-black hover:text-white hover:cursor-pointer'>
            <a href=''>{dropdownItemTitle}</a>
        </div>
    );
}
