import {useCallback} from "react";
import type {Notification} from "@/features/notification/types/notification.type.ts";
import {useNotificationRealtime} from "@/features/notification/hooks/useNotificationRealtime.ts";

type NotificationRealTimeListenerProps = {
    userId?: string;
}
const NotificationRealtimeListener = ({userId}: NotificationRealTimeListenerProps) => {
    const handleNotification = useCallback(
        (notification: Notification) => {
            console.log("New notification:", notification);

            // Bước tiếp theo:
            // 1. Cập nhật notification query cache.
            // 2. Cập nhật unread count.
            // 3. Hiển thị toast nếu cần.
        },
        [],
    );

    useNotificationRealtime({
        userId,
        onNotification: handleNotification,
    });
    return null;
};

export default NotificationRealtimeListener;