

const AdCenter = () => {
    return (
        <>
            <div className="p-4 pb-20 mx-full">
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                    <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Ad Creative</h3></div>
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">How do you want your ad to look?
                            </label>
                                <div className="relative">
                                    <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                        </div>

                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Headline
                            </label>
                                <div className="relative">
                                    <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                        </div>

                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description
                            </label>
                                <div className="relative">
                                    <textarea placeholder="Enter your message" rows="3" className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden   bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Ad Format <span>*</span>
                            </label>
                                <div className="relative">
                                    <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                        </div>
                        <div className="mb-3">
                            <label> Media 0/5 upload multiple images or videos (2-5 files)</label>
                            <div className="flex">
                                <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 py-5 upload-box
      ">                                    <input type="file" />
                                    <div className="dz-message flex flex-col items-center m-0!">
                                        <div className="mb-[22px] flex justify-center">
                                            <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                                <svg className="fill-current" width="29" height="28" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className=" text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">Drag and drop your PNG, JPG, WebP, SVG images here or browse</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Button <span>*</span>
                            </label>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                        <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                        <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                        <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                        <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Website URL
                            </label>
                                <div className="relative">
                                    <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                        </div>

                    </div>

                </div>
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                    <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Audience</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Who should see your ad?</p>
                    </div>
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Location
                            </label>
                                <div className="relative">
                                    <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                        </div>

                        <div className="grid grid-flow-col gap-4">
                            <div className="mb-3">
                                <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Age <span>*</span>
                                </label>
                                    <div className="relative">
                                        <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                            <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Age <span>*</span>
                                </label>
                                    <div className="relative">
                                        <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                            <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                            <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Gender
                            </label>
                                <div className="flex flex-wrap items-center gap-8">
                                    <label for="radio1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                        <input id="radio1" className="" type="radio" />All</label>
                                    <label for="radio2"
                                        className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                        <input id="radio2" className="" type="radio" />

                                        Men</label>
                                    <label for="radio3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                        <input id="radio3" className="" type="radio" value="option3" name="group1" />Women</label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Membership Type
                            </label>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                        <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                        <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                        <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                        <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                    </select>

                                </div>
                            </div>
                        </div>






                    </div>

                </div>

                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                    <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Duration</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Who should see your ad?</p>
                    </div>
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">




                        <div className="mb-3">

                            <div className="items-center mb-3">
                                <label for="radio1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="radio1" className="" type="radio" /></label>
                                <h4>Run this ad continuously</h4>
                                <small>Your add will continue to run on a daily budged unless you pause it, which you can do at any time</small>
                            </div>
                            <div className="items-center mb-3">
                                <label for="radio3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="radio3" className="" type="radio" value="option3" name="group1" /></label>
                                <h4>Run this ad between specific dates</h4>
                                <small>Your add will continue to run on a daily budged unless you pause it, which you can do at any time</small>
                            </div>


                        </div>

                        <div className="mb-3">
                            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Daily budget</h3>

                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-800 dark:bg-white/[0.03] xl:py-[27px]">
                                <h2 className="text-center">$ 67.00 USD</h2>
                            </div>

                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                        </div>






                    </div>

                </div>

                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                    <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Placement</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Placement are where your ad will be shown and can include indivisual and multi-seller ad format</p>
                    </div>
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">

                        <p>Choose where you want to show your ad.The more placements you select, the more opportunities you'll have to reach your target audience</p>


                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check1" className="" type="checkbox" />General wall</label>
                                <div>

                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check2" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check2" className="" type="checkbox" />Fan wall</label>
                                <div>

                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check3" className="" type="checkbox" />Favourite wall</label>
                                <div>
                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check4" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check4" className="" type="checkbox" />Prayer wall</label>
                                <div>
                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check5" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check5" className="" type="checkbox" />Physical wall</label>
                                <div>
                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                <label for="check6" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    <input id="check6" className="" type="checkbox" />Virtual church wall</label>
                                <div>
                                    <small>Show your ad on general wall placement</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full"><button className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Create ad</button></div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default AdCenter
