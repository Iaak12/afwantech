const GenericContent = ({ data }) => {
    const content = data?.content || "";

    if (!content) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="prose max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
};

export default GenericContent;
