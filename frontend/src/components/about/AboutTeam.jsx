import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const AboutTeam = ({ data }) => {
    const badge = data?.badge || "Meet Our Experts";
    const title = data?.title || "The Visionaries Behind Our Success";
    const description = data?.description || "Our team comprises passionate digital strategists, brilliant developers, and creative marketers dedicated to elevating your brand's digital presence.";
    const members = data?.members || [
        {
            name: "Rahul Ranjan Singh",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
            desc: "Awarded Best Business Growth Coach in India, Rahul leads the vision and strategy for Afwan Tech's global expansion.",
            linkedin: "#", twitter: "#", email: "#"
        },
        {
            name: "Priya Sharma",
            role: "Head of Marketing",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
            desc: "An expert in driving organic growth and managing top-tier digital campaigns that deliver measurable ROI.",
            linkedin: "#", twitter: "#", email: "#"
        },
        {
            name: "Amit Desai",
            role: "Technical Director",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
            desc: "Oversees all technological architecture, ensuring high-performance web solutions and innovative software development.",
            linkedin: "#", twitter: "#", email: "#"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
                        {badge}
                    </span>
                    <h2 className="text-4xl font-bold text-[#123447] mt-3 mb-6">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {description}
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={member.image || "https://placehold.co/400"}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        {member.linkedin && <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                            <FaLinkedinIn />
                                        </a>}
                                        {member.twitter && <a href={member.twitter} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                                            <FaTwitter />
                                        </a>}
                                        {member.email && <a href={member.email.includes('@') ? `mailto:${member.email}` : member.email} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                                            <FaEnvelope />
                                        </a>}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold text-[#123447] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium text-sm mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {member.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutTeam;
