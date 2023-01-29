import React from "react";
import WhySellLaptopCard from "./WhySellLaptopCard";

const WhySellLaptop = () => {
  const whySells = [
    {
      name: "Data Wiping",
      des: "Your privacy is key. We use Ministry of Defence standards to wipe the data from your laptop so you can rest assured.",
      image:
        "https://thinkcomputers.org/wp-content/uploads/2020/09/secure_data_wiping.png",
    },
    {
      name: "CPU Finder",
      des: "Of of the key metrics in valuing a used laptop is the processor that its installed. For the less 'tech savvy' users out there use this tool with the laptop you're selling and we will tell you what processor is in there!",
      image: "https://i.ibb.co/17LgGZj/8132846.png",
    },
    {
      name: "Postage",
      des: "We take the hard work out of positing a laptop to us. We send you a postage label FREE OF CHARGE and all you have to do is drop the laptop off at ANY Post Office.",
      image: "https://i.ibb.co/G9B0xN9/postage-icon-vector-isolated.jpg",
    },
    {
      name: "Faqs",
      des: "Questions, questions, questions! Read our FAQ's for our most common questions and answers, or call us to discuss.",
      image:
        "https://i.ibb.co/5Fw23JV/color-icon-frequently-asked-question-flat-illustration-vector.jpg",
    },
  ];
  return (
    <section className="mt-8 mb-14">
      <div className="text-center p-5">
        <h2 className="text-4xl text-violet-500 font-bold mb-3">Why you choose Sell Your Laptop</h2>
        <p>
          We understand that you have a choice and we aren't the only company
          buying used laptops - so why choose us? Simple, we pay more than
          anyone else and our customers trust us! Other companies ask 3 questions
          about your laptop to give you a quick price but this does not get you
          the best value! We ask a total of 7 questions which can be completed
          in less than 1 minute to give you the BEST PRICE for your laptop!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {whySells?.map((whySell, id) => (
          <WhySellLaptopCard whySell={whySell} key={id} />
        ))}
      </div>
    </section>
  );
};

export default WhySellLaptop;
