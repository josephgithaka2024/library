import Brand from './Brand';
import Container from './Container';

export default function Aside() {
    return (
        <aside className='w-64 h-full p-2 flex flex-col items-start justify-start'>
            <Brand />
            <Container>
                <div></div>
            </Container>
        </aside>
    );
}
