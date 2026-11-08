import { supabase } from "@/shared/libs/supabase";

export const markANotificationAsReadApi = async (notificationId: string) => {
  const { data, error } = await supabase.rpc("mark_notification_as_read", {
    p_notification_id: notificationId,
  });
  if (error) throw error;

  return data;
};

export const markAllNotificationsAsReadApi = async () => {
  const { data, error } = await supabase.rpc("mark_all_notifications_as_read");
  if (error) throw error;
  return data;
};
