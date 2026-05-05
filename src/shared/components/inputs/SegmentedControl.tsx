type Option<T> = {
    label: string;
    value: T;
}

type SegmentedControlProps<T> = {
    options: Option<T>[];
    value: T;
    onChange: (val: T) => void;
}
const SegmentedControl = <T extends string>({
    options,
    value,
    onChange}: SegmentedControlProps<T>) => {
    return (
        <div className={"inline-flex p-1 bg-bg-secondary rounded-md border border-border-primary"}>
            {options.map(option => {
                const active = option.value === value;

                return (
                    <button key={option.value}
                    onClick={() => onChange(option.value)}
                    className={`px-3 py-1.5 text-sm rounded-md transition 
                    ${active ? "bg-primary/20 text-primary" : "text-text-secondary hover:bg-secondary-hover"}`}>{option.label}</button>
                )
            })}
        </div>
    );
};

export default SegmentedControl;