import { PostWorker } from "src/apis/wrap-worker"

import type Parse from "../parsers/[general]"
import Worker from "../workers/[general]?worker"

export default async function (path: string, page: number) {
  const { data } = await get(`/${path}/trang-${page}.html`)

  return PostWorker<typeof Parse>(Worker, data, Date.now())
}
