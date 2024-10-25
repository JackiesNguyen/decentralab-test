const ContactUs = () => {
  return (
    <div className="bg-neutral-6 px-10 py-12 sm:p-6 flex items-center justify-center flex-1">
      <div className="flex flex-col">
        <h2 className="text-base xl:text-lg not-italic font-bold leading-6 text-gray-1 max-w-[300px] xl:max-w-[350px] text-center">
          Apply <span className="gradient-text">Copin Affilate Program</span> to
          get more benefits!
        </h2>
        <div className="flex items-center text-primary gap-2 text-[13px] not-italic font-semibold leading-6 justify-center hover:underline">
          <a href="/">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
