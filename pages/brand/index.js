import React from "react";

const Brand = () => {
  return (
    <>
      <div className="mb-6 p-3 text-white">
        <div className="bg-[#E93D44] ">Red Principal #E93D44</div>
        <div className="bg-[#751f22]"> Darknes Red #751f22</div>
        <div className="bg-[#AF2E33]"> Medium Red #AF2E33</div>
      </div>
      <div className=" m-6 p-3 text-white">
        <div className="bg-[#111823]">Blue Main #111823</div>
        <div className="bg-[#203449]">Blue Medium #203449</div>
        <div className="bg-[#4d5d6D]">Blue Light #4d5d6D</div>
      </div>
      <div className=" m-6 p-3 text-white">
        <div className="bg-[#222529]">Darkness Gray #222529</div>
        <div className="bg-[#010303]">Hero gradient image #010303</div>
        <div className="bg-[#4e5154]"> Medium Gray #4e5154</div>
        <div className="bg-[#D3D3D4] text-[#111823]">Light Gray #D3D3D4</div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Brand</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Color Pallete</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#E93D44] ">
              <dt className="text-sm font-medium text-gray-500 ">
                <div className="text-white">Red Principal</div>
              </dt>
              <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2 text-white">
                #E93D44
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#751f22] text-white">
              <dt className="text-sm font-medium ">Darknes Red</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#751f22</dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#AF2E33] text-white ">
              <dt className="text-sm font-medium">Medium Red</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#AF2E33</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $120,000
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Brand;
