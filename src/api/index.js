import request from "@/utils/request";

export function selMenuList(params) {
  return request.post("/api/public/home/selTagList", {
    ...params
  });
}

export function selUserList(params) {
  return request.post("/api/public/home/selUserList", {
    ...params
  });
}
