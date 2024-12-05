import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("imoveis/:id", "routes/details.tsx"),
  route("termos-de-uso", "routes/terms.tsx"),
] satisfies RouteConfig;
