"use client"; // Add this line at the top
import image2 from "../public/image2.jpg"
import AiImage from "../public/Ai.png"; // Import the image
import Image from "next/image";
import "animate.css";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <>

      {/* //////////////////////////////////////>>>>>>>>>     start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}
      <header className="text-gray-600 body-font bg-black ">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 ml-6 md:mb-0" >
            <img src="/rexon.jpg" style={{ height: "50px", width: "50px", borderRadius: "10px" }} />
            <span className="ml-3 text-xl pl-4 sm:text-2xl md:text-3xl text-white">ReXon Solution</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center pr-6 text-white">
            <a className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-white">Home</a>
            <a className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-white">About</a>
            <a className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-white">Projects</a>
            <a className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-white">Download Cv</a>
            <a className=" mr-5 text-sm sm:text-base px-2 sm:px-4 bg-green-500 py-1 text-red-500 rounded hover:bg-red-900 hover:text-white">Contact</a>
          </nav>

        </div>
      </header>


      {/* //////////////////////////////////////>>>>>>>>>     end start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}
      <div className="mx-16">

        <section className="text-gray-600 body-font  "  >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
                <span className="word word3 text-green-600"> Parvez</span>{" "}
                <span className="word word4 text-red-600">Ahmed</span>{" "}
                <span className="word word5">Developer</span>



              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                <span className="word word5">I'm a</span>{" "}
                <span className="word word5 text-blue-600">Front-End Developer</span>
              </h2>

              <p className="mb-8 leading-relaxed text-justify" >
                A Front-End Developer is responsible for creating the visual and interactive elements of a
                WEBSITE or WEB Application. We use HTML, CSS, JavaScript, React.js, Next.js, Bootstrap and Tailwind.Css
                to build responsive, user-friendly interfaces, ensuring a seamless user experience across various devices
                and browsers. By collaborating  with designers and back-end developers, optimizing performance and
                accessibility. Key skills include proficiency in frameworks like React, Vue, or Angular,
                as well as an understanding of web standards and best practices.
                .</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded animate__animated animate__jackInTheBox animate__delay-1s p-4rounded" alt="hero" src="image2.jpg" />
            </div>
          </div>
        </section>



        {/* //////////////////////////////////////>>>>>>>>>    Main message    <<<<<<<<<   ////////////////////////////////////////////////////// */}



        {/* ////////////////////////////////////////////////////     Techmology  ////////////////////////////////////////////////////////////////////////  */}
        <div className="bg-gray-100 md:px-10 px-4 py-12  font-[sans-serif] text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-5 ">"Top  Technology Trends in 2024"</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-20" >"The world is rapidly changing and moving towards AI and robotics." If you're looking for a more nuanced phrase, you might try: "The world is evolving at a rapid pace, increasingly leaning towards AI and robotics."</p>

          <div className="max-md:max-w-lg mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="AAi.png" alt="Blog Post 1" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">AI Robot</h3>
                  <p className="text-sm opacity-75">
                    An AI robot is a physical or virtual entity equipped with artificial intelligence that can perform tasks
                    autonomously or semi-autonomously. </p>
                </div>
              </div>



              <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="AI11.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Artificial intelligence </h3>
                  <p className="text-sm opacity-75">Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced
                    functions, including the ability to see, understand and translate spoken and written language. </p>
                  <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                </div>
              </div>

              <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/chatbot2.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">AI ChatBot</h3>
                  <p className="text-sm opacity-75">On an operational level for business use, AI is a set of technologies that are based
                    primarily on machine learning and deep learning, used for data analytics, predictions and forecasting, object categorization.</p>
                  <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                </div>
              </div>

              <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="chatbot4.jpg" alt="Blog Post 1" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">BlockChain</h3>
                  <p className="text-sm opacity-75">
                    Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple
                    computers in a way that ensures security, transparency, and immutability. Each transaction, or "block,"
                    is linked to the previous one, forming a "chain" of blocks. </p>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="software.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Internet of Things</h3>
                  <p className="text-sm opacity-75 text-justify">The Internet of Things (IoT) refers to the network of
                    interconnected devices  and systems that communicate and exchange data with each other over the internet.</p>
                  <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                </div>
              </div>


              <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="clould.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Clould Computing</h3>
                  <p className="text-sm opacity-75">Cloud computing is a technology that delivers computing resources
                    and services over the internet, allowing users to access and manage data, applications, and infrastructure
                    on-demand without needing to own or maintain physical hardware</p>
                  <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                </div>
              </div>

              


            </div>


          </div>
        </div>

        {/* ///////////////////////////////////////////////////>>>>> technology end <<<<<<< ////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////>>>>>>> start Our Services <<<<<<      //////////////////////////////////////////////////////////// */}

        <div className="font-[sans-serif] bg-gradient-to-r  from-purple-800 to-indigo-800 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">Our Exclusive Services</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/Ai.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">Artificial Intelligence</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI service provides comprehensive
                  solutions to harness the power of artificial intelligence, offering everything from strategic consulting
                  and custom AI development to seamless integration, deployment, and ongoing support. We specialize in creating
                  tailored machine learning models, natural language processing tools, and computer vision systems, all while
                  ensuring ethical practices and regulatory compliance.</p>
              </div>

              {/* The rest of your code */}
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/chatBot.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">AI Chatbot</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI chatbot service delivers advanced conversational
                  solutions designed to enhance user engagement and streamline interactions. We develop intelligent chatbots capable
                  of understanding natural language, providing accurate responses. With features like
                  personalized interactions, automated customer support,  our chatbots
                  improve efficiency and customer satisfaction. </p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/mobileApp.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">Mobile App Developer</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">A Mobile App Developer designs, builds, and maintains
                  software applications for mobile devices, such as smartphones and tablets. They work with various programming
                  languages and development frameworks to create apps that are functional, user-friendly, and optimized for performance
                  across different mobile platforms (e.g., iOS, Android)</p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/ecommerce2.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">E-Commerce Websites</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">E-Commerce websites are online platforms that facilitate
                  buying and selling of products or services over the internet. They provide a virtual storefront where businesses can
                  showcase their products, manage inventory, process transactions, and handle customer interactions. Key features often
                  include product catalogs, shopping carts, secure payment gateways, user accounts, and order tracking.</p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/developer.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">Web Design</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Web design involves creating the visual and functional
                  aspects of websites. It encompasses the layout, color schemes, typography, graphics, and overall user experience. Web
                  designers use various tools and techniques to ensure that a website is aesthetically pleasing, intuitive, and easy
                  to navigate. The goal is to create a user-friendly interface that effectively communicates the brand’s message and
                  meets the needs of its target audience</p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src="/consultant.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                <h3 className="text-xl font-semibold mb-3">Software Consulting</h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Software consulting involves providing expert
                  advice and guidance on software development and technology solutions. Consultants work with businesses to
                  identify their software needs, recommend appropriate technologies, and develop strategies to achieve their
                  goals. This can include assessing current systems, designing custom software solutions, overseeing
                  implementation, and optimizing performance. </p>
              </div>


            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////>>>>>>>  End Our Services <<<<<<      //////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////>>>>>>> start  Gallery <<<<<<      //////////////////////////////////////////////////////////// */}


        {/* /////////////////////////////////////////////>>>>>>> end Gallery <<<<<<      //////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////>>>>>>> Start about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Our Work</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 text-justify w-full leading-relaxed text-gray-500">Front-End Developers create visually engaging
                and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring a seamless experience across devices
                and browsers. Back-End Developers handle server-side logic, database management, and API integration,
                ensuring robust and scalable web applications. </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="front.jpg" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Front End Developer</h2>
                  <p className="leading-relaxed text-base">Front-End Developers create visually engaging and user-friendly interfaces using HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="backEnd.jpg" alt="content" />

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Back End Developer</h2>
                  <p className="leading-relaxed text-base">Back-End Developers handle server-side logic, database management,
                    and API integration, ensuring robust and scalable web applications. </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////////>>>>>>> end  about Our work <<<<<<      //////////////////////////////////////////////////////////// */}


      </div>

      <style jsx>{`
  .word {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }
  .word1 {
    animation-delay: 0s;
  }
  .word2 {
    animation-delay: 1s;
  }
  .word3 {
    animation-delay: 2s;
  }
  .word4 {
    animation-delay: 3s;
  }
  .word5 {
    animation-delay: 4s;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`}</style>

    </>
  );
}

