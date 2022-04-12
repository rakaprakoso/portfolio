// import Image from "next/image";
import { FaLink } from "react-icons/fa";
import portfolioData from "./Portfolio.data";

const Portfolio1 = ({ data }) => {
    var portfolioDataNew = data && data?.portfolio;
    return (
        <section id="portfolio" className="py-20">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="p-8 md:mx-24">
                        <h2 className="border-bottom text-3xl font-semibold text-center mb-10 uppercase">
                            Portfolio
                        </h2>
                        <div className="portfolio">
                            <div className="row">
                                {data &&
                                    portfolioDataNew.map((item, i) => (
                                        <div
                                            key={i}
                                            className="col-lg-3 col-md-6"
                                        >
                                            <div className="portfolio-container mb-7">
                                                <div className="embed-responsive responsive-1by1">
                                                    <img
                                                        className=""
                                                        layout="fill"
                                                        src={item.img}
                                                    />
                                                    <div className="text-container">
                                                        <h3>{item.name}</h3>
                                                        <h5 className="text-primaryDark-50">
                                                            {item.type}
                                                        </h5>

                                                        <span className="rounded-full bg-gray-50 mt-2 p-1">
                                                            <a
                                                                href={item.url}
                                                                target="_blank"
                                                            >
                                                                <FaLink
                                                                    style={{
                                                                        display:
                                                                            "inline-block",
                                                                    }}
                                                                />{" "}
                                                                Preview
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio1;
