import ganaraa from "../img/ganaraa.jpg"

function Index() {
    return(
        <div>
            <div className="grid bg-no-repeat bg-cover w-full h-screen relative content-center" style={{backgroundImage: `url(${ganaraa})`}}>
                <h2 className="text-zinc-300 text-2xl text-left ml-20 mb-2 mt-44">WELCOME TO</h2>
                <h1 className="text-zinc-300 text-5xl text-left font-bold ml-20 mb-5 mt-5 animate-bounce ">GANARA ART SPACE</h1>
                <h2 className="text-zinc-300 text-lg text-left ml-20">A Futuristic Art Healing Space</h2>
                <div className="grid w-auto">
                    <a href="/Exhibitions" className="text-white w-36 text-center ml-20 mt-5 px-3 py-2 text-sm font-medium rounded-lg transition ease-in-out delay-150 bg-stone-600 hover:-translate-y-1 hover:scale-110 hover:bg-stone-800 duration-300">Read More</a> 
                </div>
            </div>
            <div className="container mx-auto p-4 md:p-0 mb-32 mt-32">
                <div className="shadow-lg mx-auto flex flex-wrap w-full lg:w-4/5">
                    <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" >
                        <img src="https://jakartacontemporaryceramic.files.wordpress.com/2016/11/logo-ganara-art-space-01.jpg"></img>
                        <div className="absolute text-xl">
                            <i className="text-white fa fa-heart hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="bg-white w-full md:w-2/3">
                        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                            <div className="bg-stone-300 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                                <p className="text-slate-700 text-lg text-justify ml-10 mb-10 mt-10 mr-10"><b>Ganara Art</b>, a cultural arts education institution founded by Tita Djumaryo in 2013, has several studios spread across several places. Ganara Art is expected to be a destination for various groups including family explorers, young workers, and art enthusiasts who have a modern and dynamic spirit. With various facilities that aim to offer a holistic experience in expressing themselves through art. The studio carries the theme Explore Indonesian Archipelago with a Touch of Arts where they present various elements such as earth, water, fire, and air into the material selection, layout, and various art installations displayed. Ganara Art as a one-stop art experience center where visitors of all ages and skill levels can engage in various creative activities such as painting on canvas and fabric products, handbuilt pottery, pottery wheel, interactive installations, art gallery, multipurpose stage, and VIP class room can facilitate visitors who need an exclusive area for special events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <p className=" text-neutral-700 text-3xl text-center font-bold pb-10"> &#x00B0;&#x02D6;&#x2727; What did they say?  &#x30FB;*&#x3002;</p>
                </div>
                <div className="grid gap-4 text-center md:grid-cols-3 ml-20 mr-20 mb-32">
                    <div className="bg-white border border-gray-200 dark:bg-stone-300 dark:border-gray-700 block rounded-lg shadow-lg transform transition-all hover:scale-90">
                        <div className=" bg-[#9d8f78] h-28 overflow-hidden rounded-t-lg"></div>
                        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                        </div>
                        <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">Megan Diandra</h4>
                            <hr />
                            <p className="mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg> Nice place for weekend activities. Tried their pottery class and def didn't regret it. The teacher is nice and helpful. The place itself is not that big. The class only capable to have 10 students if I'm not mistaken, small but nice.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 dark:bg-stone-300 dark:border-gray-700 block rounded-lg shadow-lg transform transition-all hover:scale-90">
                        <div className="bg-[#9d8f78] h-28 overflow-hidden rounded-t-lg"></div>
                        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                        </div>
                        <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">Desita N</h4>
                            <hr />
                            <p className="mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg> Nice place for workshop, exhibition, even hangout with friends
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 dark:bg-stone-300 dark:border-gray-700 block rounded-lg shadow-lg transform transition-all hover:scale-90">
                        <div className="bg-[#9d8f78] h-28 overflow-hidden rounded-t-lg"></div>
                        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                        </div>
                        <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">Liah</h4>
                            <hr />
                            <p class="mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg> Fun and relaxing place to try something new with friends the one thing i would change about the experience is to add some soft music playing in the background!!
                            </p>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="bg-neutral-400">
                <h1 className="text-neutral-800 text-3xl text-left font-bold ml-20 pt-10">Get In Touch!</h1>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a className="text-base leading-6 text-neutral-800 hover:text-gray-900"> Whatsapp </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base leading-6 text-neutral-800 hover:text-gray-900"> Instagram </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base leading-6 text-neutral-800 hover:text-gray-900"> Youtube </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base leading-6 text-neutral-800 hover:text-gray-900"> Email </a>
                        </div>
                        <div className="px-5 py-2">
                            <a className="text-base leading-6 text-neutral-800 hover:text-gray-900"> Website </a>
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="https://wa.me/082211011050" className="text-neutral-800 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </a>
                        <a href="hhttps://instagram.com/ganaraartspace?igshid=OGQ5ZDc2ODk2ZA==" className="text-neutral-800 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://youtube.com/@GANARAART" className="text-neutral-800 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        <a href="mailto:classes@ganara.art" className="text-neutral-800 hover:text-gray-900 dark:hover:text-white">
                            <svg className="h-5 w-5" viewBox="0 0 24 24 "  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a href="https://ganara-art-apps.qore.dev/page/ijx?" className="text-neutral-800 hover:text-gray-900 dark:hover:text-white">
                            <svg className="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-neutral-800 text-center mt-8 text-base leading-6"> © 2023 GanaraArt, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
        
        
    );
}

export default Index;