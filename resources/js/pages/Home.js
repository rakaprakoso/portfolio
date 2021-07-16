import { React, useEffect } from 'react';
// import Hero1 from '../components/Hero/Hero1';
import Page from '../page';

import Header2 from '../components/Header/Header2'
import Hero2 from '../components/Hero/Hero2'
import Profile1 from '../components/Section/Profile/Profile1'
import Resume1 from '../components/Section/Resume/Resume1'
import Portfolio1 from '../components/Section/Portfolio/Portfolio'
import Footer1 from '../components/Footer/Footer1'

function Home(props) {
    return (
        <Page title="Home">
            <Header2 />
            <Hero2 imgUrl="/img/background/IMG_0513.JPG" />
            <Profile1 />
            <Resume1 />
            <Portfolio1 />
            <Footer1 />
        </Page>
    );
}

export default Home;
