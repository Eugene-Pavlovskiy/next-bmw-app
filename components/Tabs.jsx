import React from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import classNames from 'classnames';
import Button from './Button';

const TabsHero = () => {
  return (
    <div className="max-w-[1240px] mt-10 lg:mt-0 mx-auto p-3">
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
            <h2 className="text-xl font-bold">M-Models</h2>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                selected ? 'bg-blue-500 text-white' : 'text-blue-500',
              )
            }
          >
            <h2 className="text-xl font-bold">X-models</h2>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                selected ? 'bg-blue-500 text-white' : 'text-blue-500',
              )
            }
          >
            <h2 className="text-xl font-bold">i-Models</h2>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 rounded-xl bg-white p-3">
            <div className="m-2">
              <h2 className="text-2xl font-bold">M-Models</h2>
              <p>
                Numerous innovative technologies in the new BMW 3 Series Sedan
                allow the driver and vehicle to communicate with each other
                conveniently: The BMW Curved Display offers a full overview of
                all important information and convenient operation by touch
                Unlimited connectivity through smartphone integration, for
                example to plan routes conveniently on your smartphone and then
                transfer them to your vehicle Experience intuitive operation
                through voice control.
              </p>
            </div>
            <Image src="/assets/bmw4.png" alt="" width={600} height={200} />
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 rounded-xl bg-white p-3">
            <div className="m-2">
              <h2 className="text-2xl font-bold">X-models</h2>
              <p>
                In the new BMW X6, maximum sporty driving dynamics meet athletic
                design and luxurious equipment: Powerful BMW M TwinPower Turbo
                8-cylinder internal combustion engine with 390 kW (530 hp).
                Maximum driving comfort thanks to optional xOffroad package and
                8-speed Steptronic Sport transmission Powerful presence thanks
                to illuminated BMW &#34;Iconic Glow&#34; kidney (optional) and
                standard M sports package Modern technologies and high-quality
                materials such as &#34;CraftedClarity&#34; glass applications
                (optional).
              </p>
            </div>
            <Image src="/assets/bmw2.png" alt="" width={600} height={200} />
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 rounded-xl bg-white p-3">
            <div className="m-2">
              <h2 className="text-2xl font-bold">i-Models</h2>
              <p>
                The seventh generation of the BMW 7 Series - the BMW i7 - is the
                first to be equipped with an all-electric drive, but the 7
                Series is also redefining the class with regard to driving
                assistance, connectivity, entertainment and also lighting and
                spatial concepts.
              </p>
            </div>
            <Image src="/assets/bmw6.png" alt="" width={600} height={200} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Button />
    </div>
  );
};

export default TabsHero;
