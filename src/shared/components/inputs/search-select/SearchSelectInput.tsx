import Input from "@/shared/components/inputs/Input.tsx";

type SearchSelectInputProps = {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
}
const SearchSelectInput = ({value, placeholder, onChange, onFocus}: SearchSelectInputProps) => {
    return (
        <Input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} onFocus={onFocus} />
    );
};

export default SearchSelectInput;