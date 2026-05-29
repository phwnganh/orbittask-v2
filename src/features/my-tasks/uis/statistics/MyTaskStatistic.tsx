
const MyTaskStatistic = () => {
    return (
        <div className={"grid grid-cols-4 gap-4"}>
            {[
                {
                    label: "Today",
                    value: 3,
                },
                {
                    label: "Overdue",
                    value: 2,
                },
                {
                    label: "Upcoming",
                    value: 8,
                },
                {
                    label: "Completed",
                    value: 14,
                },
            ].map((item) => (
                <div
                    key={item.label}
                    className={
                        "bg-bg-secondary border border-border-primary rounded-2xl p-4"
                    }
                >
                    <p className={"text-sm text-text-secondary"}>{item.label}</p>

                    <h2 className={"text-2xl font-semibold mt-2"}>{item.value}</h2>
                </div>
            ))}
        </div>
    );
};

export default MyTaskStatistic;