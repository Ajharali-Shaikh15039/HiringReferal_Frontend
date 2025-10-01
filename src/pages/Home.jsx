import TopCompanies from '../components/TopCompanies';  
import TrendingJobs from '../components/TrendingJobs';  
import HowItWorks from '../components/HowItWorks';  
import Download from '../components/Download';  
import PopularEverywhere from '../components/PopularEverywhere';  
import phone from "../images/phone.png";   // <- IMPORT



export default function Home() {
  return (
    <>
       <TopCompanies/>
       <TrendingJobs/> 
       <HowItWorks/>
       <Download phoneSrc={phone} />
       <PopularEverywhere/>
  
    </>
  );
}
