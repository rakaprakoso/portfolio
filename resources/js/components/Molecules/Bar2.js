import { FaCheckCircle } from "react-icons/fa";
const Bar2 = ({ skillData }) => {

    const ConditionWrapper = ({ name}) => {
        return (
            <span className="hover:scale-125 bg-primary-50 text-gray-50 mr-2 mb-2 px-2 py-1 rounded inline-block"><FaCheckCircle className="mr-1" style={{ display:"inline" }}/> {name}</span>
            // <div className="skill-container">
            //     <div className="text">
            //         <h3>{name}</h3>
            //     </div>
            //     {/* <div className="chart-container">
            //         <div className="bar w-full"/>
            //     </div> */}
            // </div>
        )
    }

    return (
        <div>
            {/* <div className="row"> */}
                {skillData.map((item, i) => (
                        <ConditionWrapper name={item}/>
                    // <div key={i} className="col-lg-4">
                    // </div>
                ))}
            {/* </div> */}
        </div>
    )
}

export default Bar2
