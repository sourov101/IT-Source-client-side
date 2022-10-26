import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const FAQ = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className='container'>
            <Fragment>
                <Accordion className='my-10 ml-10' open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        What do we provide?
                    </AccordionHeader>
                    <AccordionBody>
                        We are providing CSE related course like c, c++, python language as well as JavaScript, react, Bootstraps.
                    </AccordionBody>
                </Accordion>
                <Accordion className='my-10 ml-10' open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How do we accept payment?
                    </AccordionHeader>
                    <AccordionBody>
                        We accept bkash, credit card and any other e-banking.
                    </AccordionBody>
                </Accordion>

            </Fragment>

        </div>
    );
};

export default FAQ;