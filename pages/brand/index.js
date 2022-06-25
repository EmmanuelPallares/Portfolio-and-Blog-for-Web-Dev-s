import React from "react";

const Brand = () => {
  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Brand</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Color Pallete</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                On someday of week, I launch my new refreshed site with new
                custom color bar inspired in my favorite colors at moment. On
                this page, you will find resources for quote o legal reply. If
                you need more information or have any questions, please don’t
                hesitate to contact us. !
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#E93D44] ">
              <dt className="text-sm font-medium text-gray-500 ">
                <div className="text-white">Main Red</div>
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
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#111823] text-white">
              <dt className="text-sm font-medium">Blue Main</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#111823</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#203449] text-white">
              <dt className="text-sm font-medium">Blue Medium</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#203449</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#4d5d6D] text-white">
              <dt className="text-sm font-medium">Blue Light</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#4d5d6D</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#222529] text-white">
              <dt className="text-sm font-medium">Darkness Gray</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#222529</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#4e5154] text-white">
              <dt className="text-sm font-medium">Medium Gray</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#4e5154</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#D3D3D4] text-black">
              <dt className="text-sm font-medium">Light Gray #D3D3D4</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">#D3D3D4</dd>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Assets
              </h3>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Assets</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">logos</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="https://drive.google.com/drive/folders/14DDDd4K-wSpxTXKpV1rsnVbyRaJt8tFp?usp=sharing"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">Images</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="https://drive.google.com/drive/folders/142R3ZXvYeRrkLJ9qgJUpgmrJdC_rfTvL?usp=sharing"
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
