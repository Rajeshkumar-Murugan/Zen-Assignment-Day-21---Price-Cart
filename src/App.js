import './App.css';

import Card from './Card.js'


function App() {

  let free = {
title:"FREE",
price:"0",


user:"Single User",
userEnabler: true,

storage:"5GB Storage",
storageEnabler: true,

publicProjects: "Unlimited Public Projects",
publicProjectsEnabler: true,

communityAccess: "Community Access",
communityAccessEnabler: true,

privateProjects:"Unlimited Private Projects",
privateProjectsEnabler: false,

phoneSupport:"Dedicated Phone Support",
phoneSupportEnabler: false,

subDomain:"Free Subdomain",
subDomainEnabler: false,

reports:"Monthly Status Reports",
reportsEnabler: false,
  }

  let plus = {
    title:"PLUS",
    price:"9",
    
    user:"5 User",
    userEnabler: true,
    
    storage:"5GB Storage",
    storageEnabler: true,
    
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler: true,
    
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler: true,
    
    subDomain:"Free Subdomain",
    subDomainEnabler: true,
    
    reports:"Monthly Status Reports",
    reportsEnabler: false,
      }

  let pro = {
        title:"PRo",
        price:"49",
        
        user:"Unlimited User",
        userEnabler: true,
        
        storage:"150GB Storage",
        storageEnabler: true,
        
        publicProjects: "Unlimited Public Projects",
        publicProjectsEnabler: true,
        
        communityAccess: "Community Access",
        communityAccessEnabler: true,
        
        privateProjects:"Unlimited Private Projects",
        privateProjectsEnabler: true,
        
        phoneSupport:"Dedicated Phone Support",
        phoneSupportEnabler: true,
        

        subDomain:"Free Subdomain",
        subDomainEnabler: true,
        subDomainPrefix:"Unlimited ",
        
        reports:"Monthly Status Reports",
        reportsEnabler: true,
          }


  return <>
   
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card type={free}/>
      <Card type={plus}/>
      <Card type={pro}/>
    
    </div>
  </div>
</section>
</>
}

export default App;
