import React from 'react';
import { Tab } from '@headlessui/react';
// import Image from 'next/image';
import classNames from 'classnames';
// import Button from './Button';
import SwiperCar from './SwiperCar';

const TabsHero = () => {
  return (
    <div className="mt-10 lg:mt-0 mx-auto p-3">
      <Tab.Group>
        <Tab.List className="grid grid-cols-1 lg:grid-cols-3 space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                selected ? 'bg-blue-500 text-white' : 'text-blue-500',
              )
            }
          >
            <h2 className="text-xl font-bold">Retro</h2>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                selected ? 'bg-blue-500 text-white' : 'text-blue-500',
              )
            }
          >
            <h2 className="text-xl font-bold">Classic</h2>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                selected ? 'bg-blue-500 text-white' : 'text-blue-500',
              )
            }
          >
            <h2 className="text-xl font-bold">Ecsclusive</h2>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel className="sm:px-0 rounded-xl bg-white p-3">
            <SwiperCar />
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <SwiperCar />
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <SwiperCar />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <Button /> */}
    </div>
  );
};

export default TabsHero;
