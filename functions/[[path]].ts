import {createPagesFunctionHandler} from "@react-router/cloudflare";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - the server build file is generated by `remix vite:build`
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({build});
