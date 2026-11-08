import { useEffect } from "react";
import { supabase } from "@/shared/libs/supabase.ts";
import type { Notification } from "@/features/notification/types/notification.type.ts";

type NotificationRealtimeProps = {
  userId?: string;
  onNotification: (notification: Notification) => void;
};
export const useNotificationRealtime = ({
  userId,
  onNotification,
}: NotificationRealtimeProps) => {
  useEffect(() => {
    if (!userId) {
      return;
    }

    const channel = supabase
      .channel(`notifications:${userId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Notifications",
          filter: `receiver_id=eq.${userId}`,
        },
        (payload) => {
          onNotification(payload.new as Notification);
        },
      )
      .subscribe((status, error) => {
        if (status === "SUBSCRIBED") {
          console.log("Notification Realtime connected");
        }
        if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          // tam thoi
          console.error("Notification Realtime error:", error);
        }
      });
    return () => {
      void supabase.removeChannel(channel);
    };
  }, [userId, onNotification]);
};
