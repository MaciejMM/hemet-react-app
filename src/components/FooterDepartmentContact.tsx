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
      department: 'Dział techniczno-handlowy',
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
    <div className="4 m-auto grid  max-w-c-xl grid-cols-2 gap-x-8 gap-y-12 border-b-1 border-light bg-black-75 px-4  py-16 md:grid-cols-3 lg:gap-4">
      {hemetContactList.map((user: Contact, index: number) => {
        return (
          <ul className="flex-1 list-none text-hm-black10" key={index}>
            <li className="pb-3  text-xl text-yellow-hm">{user.department}</li>
            <li className="grid grid-flow-row grid-cols-12 pb-2 text-white">
              <Person className="col-span-1 text-hm-yellow"></Person>
              <span className="col-span-11 pl-4 text-base">{user.name}</span>
            </li>

            <li className=" grid grid-flow-row grid-cols-12 pb-2 text-white">
              <Email className="col-span-1  text-hm-yellow"></Email>
              <a className="col-span-11 pl-4 text-base" href={user.emailTo}>
                {user.email}
              </a>
            </li>
            <li className=" grid grid-flow-row grid-cols-12 pb-2 text-white">
              <Call className="col-span-1 text-hm-yellow"></Call>
              <a className="col-span-11 pl-4 text-base" href={user.phoneText}>
                {user.phoneNumber}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
