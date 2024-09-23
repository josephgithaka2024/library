import Aside from './components/Aside';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function Landing() {
    return (
        <div className='w-full h-full flex flex-row items-start justify-start'>
            <Aside />
            <Main>
                <Header />
                <Container>
                    <></>
                </Container>
                <Footer />
            </Main>
        </div>
    );
}
