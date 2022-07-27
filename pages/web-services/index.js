 import React from 'react'
 
 const Home = () => {
   return (
        <div>
    <section className="pt-12">
                    <div className="container py-12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/assets/imgs/placeholders/img-6.jpg" alt="Monst" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                                <div className="max-w-md-2">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose us
                                        </span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            We Provide Best <br />
                                            <span className="text-blue-500">Web design </span>services
                                        </h2>
                                    </div>

                                    <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>

                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">4</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                  <section className="pb-4">
                  <div className="container">
                      <div className="flex flex-wrap justify-between pt-8 pb-16 px-3">
                          <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                  </svg>
                              </div>
                              <div className="sm:py-2 ml-2 sm:ml-6">
                                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                                  <span className="sm:text-2xl font-bold font-heading count">
                                      {/* <CounterUp count={150} time={3} /> */}
                                  </span>
                                  <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                              </div>
                          </div>
                          <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                  </svg>
                              </div>
                              <div className="sm:py-2 ml-2 sm:ml-6">
                                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                                  <span className="sm:text-2xl font-bold font-heading count">
                                      {/* <CounterUp count={58} time={3} /> */}
                                  </span>
                                  <span className="sm:text-2xl font-bold font-heading"> k </span>
                                  <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                              </div>
                          </div>
                          <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                  </svg>
                              </div>
                              <div className="sm:py-2 ml-2 sm:ml-6">
                                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                                  <span className="sm:text-2xl font-bold font-heading count">
                                      {/* <CounterUp count={500} time={3} /> */}
                                  </span>
                                  <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                              </div>
                          </div>
                          <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                  </svg>
                              </div>
                              <div className="sm:py-2 ml-2 sm:ml-6">
                                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                                  <span className="sm:text-2xl font-bold font-heading count">
                                      {/* <CounterUp count={320} time={3} /> */}
                                  </span>
                                  <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              </div>

   
   )
 }
 
 export default Home