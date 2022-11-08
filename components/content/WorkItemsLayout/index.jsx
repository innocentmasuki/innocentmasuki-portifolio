import { useWindowSize } from "hooks/useWindowSize";
import WorkItem from "../WorkItem";

const WorkItemsLayout = ({ works }) => {
  const width = useWindowSize().width;

  return (
    <div className="flex flex-row gap-4 my-10">
      {width < 768 && (
        <div className="flex flex-col gap-4 w-full">
          {works.map((work, index) => (
            <div className="w-full" key={index}>
              <WorkItem work={work} />
            </div>
          ))}
        </div>
      )}
      {width >= 768 && width < 1024 && (
        <>
          {[0, 1].map((start, index) => (
            <div key={index} className="flex flex-col gap-4 w-1/2">
              {works.map(
                (work, index) =>
                  start === index % 2 && (
                    <div className="w-full" key={index}>
                      <WorkItem work={work} />
                    </div>
                  )
              )}
            </div>
          ))}
        </>
      )}
      {width >= 1024 && width < 1280 && (
        <>
          {[0, 1, 2].map((start, index) => (
            <div key={index} className="flex flex-col gap-4 w-1/3">
              {works.map(
                (work, index) =>
                  start === index % 3 && (
                    <div className="w-full" key={index}>
                      <WorkItem work={work} />
                    </div>
                  )
              )}
            </div>
          ))}
        </>
      )}
      {width >= 1280 && (
        <>
          {[0, 1, 2, 3].map((start, index) => (
            <div key={index} className="flex flex-col gap-4 w-1/4">
              {works.map(
                (work, index) =>
                  start === index % 4 && (
                    <div className="w-full" key={index}>
                      <WorkItem work={work} />
                    </div>
                  )
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WorkItemsLayout;
