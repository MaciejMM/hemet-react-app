import React from 'react';
import { Call, Email, Person } from '@mui/icons-material';

type Contact = {
  name: string;
  department: string;
  email: string;
  emailTo: string;
  phoneNumber: string;
  phoneText: string;
};

export const FooterDepartmentContact = () => {
  const hemetContactList: Contact[] = [
    {
      name: 'Aleksandra Daros',
      department: 'Dział handlowy',
      email: 'aleksandra.daros@hemet.hg.pl',
      emailTo: 'mailto:aleksandra.daros@hemet.hg.pl',
      phoneNumber: '+48 600 432 556',
      phoneText: 'tel:+48600432556',
    },
    {
      name: 'inż. Ryszard Graf',
      department: 'Dział techniczny',
      email: 'ryszard.graf@hemet.hg.pl',
      emailTo: 'mailto:ryszard.graf@hemet.hg.pl',
      phoneNumber: '+48 664 936 374',
      phoneText: 'tel:+48664936374',
    },
    {
      name: 'inż. Tomasz Zapłata',
      department: 'Dział techniczno-handlowy',
      email: 'tomasz.zaplata@hemet.hg.pl',
      emailTo: 'mailto:tomasz.zaplata@hemet.hg.pl',
      phoneNumber: '+48 882 145 891',
      phoneText: 'tel:+48882145891',
    },
  ];

  return (
    <div className=" m-auto grid  max-w-c-xl grid-cols-1 gap-x-8 gap-y-8 border-b-1 border-light bg-black-75 px-4  py-16 md:grid-cols-3 lg:gap-4">
      {hemetContactList.map((user: Contact, index: number) => {
        return (
          <ul className="flex-1 list-none text-hm-black10" key={index}>
            <li className="pb-4  text-xl text-yellow-hm" data-testid={`userDepartment-${index}`}>
              {user.department}
            </li>
            <li className="grid grid-flow-row grid-cols-12 pb-3 text-white">
              <Person className="col-span-1 text-hm-yellow"></Person>
              <span className="col-span-11 pl-4 text-base" data-testid={`userName-${index}`}>
                {user.name}
              </span>
            </li>
            <li className=" grid grid-flow-row grid-cols-12 pb-3 text-white">
              <Email className="col-span-1  text-hm-yellow"></Email>
              <a className="col-span-11 pl-4 text-base" data-testid={`userEmailTo-${index}`} href={user.emailTo}>
                {user.email}
              </a>
            </li>
            <li className=" grid grid-flow-row grid-cols-12 text-white">
              <Call className="col-span-1 text-hm-yellow"></Call>
              <a className="col-span-11 pl-4 text-base" data-testid={`userPhoneText-${index}`} href={user.phoneText}>
                {user.phoneNumber}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
