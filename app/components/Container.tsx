export default function Container({ children, styles }: OnlyChildren) {
    return <div className={['w-full', styles].join(' ')}>{children}</div>;
}
