
import NavigationBar from '../components/Nav';
import WelcomeContent from '../components/Welcome';
import Services from '../components/Services';
import Rasm from '../components/Rasm';
import Vizitka from '../components/vizitka';
import Updates from '../components/Updates';


function Home() {
    return(
        <>
            <header className='header'>
              
                <WelcomeContent />
            </header>
            <main>
                <section className='text-start'>
                    <Services />
                  
                </section>
                <section className='text-center'>
 <Rasm/>
                </section>
                <section>
                    <Vizitka/>
                </section>
                <section>
                    <Updates/>
                </section>
            </main>
        </>
    )
}

export default Home;