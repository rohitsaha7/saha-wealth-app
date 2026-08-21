import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import "./Network.css";

import assetplusLogo from "../assets/images/assetplus.jpeg";
import policybazaarLogo from "../assets/images/policybazaar.jpg";
import boltLogo from "../assets/images/volt.png";
import ruloansLogo from "../assets/images/ruloans.jpg";
import AndromedaLogo from "../assets/images/andromeda.jpg";



function Network(){

const partners = [
    {
        name:"AssetPlus",
        logo:assetplusLogo,
        category:"Investment"
    },

    {
        name:"Policybazaar",
        logo:policybazaarLogo,
        category:"Insurance"
    },

    {
        name:"volt Money",
        logo:boltLogo,
        category:"Loan Solutions"
    },

    {
        name:"RuLoans",
        logo:ruloansLogo,
        category:"Loan Solutions"
    },
    {
      name:"Andromeda",
      logo:AndromedaLogo,
      category:"Loan Solutions"
    }
];


return(

<section className="network-section">

<Container>

<SectionTitle

title="Our Financial Network"

subtitle="Partnering with trusted financial platforms to deliver investment, insurance and lending solutions."

/>


<div className="network-grid">

{
partners.map((partner,index)=>(

<div className="network-card" key={index}>

<img 
src={partner.logo}
alt={partner.name}
/>

<p>
{partner.category}
</p>

</div>

))
}


<div className="network-card more-card">

<h3>
+ More
</h3>

<p>
Growing network of trusted partners
</p>

</div>


</div>


</Container>

</section>

)

}


export default Network;