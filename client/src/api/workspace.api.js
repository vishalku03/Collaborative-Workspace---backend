import api from "./axios";

export const inviteUser = (workspaceId, data) =>
  api.post(`/workspaces/${workspaceId}/invite`, data);
