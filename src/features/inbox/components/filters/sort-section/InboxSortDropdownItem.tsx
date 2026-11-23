import { INBOX_SORT_OPTIONS } from "@/features/inbox/constants/inbox-filter.constant.ts";
import { useInboxFilterStore } from "@/features/inbox/stores/inbox-filter.store.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";
const InboxSortDropdownItem = () => {
  const { sort, setSort } = useInboxFilterStore();
  return (
    <>
      {INBOX_SORT_OPTIONS.map((option) => (
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

export default InboxSortDropdownItem;
