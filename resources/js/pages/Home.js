import { React, useEffect,useState } from 'react';
// import Hero1 from '../components/Hero/Hero1';
import Page from '../page';

import Header2 from '../components/Header/Header2'
import Hero2 from '../components/Hero/Hero2'
import Profile1 from '../components/Section/Profile/Profile1'
import Resume1 from '../components/Section/Resume/Resume1'
import Portfolio1 from '../components/Section/Portfolio/Portfolio'
import Footer1 from '../components/Footer/Footer1'
import WA from '../components/Molecules/WA';

function Home(props) {

    const [data,setData] = useState(null);
    async function fetchurl(url) {
        return await fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(async () => {
        const getData = await fetchurl('https://allof.deprakoso.com/api/data')
        setData(getData);
    },[])

    return (
        <Page title="Home">
            <Header2/>
            <Hero2 data={data} imgUrl="/img/background/IMG_0513.JPG" />
            <Profile1 data={data} />
            <Resume1 data={data}/>
            <Portfolio1 data={data}/>
            <Footer1 data={data}/>
            <WA data={data}/>
        </Page>
    );
}

export default Home;
