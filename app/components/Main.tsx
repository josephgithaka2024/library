export default function Main({ children }: OnlyChildren) {
    return (
        <main className='flex-grow h-full flex flex-col items-start justify-start p-2'>
            {children}
        </main>
    );
}
