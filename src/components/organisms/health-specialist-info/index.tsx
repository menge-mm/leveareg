import styles from "./HealthSpecialistInfo.module.css";
import { faq } from "./faq";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
function SoftwareInformationComponent() {
  return (
    <div className="py-2 px-3 min-h-[60vh] max-w-[1024px]">
      <Accordion type="single" collapsible className="w-full px-2">
        {faq.map((feature) => (
          <AccordionItem
            value={feature.id}
            key={feature.id}
            className="border-gray-300 last:border-none"
          >
            <AccordionTrigger className="hover:no-underline hover:text-primary hover:bg-slate-100">
              <div className="flex gap-3 item-center">
                <span className="text-2xl -translate-y-1">{feature.emoji}</span>
                <span className="text-lg font-semibold">{feature.title} </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-3 mb-1">{feature.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default SoftwareInformationComponent;
