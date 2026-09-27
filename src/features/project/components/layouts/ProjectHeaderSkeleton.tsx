import Skeleton from "@/shared/components/feedback/Skeleton";

const ProjectHeaderSkeleton = () => {
  return (
    <>
      <header
        className={
          "flex justify-between items-center shrink-0 " +
          "border-b border-border-primary py-4"
        }
      >
        <Skeleton className={"h-10 w-36"} />

        <section className={"flex items-center gap-3"}>
          <div className={"flex items-center"}>
            <Skeleton className={"w-8 h-8 rounded-full"} />
            <Skeleton className={"w-8 h-8 rounded-full -ml-2"} />
            <Skeleton className={"w-8 h-8 rounded-full -ml-2"} />
          </div>

          <Skeleton className={"h-10 w-24"} />
        </section>
      </header>

      <section className={"flex flex-col gap-1"}>
        <Skeleton className={"h-8 w-64"} />
      </section>

      <Skeleton className={"h-5 w-3/4 max-w-2xl"} />
    </>
  );
};

export default ProjectHeaderSkeleton;
