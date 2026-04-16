import Button from "@/shared/components/Button.tsx";

const ProjectTitleSection = () => {
    return (
        <div className={"flex items-center justify-between"}>
            <h1 className={"font-bold text-2xl text-text-primary"}>Projects</h1>
            <Button fullWidth={false}>Create Project</Button>
        </div>
    );
};

export default ProjectTitleSection;