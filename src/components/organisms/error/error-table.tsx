import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { useFormContext } from "react-hook-form";
import { BundleResourceType } from "@/types";
import { ArrowUpRight } from "lucide-react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ErrorTable = () => {
  const sampleData = {
    // patient: {
    //   resourceType: "Patient",
    //   givenName: "John",
    //   familyName: "Doe",
    //   gender: "male",
    //   telecom: "1234567890",
    //   birthDate: "1990-01-01",
    // },
    // conditions: [
    //   {
    //     resourceType: "Condition",
    //     code: "Diabetes",
    //     status: "active",
    //     dateRecorded: "2021-01-01",
    //     severity: "moderate",
    //   },
    //   {
    //     resourceType: "Condition",
    //     code: "Hypertension",
    //     status: "active",
    //     dateRecorded: "2021-01-01",
    //     severity: "moderate",
    //   },
    // ],

    procedures: [
      {
        resourceType: "Procedure",
        code: "Appendectomy",
        status: "completed",
        date: "2021-01-01",
        performer: "Dr. Smith",
      },
      {
        resourceType: "Procedure",
        code: "Knee Replacement",
        status: "completed",
        date: "2021-01-01",
        performer: "Dr. Smith",
      },
    ],
  };

  return (
    <div>
      <table className="w-full">
        <thead className="border py-1 px-2 w-full rounded-tl-sm rounded-tr-sm">
          <tr>
            <th className="border-l p-1">Resource Type</th>
            <th className="border-l p-1">Record</th>
            <th className="border-l p-1">Attribute</th>
            <th className="border-l p-1">Value</th>
            <th className="border-l p-1">Link</th>
          </tr>
        </thead>
        <tbody className="gap-1 w-full">
          {sampleData.procedures.map((procedure, index) =>
            Object.entries(procedure).map(([key, value], idx) => (
              <tr className="border px-2" key={index}>
                {index === 0 && (
                  <td
                    rowSpan={Object.keys(procedure).length * sampleData.procedures.length}
                    className="p-1 font-bold text-lg"
                  >
                    Procedure
                  </td>
                )}
                {idx === 0 && (
                  <td rowSpan={Object.keys(procedure).length} className="text-center border-l p-1">
                    1
                  </td>
                )}

                <td className="border-l p-1">Given Name</td>
                <td className="border-l p-1"> Jhon</td>
                <td className="border-l p-1 text-center">
                  <ArrowUpRight className="w-4 h-4 mx-auto" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ErrorTable;
