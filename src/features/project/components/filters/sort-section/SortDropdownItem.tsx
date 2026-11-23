import { SORT_OPTIONS } from "@/features/project/constants/project-filter.constant.ts";
import { useProjectFilterStore } from "@/features/project/stores/project-filter.store.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";

type SortDropdownItemProps = {};
const SortDropdownItem = ({}: SortDropdownItemProps) => {
  const { sort, setSort } = useProjectFilterStore();
  return (
    <>
      {SORT_OPTIONS.map((option) => (
        <DropdownSelectedItem
          key={option.value}
          selected={option.value === sort}
          onClick={() => setSort(option.value)}
        >
          {option.label}
        </DropdownSelectedItem>
      ))}
    </>
  );
};

export default SortDropdownItem;
