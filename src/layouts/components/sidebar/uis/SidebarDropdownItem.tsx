import { useLogout } from "@/features/auth/hooks/useLogout";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import { LOGIN } from "@/shared/constants/route.constant";
import { useNavigate } from "react-router-dom";
import LoadingSpin from "@/shared/components/LoadingSpin.tsx";

const SidebarDropdownItem = () => {
  const { mutateAsync: logout, isPending } = useLogout();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate(LOGIN, { replace: true });
    } catch {
      return;
    }
  };

  if (isPending) {
    return <LoadingSpin />;
  }
  return (
    <>
      <DropdownItem>Settings</DropdownItem>
      <div className={"my-1 h-px bg-text-primary/30"} />
      <DropdownItem danger onClick={handleLogout}>
        Logout
      </DropdownItem>
    </>
  );
};

export default SidebarDropdownItem;
