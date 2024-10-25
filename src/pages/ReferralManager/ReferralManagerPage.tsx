import ContactUs from "./_components/ContactUs";
import HowItWork from "./_components/HowItWork";
import Introduction from "./_components/Introduction";

const ReferralManagerPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Introduction />
      <div className="flex flex-col gap-4 bg-neutral-7 p-4 flex-1">
        <HowItWork />
        <ContactUs />
      </div>
    </div>
  );
};

export default ReferralManagerPage;
