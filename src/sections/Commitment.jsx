import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import "./Commitment.css";


function Commitment(){

const commitments = [

{
title:"Personalised Guidance",
text:"We understand your financial goals and suggest solutions according to your requirements."
},

{
title:"Transparent Approach",
text:"We believe in clear communication and helping clients make informed decisions."
},

{
title:"Long-Term Relationship",
text:"Our focus is building lasting relationships based on trust and support."
},

{
title:"Continuous Support",
text:"We stay connected and assist you throughout your financial journey."
}

];


return(

<section className="commitment-section">

<Container>

<SectionTitle

title="Our Commitment"

subtitle="Helping you make smarter financial decisions with trust and guidance."

/>


<div className="commitment-grid">


{
commitments.map((item,index)=>(

<div className="commitment-card" key={index}>

<div className="commitment-icon">
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


export default Commitment;