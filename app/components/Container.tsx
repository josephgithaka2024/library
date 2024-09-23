export default function Container({ children }: OnlyChildren) {
    return <div className='flex-grow w-full'>{children}</div>;
}
