import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactTimeLine from "./ContactTimeLine";

const ContactSection = () => {
  return (
    <section className=" bg-dark-slate shadow-[0_0_76px_0_rgba(10,7,22,0.004)]">
      <div
        id="contact"
        className="w-full flex items-center justify-center overflow-hidden main-container"
      >
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <ContactTimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`Contact />`}</div>
            <div className="w-full grid-cols-1 md:grid-cols-5 grid lg:grid-cols-11 gap-y-6 md:gap-6 items-center">
              <ContactDetails />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
