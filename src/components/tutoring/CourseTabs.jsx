import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function CourseTabs({ courseInfo }) {
  return (
    <div className="flex w-full justify-left pt-4 px-4 min-h-64">
      <div className="w-full max-w-full min-h-max">
        <TabGroup>
          <TabList className="flex flex-wrap w-full">
            {courseInfo.map((type) => (
              <Tab
                key={type.subject}
                className="max-w-full min-w-max rounded-md py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
              >
                <span class="hidden sm:flex">{type.subject}</span>
                <span class="flex sm:hidden">{type.abbreviation}</span>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {courseInfo.map(({ subject, courses }) => (
              <TabPanel key={subject} className="rounded-xl">
                <ul className="list-disc">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="relative rounded-md p-2 text-sm/3"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
