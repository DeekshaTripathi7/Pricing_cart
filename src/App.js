
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import PriceCard from './components/PriceCard';

function App() {

let data = [
    
    {
      product: "FREE",
      price: "0",
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: false
    },

    {
      product: "PLUS",
      price: "9",
      user: "5 User",
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: false
    },

    {
      product: "PRO",
      price: "49",
      user: "Unlimited User",
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "UnlimitedFree Subdomain",
      subDomainEnabler: true,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: true
    }

  ]
  return <>

  <section className="pricing py-5">
    <div className="container">
      <div className="row">

        {
          data.map((e) => {
            return <PriceCard type={e}/>
          })
        }

      </div>
    </div>
  </section>
  
</>;
    
  
}

export default App;
