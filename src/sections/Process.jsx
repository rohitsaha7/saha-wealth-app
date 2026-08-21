import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import "./Process.css";


function Process(){

const steps = [
    {
        number:"01",
        title:"Understand Your Goals",
        text:"We understand your financial needs, goals and current situation."
    },

    {
        number:"02",
        title:"Suggest Right Solutions",
        text:"We provide suitable investment, insurance and loan options."
    },

    {
        number:"03",
        title:"Complete Assistance",
        text:"We support you throughout the process with proper guidance."
    },

    {
        number:"04",
        title:"Build Long-Term Relationship",
        text:"We stay connected and help you make better financial decisions."
    }
];


return(

<section className="process-section">

<Container>

<SectionTitle

title="How We Work"

subtitle="A simple process to make your financial journey easier."

/>


<div className="process-grid">

{
steps.map((step,index)=>(

<div className="process-card" key={index}>

<div className="process-number">
{step.number}
</div>

<h3>
{step.title}
</h3>

<p>
{step.text}
</p>

</div>

))
}

</div>


</Container>

</section>

)

}


export default Process;