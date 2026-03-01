import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const NewsEvents = () => {
    const news = [
        { date: "Feb 2026", category: "Award", title: "Afwan Tech Named Best SEO Company of the Year 2025", desc: "We are thrilled to announce that Afwan Tech has been honored with the prestigious 'Best SEO Company of the Year' award at the Digital Excellence Awards 2025.", tag: "bg-yellow-100 text-yellow-800" },
        { date: "Jan 2026", category: "Expansion", title: "Afwan Tech Launches Franchise Program Across India", desc: "Afwan Tech announces the launch of its nationwide franchise program, opening opportunities for entrepreneurs across tier-2 and tier-3 cities in India.", tag: "bg-green-100 text-green-800" },
        { date: "Dec 2025", category: "Milestone", title: "5000 Clients Served — A Major Milestone for Afwan Tech", desc: "We proudly celebrate serving over 5000 businesses across India. This milestone reflects our commitment to delivering exceptional digital services.", tag: "bg-blue-100 text-blue-800" },
        { date: "Nov 2025", category: "Event", title: "Afwan Tech at Digital Marketing Summit 2025", desc: "Our CEO delivered a keynote speech at the Digital Marketing Summit 2025, sharing insights on the future of AI-driven marketing and organic growth strategies.", tag: "bg-purple-100 text-purple-800" },
        { date: "Oct 2025", category: "Launch", title: "Introducing AI-Powered SEO Analytics Dashboard", desc: "Afwan Tech launches its proprietary AI-powered SEO analytics dashboard, offering clients real-time insights into their search performance.", tag: "bg-pink-100 text-pink-800" },
        { date: "Sep 2025", category: "Partnership", title: "Strategic Partnership with Google Premier Partner Network", desc: "Afwan Tech joins the Google Premier Partner Network, reinforcing our commitment to delivering best-in-class digital advertising results.", tag: "bg-red-100 text-red-800" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="News & Events" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">Latest Updates</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Stay updated with the latest news, announcements, milestones, and events from Afwan Tech.
                </p>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {news.map((item, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tag}`}>{item.category}</span>
                                <span className="text-gray-400 text-sm">{item.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">Read More →</button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-blue-600 text-white py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-3">Stay Updated with Afwan Tech</h2>
                <p className="text-blue-200 mb-8">Subscribe to get the latest news and digital marketing insights.</p>
                <div className="flex justify-center gap-3 max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-800 outline-none" />
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">Subscribe</button>
                </div>
            </motion.section>
        </PageMotion>
    );
};

export default NewsEvents;

