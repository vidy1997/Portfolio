import { useState } from "react";

const About = () => {
    const [aboutData,setAboutData]=useState({
        title:'About Me',
        desc1:`Currently working on web development projects. Skills include HTML, CSS, Tailwind CSS, Node.js, React.js, Core Java, and Advanced Java.`,
        desc2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos doloremque minus voluptatibus, quo animi ab? Assumenda amet expedita corrupti ut excepturi saepe quisquam adipisci ex natus animi, minus illo laudantium itaque perspiciatis nostrum, blanditiis aliquid aliquam, eos accusantium. Quam, vitae. Architecto fuga molestias praesentium amet ad ratione dolor nostrum.`,
        role:'Interested in a full-stack developer role.',
        action:'Read More..'

    })
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="w-1/2">
                <h1 className="text-4xl mb-6 text-center mt-7">{aboutData.title}</h1>
                <div className="text-xl">
                    <p>
                        {aboutData.desc1}
                    </p>
                    <p className="mt-4">
                        {aboutData.desc2}
                    </p>
                </div>
                <p className="text-lg mt-6 text-center">
                   {aboutData.role}
                </p>
                <div className=" bg-orange-600 text-white rounded-full shadow-lg text-lg w-32 " style={{margin:"auto"}} >
                    <button className="h-full w-full flex justify-center items-center">{aboutData.action}</button>
                </div>
            </div>
        </div>
    );
}

export default About;
