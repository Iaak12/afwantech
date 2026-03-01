import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const SEOPortfolio = () => {
    const projects = [
        { name: "Real Estate Company", keyword: "Property in Delhi NCR", growth: "+350% Traffic", timeline: "3 Months" },
        { name: "Healthcare Clinic", keyword: "Best Clinic in Mumbai", growth: "+280% Leads", timeline: "4 Months" },
        { name: "B2B Manufacturer", keyword: "Industrial Equipment India", growth: "+420% Traffic", timeline: "5 Months" },
        { name: "E-commerce Store", keyword: "Buy Fashion Online", growth: "+600% Sales", timeline: "6 Months" },
        { name: "Law Firm", keyword: "Best Lawyer in Bangalore", growth: "+190% Enquiries", timeline: "3 Months" },
        { name: "Education Academy", keyword: "Online Coaching Delhi", growth: "+310% Admissions", timeline: "4 Months" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="SEO Portfolio" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">SEO Results</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">SEO Portfolio</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Real SEO results for real businesses. See how we've helped our clients dominate Google and drive measurable organic growth.
                </p>
            </motion.section>

            <motion.section
                className="bg-blue-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "1000+", label: "SEO Campaigns" },
                        { number: "#1", label: "Rankings Achieved" },
                        { number: "300%+", label: "Avg Traffic Growth" },
                        { number: "6 Months", label: "Avg to Page 1" },
                    ].map((s, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-4xl font-bold">{s.number}</div>
                            <div className="text-blue-200 mt-1">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">SEO Case Studies & Results</h2>
                    <p className="text-gray-600 mt-3">Numbers don't lie — here's proof of our SEO expertise.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {projects.map((p, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <NavLink to="/contact" className="block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                                <div className="text-3xl mb-3">📈</div>
                                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                                <div className="text-gray-500 text-sm mb-3">Target: <span className="text-blue-600 font-medium">"{p.keyword}"</span></div>
                                <div className="bg-green-50 rounded-lg p-3 text-center">
                                    <div className="text-2xl font-bold text-green-600">{p.growth}</div>
                                    <div className="text-gray-500 text-xs mt-1">Achieved in {p.timeline}</div>
                                </div>
                                <div className="mt-4 text-blue-600 text-sm font-medium">Get Similar Results →</div>
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-blue-600 text-white py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-4">Want These Results for Your Business?</h2>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto">Let's build your SEO success story together.</p>
                <NavLink to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">Get Free SEO Audit</NavLink>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default SEOPortfolio;
