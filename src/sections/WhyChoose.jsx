import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import "./WhyChoose.css";


function WhyChoose(){

const reasons = [

{
title:"Client First Approach",
text:"We understand your financial goals and provide solutions based on your needs."
},

{
title:"Complete Financial Solutions",
text:"Investment, loans and insurance solutions available under one roof."
},

{
title:"Transparent Guidance",
text:"Clear communication and honest financial guidance for every decision."
},

{
title:"Long Term Relationship",
text:"We focus on building lasting relationships, not just transactions."
}

];


return(

<section className="why-section">

<Container>

<SectionTitle

title="Why Choose Prime Wealth"

subtitle="Your trusted partner for smarter financial decisions."

/>


<div className="why-grid">


{
reasons.map((item,index)=>(

<div className="why-card" key={index}>

<div className="why-number">
0{index+1}
</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


))
}


</div>


</Container>

</section>

)

}


export default WhyChoose;