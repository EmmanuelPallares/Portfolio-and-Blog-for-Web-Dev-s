export const Template = () => {
  return (
    <div className="antialiased w-full text-gray-700">
      sss
      <div className="max-w-screen-md mx-auto">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="font-bold text-3xl text-gray-900">ssss</div>
            <div className="text-xl">sssss</div>
          </div>
          <div className="pt-16 pb-8">
            <div className="font-bold text-3xl text-gray-900">aaaaaaaaaaaa</div>
            <div className="text-xl">aaaaaaaaaaaa</div>
          </div>
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <a href="/">
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    Home
                  </a>
                </a>
              </li>
              <li className="mr-6">
                <a href="/about/">
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    About
                  </a>
                </a>
              </li>
              <li className="mr-6">
                <a
                  className="text-gray-700 border-none hover:text-gray-900"
                  href="https://github.com/ixartz/Next-js-Boilerplate"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-xl content">oliiii</div>

        <div className="border-t border-gray-300 text-center py-8 text-sm">
          © Copyright
          <span role="img" aria-label="Love">
            ♥
          </span>{" "}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </div>
      </div>
    </div>
  );
};
