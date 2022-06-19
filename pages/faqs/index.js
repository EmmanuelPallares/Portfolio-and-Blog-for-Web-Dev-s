import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { getFaqsProps } from "../../lib/data";

export const getStaticProps = async () => {
  const faqs = await getFaqsProps();
  return {
    props: faqs,
  };
};

const Home = (faqs) => {
  const ARRAYOFFAQS = faqs.props.faqcks;

  return (
    <section className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div
            className="flex-1 wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <div className="px-4 mx-auto lg:ml-0">
              <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                Faqs
              </h3>
              <div>
                {ARRAYOFFAQS.map(({ title, content }) => (
                  <Disclosure
                    as="div"
                    className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                          {title}
                          <PlusCircleIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-6 h-6`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                          {content}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
