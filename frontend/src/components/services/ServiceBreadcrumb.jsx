const ServiceBreadcrumb = ({ service }) => {
  return (
    <div className="bg-[#F9FAFB] py-3 border-b">
      <div className="max-w-7xl mx-auto px-6 text-sm text-[#64748B]">
        Home <span className="mx-2">›</span>
        Services <span className="mx-2">›</span>
        <span className="text-[#0F172A] font-medium">{service}</span>
      </div>
    </div>
  );
};

export default ServiceBreadcrumb;

