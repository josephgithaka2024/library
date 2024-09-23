export default function DropdownItem({ dropdownItemTitle }: DropDownItem) {
    return (
        <div className='flex flex-row p-3 px-0 hover:bg-slate-200 ml-1 pl-3 border-l-2 border-l-transparent hover:border-l-2 hover:border-l-black hover:cursor-pointer'>
            <a href=''>{dropdownItemTitle}</a>
        </div>
    );
}
