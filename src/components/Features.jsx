// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const Features = () => {
//   return (
//     <div className="w-full bg-zinc-950 text-white py-16 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20">
//       <h1 className="text-center text-[24px] md:text-[35px] lg:text-[40px] font-semibold leading-tight">
//         Explore Powerful Features to Elevate Your Blogging Experience
//       </h1>

//       <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center mt-10 gap-12">
//         {/* Accordion Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-5 md:space-y-6 lg:space-y-8">
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full max-w-[500px] md:max-w-full"
//           >
//             {/* Feature 1 */}
//             <AccordionItem value="item-1">
//               <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
//                 How can I start writing on Blogwala?
//               </AccordionTrigger>
//               <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
//                 Getting started is easy! Simply create an account, explore
//                 trending topics, and start publishing your thoughts within
//                 minutes.
//               </AccordionContent>
//             </AccordionItem>

//             {/* Feature 2 */}
//             <AccordionItem value="item-2">
//               <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
//                 Can I customize my blog&apos;s appearance?
//               </AccordionTrigger>
//               <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
//                 Yes! Blogwala offers customizable templates and intuitive design
//                 options to make your blog look unique and engaging.
//               </AccordionContent>
//             </AccordionItem>

//             {/* Feature 3 */}
//             <AccordionItem value="item-3">
//               <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
//                 How does Blogwala help increase my audience?
//               </AccordionTrigger>
//               <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
//                 Blogwala promotes your content through a network of readers and
//                 writers, giving your stories the visibility they deserve.
//               </AccordionContent>
//             </AccordionItem>

//             {/* Feature 4 */}
//             <AccordionItem value="item-4">
//               <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
//                 Is Blogwala free to use?
//               </AccordionTrigger>
//               <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
//                 Absolutely! Blogwala is free for writers and readers alike. You
//                 can start blogging and connecting with the community without any
//                 cost.
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Blogwala Features"
//             className="w-full max-w-[500px] md:max-w-full h-auto rounded-lg shadow-lg object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Features = () => {
  return (
    <div className="w-full bg-zinc-950 text-white py-16 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20">
      <h1 className="text-center text-[24px] md:text-[35px] lg:text-[40px] font-semibold leading-tight">
        Explore Powerful Features to Elevate Your Blogging Experience
      </h1>

      <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center mt-10 gap-12">
        {/* Accordion Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-5 md:space-y-6 lg:space-y-8">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[500px] md:max-w-full"
          >
            {/* Feature 1 */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                How can I start writing on Blogwala?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                Getting started is easy! Simply create an account, explore
                trending topics, and start publishing your thoughts within
                minutes.
              </AccordionContent>
            </AccordionItem>

            {/* Feature 2 */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                Can I customize my blog&apos;s appearance?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                Yes! Blogwala offers customizable templates and intuitive design
                options to make your blog look unique and engaging.
              </AccordionContent>
            </AccordionItem>

            {/* Feature 3 */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                How does Blogwala help increase my audience?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                Blogwala promotes your content through a network of readers and
                writers, giving your stories the visibility they deserve.
              </AccordionContent>
            </AccordionItem>

            {/* Feature 4 */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                Is Blogwala free to use?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                Absolutely! Blogwala is free for writers and readers alike. You
                can start blogging and connecting with the community without any
                cost.
              </AccordionContent>
            </AccordionItem>

            {/* New Feature 5 */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                Can I collaborate with other writers?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                Yes! Blogwala allows seamless collaboration, making it easy for
                multiple authors to contribute and edit posts together.
              </AccordionContent>
            </AccordionItem>

            {/* New Feature 6 */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="md:text-[20px] lg:text-[22px] text-[16px]">
                How secure is my content on Blogwala?
              </AccordionTrigger>
              <AccordionContent className="md:text-[14px] lg:text-[15px] text-[14px] text-zinc-400 leading-relaxed">
                We prioritize security by using end-to-end encryption and
                ensuring that your content is safe and protected at all times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blogwala Features"
            className="w-full max-w-[500px] md:max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
